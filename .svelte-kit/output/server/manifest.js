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
		client: {"start":"_app/immutable/entry/start.CCB7LltE.js","app":"_app/immutable/entry/app.BehkU2Qk.js","imports":["_app/immutable/entry/start.CCB7LltE.js","_app/immutable/chunks/entry.ClBJjEa7.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BehkU2Qk.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CFUezsYx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
