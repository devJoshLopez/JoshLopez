export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","indieground-dujitsu/DujitsuFont-Demo.otf","indieground-dujitsu/DujitsuFont-Demo_License_Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-License-Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.ttf","robots.txt"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".txt":"text/plain",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.BnsaaWiU.js","app":"_app/immutable/entry/app.CmX5654C.js","imports":["_app/immutable/entry/start.BnsaaWiU.js","_app/immutable/chunks/entry.qy7f59Qk.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/entry/app.CmX5654C.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.DphpNzGg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/connect",
				pattern: /^\/connect\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/videos",
				pattern: /^\/videos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/writings",
				pattern: /^\/writings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
