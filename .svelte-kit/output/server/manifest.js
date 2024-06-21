export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","indieground-dujitsu/DujitsuFont-Demo.otf","indieground-dujitsu/DujitsuFont-Demo_License_Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative1.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Alternative2.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Bold.ttf","indieground-teenagedreams/TeenageDreamsFont-Demo-License-Readme.txt","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.otf","indieground-teenagedreams/TeenageDreamsFont-Demo-Regular.ttf","robots.txt","site.webmanifest","writings-images/ai-mirror-to-our-humanity.webp","writings-images/how-video-games-shaped-my-childhood.webp","writings-images/mythological-quests-support-training.webp"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".txt":"text/plain",".ttf":"font/ttf",".webmanifest":"application/manifest+json",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.fOPgwICT.js","app":"_app/immutable/entry/app.B-8thfLn.js","imports":["_app/immutable/entry/start.fOPgwICT.js","_app/immutable/chunks/entry.FibEO-Vn.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.YqLmEJqg.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.B-8thfLn.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.UQYxIaCD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
