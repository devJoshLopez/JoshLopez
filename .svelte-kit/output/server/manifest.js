export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B2lRvmyw.js","app":"_app/immutable/entry/app.jN-6nIwF.js","imports":["_app/immutable/entry/start.B2lRvmyw.js","_app/immutable/chunks/entry.BAIF5CNb.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/paths.D-Bxr9Oq.js","_app/immutable/entry/app.jN-6nIwF.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Gfjij8qg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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