import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Portrait.jpeg","StanNowakCV2023.pdf","Thumbnails/.DS_Store","Thumbnails/ASCR.png","Thumbnails/BELIV18.png","Thumbnails/BlackMarble_2016_rotate_1080p.mov","Thumbnails/Frontier21.jpeg","Thumbnails/GI22.png","Thumbnails/ISSW18.png","Thumbnails/NHESS20.png","Thumbnails/VizShort20.png","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".pdf":"application/pdf",".png":"image/png",".mov":"video/quicktime"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d628e3d1.js","imports":["_app/immutable/entry/start.d628e3d1.js","_app/immutable/chunks/index.adf44e31.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cbba2dc6.js","imports":["_app/immutable/entry/app.cbba2dc6.js","_app/immutable/chunks/index.adf44e31.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
