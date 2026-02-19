import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BqruNw2h.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B6jPrfC4.js","_app/immutable/chunks/B65ORruV.js","_app/immutable/chunks/CJwDp24H.js","_app/immutable/chunks/B6k0odPG.js","_app/immutable/chunks/CglAJ3RX.js","_app/immutable/chunks/D2ewdDp4.js","_app/immutable/chunks/CtzvjiLI.js","_app/immutable/chunks/Cwp7gbq5.js","_app/immutable/chunks/Da1t4b9L.js","_app/immutable/chunks/CdhhH85c.js"];
export const stylesheets = ["_app/immutable/assets/0.J0bRVyi6.css"];
export const fonts = [];
