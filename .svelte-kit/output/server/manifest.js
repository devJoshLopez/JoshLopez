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
		client: {"start":"_app/immutable/entry/start.CmK-WE3L.js","app":"_app/immutable/entry/app.DIiHxbC3.js","imports":["_app/immutable/entry/start.CmK-WE3L.js","_app/immutable/chunks/entry.BUVpuQ2y.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.DIiHxbC3.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DRXGOTEa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
