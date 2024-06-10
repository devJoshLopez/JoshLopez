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
		client: {"start":"_app/immutable/entry/start.C2M2pX5W.js","app":"_app/immutable/entry/app.CGvI8BU_.js","imports":["_app/immutable/entry/start.C2M2pX5W.js","_app/immutable/chunks/entry.C9h2ulPP.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/entry/app.CGvI8BU_.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.DphpNzGg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
