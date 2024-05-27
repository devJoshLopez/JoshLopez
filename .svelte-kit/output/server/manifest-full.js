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
		client: {"start":"_app/immutable/entry/start.Ci70Wkj7.js","app":"_app/immutable/entry/app.SmLtqFUL.js","imports":["_app/immutable/entry/start.Ci70Wkj7.js","_app/immutable/chunks/entry.D3_NRcD8.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.SmLtqFUL.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DRXGOTEa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
