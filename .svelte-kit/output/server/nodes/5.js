

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.43d2f583.js","_app/immutable/chunks/index.87dc2897.js"];
export const stylesheets = ["_app/immutable/assets/5.58f78b4e.css"];
export const fonts = [];
