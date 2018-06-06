import { createApp } from './app';

function createServer(context) {
	return new Promise((resolve, reject) => {
		// Get app & router from createApp
		const { app, router } = createApp();

		// Push (current?) route to
		router.push(context.url);

		// When router is ready
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();

			if (!matchedComponents.length) {
				return reject({ code: 404 });
			}

			resolve(app);
		}, reject);
	});
}

export default createServer;
