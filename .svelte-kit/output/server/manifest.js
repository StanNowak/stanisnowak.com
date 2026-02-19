export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Portrait.jpeg","StanNowakCV.pdf","Thumbnails/.DS_Store","Thumbnails/ASCR.png","Thumbnails/BELIV18.png","Thumbnails/CGA23.png","Thumbnails/Frontier21.jpeg","Thumbnails/GI22.png","Thumbnails/ISSW18.png","Thumbnails/ISSW23.png","Thumbnails/ISSW23avid.png","Thumbnails/ISSW23handoff.png","Thumbnails/ISSW23problem.png","Thumbnails/NHESS20.png","Thumbnails/Thesis23.png","Thumbnails/Viz23.png","Thumbnails/VizShort20.png","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BRSWVbGs.js",app:"_app/immutable/entry/app.CFbT_xjL.js",imports:["_app/immutable/entry/start.BRSWVbGs.js","_app/immutable/chunks/Cwp7gbq5.js","_app/immutable/chunks/B6jPrfC4.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CtzvjiLI.js","_app/immutable/chunks/Da1t4b9L.js","_app/immutable/entry/app.CFbT_xjL.js","_app/immutable/chunks/B6jPrfC4.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B65ORruV.js","_app/immutable/chunks/CJwDp24H.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/Da1t4b9L.js","_app/immutable/chunks/CdhhH85c.js","_app/immutable/chunks/D2ewdDp4.js","_app/immutable/chunks/CtzvjiLI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/cv","/publications"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
