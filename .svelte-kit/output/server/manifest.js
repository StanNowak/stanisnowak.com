export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Portrait.jpeg","StanNowakCV.pdf","Thumbnails/.DS_Store","Thumbnails/ASCR.png","Thumbnails/BELIV18.png","Thumbnails/BlackMarble_2016_rotate_1080p.mov","Thumbnails/CGA23.png","Thumbnails/Frontier21.jpeg","Thumbnails/GI22.png","Thumbnails/ISSW18.png","Thumbnails/ISSW23.png","Thumbnails/ISSW23avid.png","Thumbnails/ISSW23handoff.png","Thumbnails/ISSW23problem.png","Thumbnails/NHESS20.png","Thumbnails/Thesis23.png","Thumbnails/Viz23.png","Thumbnails/VizShort20.png","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".mov":"video/quicktime"},
	_: {
		client: {"start":"_app/immutable/entry/start.fd7bd2f7.js","app":"_app/immutable/entry/app.22616e52.js","imports":["_app/immutable/entry/start.fd7bd2f7.js","_app/immutable/chunks/index.87dc2897.js","_app/immutable/chunks/singletons.38bce1ad.js","_app/immutable/entry/app.22616e52.js","_app/immutable/chunks/index.87dc2897.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
