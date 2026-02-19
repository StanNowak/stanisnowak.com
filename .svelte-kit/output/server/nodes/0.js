import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.9d66a5c5.js","_app/immutable/chunks/index.87dc2897.js","_app/immutable/chunks/singletons.38bce1ad.js"];
export const stylesheets = ["_app/immutable/assets/0.fd58130d.css"];
export const fonts = [];
