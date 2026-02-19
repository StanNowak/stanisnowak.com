<script>
  import { onMount, onDestroy } from 'svelte';

  export let mode = 0;

  let canvas;
  let ctx;
  let animId;
  let mouse = { x: -1000, y: -1000 };
  let ripples = [];
  let time = 0;
  let opacity = 0;
  let W = 0, H = 0;
  let noiseField = null;
  let fieldCols = 0, fieldRows = 0;

  const COLORS = ['#B22222', '#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#1B998B'];
  const CELL = 14;
  const CONTOUR_LEVELS = 9;

  // --- Noise ---
  const PERM = new Uint8Array(512);
  function initPerm() {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
  }

  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + t * (b - a); }
  function grad(hash, x, y) {
    const h = hash & 3;
    return ((h < 2 ? x : -x) + (h === 0 || h === 3 ? y : -y));
  }

  function noise(x, y) {
    const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x), yf = y - Math.floor(y);
    const u = fade(xf), v = fade(yf);
    const aa = PERM[PERM[xi] + yi], ab = PERM[PERM[xi] + yi + 1];
    const ba = PERM[PERM[xi + 1] + yi], bb = PERM[PERM[xi + 1] + yi + 1];
    return lerp(
      lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
      lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u), v
    );
  }

  function fbm(x, y) {
    return 0.5 * noise(x, y) + 0.25 * noise(x * 2, y * 2) + 0.125 * noise(x * 4, y * 4);
  }

  function hexToRgb(hex) {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  }

  // --- Compute noise field ---
  function computeField() {
    fieldCols = Math.ceil(W / CELL) + 1;
    fieldRows = Math.ceil(H / CELL) + 1;
    noiseField = new Float32Array(fieldCols * fieldRows);

    const scale = 0.003;
    const mx = mouse.x / (W || 1);
    const my = mouse.y / (H || 1);

    for (let r = 0; r < fieldRows; r++) {
      for (let c = 0; c < fieldCols; c++) {
        const px = c * CELL;
        const py = r * CELL;
        const dx = (px / (W || 1) - mx) * 0.15;
        const dy = (py / (H || 1) - my) * 0.15;
        noiseField[r * fieldCols + c] = fbm(px * scale + dx + time * 0.06, py * scale + dy + time * 0.04);
      }
    }
  }

  // --- Marching squares contour extraction ---
  function drawContours() {
    for (let lev = 0; lev < CONTOUR_LEVELS; lev++) {
      const threshold = -0.4 + (lev / CONTOUR_LEVELS) * 0.8;

      ctx.beginPath();
      let hasBaseSegments = false;

      const colorSegments = [];

      for (let r = 0; r < fieldRows - 1; r++) {
        for (let c = 0; c < fieldCols - 1; c++) {
          const tl = noiseField[r * fieldCols + c];
          const tr = noiseField[r * fieldCols + c + 1];
          const br = noiseField[(r + 1) * fieldCols + c + 1];
          const bl = noiseField[(r + 1) * fieldCols + c];

          const x0 = c * CELL, y0 = r * CELL;
          const x1 = x0 + CELL, y1 = y0 + CELL;

          let corners = 0;
          if (tl >= threshold) corners |= 8;
          if (tr >= threshold) corners |= 4;
          if (br >= threshold) corners |= 2;
          if (bl >= threshold) corners |= 1;

          if (corners === 0 || corners === 15) continue;

          const t_top = (threshold - tl) / (tr - tl);
          const t_right = (threshold - tr) / (br - tr);
          const t_bottom = (threshold - bl) / (br - bl);
          const t_left = (threshold - tl) / (bl - tl);

          const top = [lerp(x0, x1, t_top), y0];
          const right = [x1, lerp(y0, y1, t_right)];
          const bottom = [lerp(x0, x1, t_bottom), y1];
          const left = [x0, lerp(y0, y1, t_left)];

          const segments = [];

          switch (corners) {
            case 1: case 14: segments.push([bottom, left]); break;
            case 2: case 13: segments.push([right, bottom]); break;
            case 3: case 12: segments.push([right, left]); break;
            case 4: case 11: segments.push([top, right]); break;
            case 5: segments.push([top, right], [bottom, left]); break;
            case 6: case 9: segments.push([top, bottom]); break;
            case 7: case 8: segments.push([top, left]); break;
            case 10: segments.push([top, left], [right, bottom]); break;
          }

          for (const [p1, p2] of segments) {
            if (isNaN(p1[0]) || isNaN(p1[1]) || isNaN(p2[0]) || isNaN(p2[1])) continue;

            const mid = [(p1[0] + p2[0]) * 0.5, (p1[1] + p2[1]) * 0.5];
            const { intensity, ripple: rip } = computeRipple(mid[0], mid[1]);

            if (intensity > 0.01 && rip) {
              colorSegments.push({ p1, p2, rgb: rip.rgb, intensity });
            } else {
              ctx.moveTo(p1[0], p1[1]);
              ctx.lineTo(p2[0], p2[1]);
              hasBaseSegments = true;
            }
          }
        }
      }

      if (hasBaseSegments) {
        ctx.strokeStyle = `rgba(190, 185, 175, ${0.25 * opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (const seg of colorSegments) {
        ctx.beginPath();
        ctx.moveTo(seg.p1[0], seg.p1[1]);
        ctx.lineTo(seg.p2[0], seg.p2[1]);
        const a = Math.min(0.9, seg.intensity) * opacity;
        ctx.strokeStyle = `rgba(${seg.rgb[0]}, ${seg.rgb[1]}, ${seg.rgb[2]}, ${a})`;
        ctx.lineWidth = 1 + seg.intensity * 2.5;
        ctx.stroke();
      }
    }
  }

  // --- Dot grid ---
  const DOT_STEP = 10;
  const DOT_LEVELS = 10;

  function computeRipple(px, py) {
    let maxIntensity = 0;
    let bestRipple = null;

    for (const rip of ripples) {
      const dist = Math.sqrt((px - rip.x) ** 2 + (py - rip.y) ** 2);
      const wavefront = rip.radius;

      if (dist > wavefront + 60) continue;

      const waveDist = Math.abs(dist - wavefront);
      const waveThickness = 50;
      let waveIntensity = 0;
      if (waveDist < waveThickness) {
        waveIntensity = (1 - waveDist / waveThickness);
        waveIntensity *= waveIntensity;
      }

      let trailIntensity = 0;
      if (dist < wavefront) {
        const trailAge = (wavefront - dist) / 2;
        trailIntensity = Math.max(0, 1 - trailAge / 600);
        trailIntensity *= trailIntensity;
      }

      const age = time - rip.birth;
      const fadeOut = Math.max(0, 1 - age * 0.18);
      const intensity = Math.max(waveIntensity, trailIntensity * 0.65) * fadeOut;

      if (intensity > maxIntensity) {
        maxIntensity = intensity;
        bestRipple = rip;
      }
    }

    return { intensity: maxIntensity, ripple: bestRipple };
  }

  function drawDotGrid() {
    const scale = 0.003;
    const mx = mouse.x / (W || 1);
    const my = mouse.y / (H || 1);

    for (let x = 0; x < W; x += DOT_STEP) {
      for (let y = 0; y < H; y += DOT_STEP) {
        const dx = (x / (W || 1) - mx) * 0.15;
        const dy = (y / (H || 1) - my) * 0.15;
        const n = fbm(x * scale + dx + time * 0.06, y * scale + dy + time * 0.04);

        let onContour = false;
        for (let l = 0; l < DOT_LEVELS; l++) {
          const threshold = -0.4 + (l / DOT_LEVELS) * 0.8;
          if (Math.abs(n - threshold) < 0.022) {
            onContour = true;
            break;
          }
        }

        if (!onContour) continue;

        const { intensity, ripple: rip } = computeRipple(x, y);

        if (intensity > 0.01 && rip) {
          const a = Math.min(0.9, intensity) * opacity;
          const rad = 1.2 + intensity * 2.5;
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rip.rgb[0]}, ${rip.rgb[1]}, ${rip.rgb[2]}, ${a})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190, 185, 175, ${0.3 * opacity})`;
          ctx.fill();
        }
      }
    }
  }

  // --- Resize ---
  function resize() {
    if (!canvas) return;
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function handleClick(e) {
    if (mode >= 2) return;
    if (e.target.closest('.easter-egg')) return;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      color,
      rgb: hexToRgb(color),
      birth: time,
    });
    if (ripples.length > 10) ripples.shift();
  }

  // --- Main loop ---
  function draw() {
    if (!ctx || !canvas) return;

    const target = mode < 2 ? 1 : 0;
    if (opacity < target) opacity = Math.min(1, opacity + 0.02);
    if (opacity > target) opacity = Math.max(0, opacity - 0.02);

    if (opacity <= 0 && mode === 2) {
      cancelAnimationFrame(animId);
      animId = null;
      ctx.clearRect(0, 0, W, H);
      return;
    }

    for (const rip of ripples) {
      rip.radius += 2;
    }
    ripples = ripples.filter(r => (time - r.birth) < 7);

    ctx.clearRect(0, 0, W, H);

    if (mode === 0) {
      computeField();
      drawContours();
    } else if (mode === 1) {
      drawDotGrid();
    }

    time += 0.016;
    animId = requestAnimationFrame(draw);
  }

  function startLoop() {
    if (!animId && canvas && ctx) {
      draw();
    }
  }

  $: if ((mode === 0 || mode === 1) && ctx) startLoop();

  onMount(() => {
    initPerm();
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    if (mode < 2) startLoop();
  });

  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    }
  });
</script>

<canvas bind:this={canvas} class="topo-canvas" class:visible={opacity > 0 || mode < 2}></canvas>

<style>
  .topo-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    display: none;
  }

  .topo-canvas.visible {
    display: block;
  }
</style>
