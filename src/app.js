import Vue from 'vue';
import App from './App.vue';

import { createRouter } from './router';

function createApp() {
	const router = createRouter();
	const app = new Vue({
		router,
		el: '#app',
		render: h => h(App),
	});

	return { app, router };
}

export { createApp };
