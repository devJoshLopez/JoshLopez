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
		client: {"start":"_app/immutable/entry/start.DePKhlsS.js","app":"_app/immutable/entry/app.Dtwg4-qK.js","imports":["_app/immutable/entry/start.DePKhlsS.js","_app/immutable/chunks/entry.EiY0dT49.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.Dtwg4-qK.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DRXGOTEa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
