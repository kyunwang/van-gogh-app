import { createApp } from './app';

const { app, router } = createApp();

// When the router is ready mount the app
router.onReady(() => {
	app.$mount('#app');
});
