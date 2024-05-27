export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BpPsk_Tn.js","app":"_app/immutable/entry/app.CckFlQSV.js","imports":["_app/immutable/entry/start.BpPsk_Tn.js","_app/immutable/chunks/entry.DkDS_LnQ.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.M7WuUczP.js","_app/immutable/chunks/paths.BVEtIFn6.js","_app/immutable/entry/app.CckFlQSV.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.BVyiaWq_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
