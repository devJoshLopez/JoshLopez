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
		client: {"start":"_app/immutable/entry/start.7nVL6erM.js","app":"_app/immutable/entry/app.EkAAID-r.js","imports":["_app/immutable/entry/start.7nVL6erM.js","_app/immutable/chunks/entry.ZvdZwkD3.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/paths.aNVjYpdU.js","_app/immutable/entry/app.EkAAID-r.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Gfjij8qg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
