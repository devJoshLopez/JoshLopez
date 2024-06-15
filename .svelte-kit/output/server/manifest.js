export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","indieground-dujitsu/DujitsuFont-Demo.otf","indieground-dujitsu/DujitsuFont-Demo_License_Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-License-Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.ttf","robots.txt","writings-images/radical-training-support.webp"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".txt":"text/plain",".ttf":"font/ttf",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.a81nQ9r-.js","app":"_app/immutable/entry/app.Z6XjK-NB.js","imports":["_app/immutable/entry/start.a81nQ9r-.js","_app/immutable/chunks/entry.BiTq6zR_.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.Bro0tGjg.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.Z6XjK-NB.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.fMHAmEEo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
