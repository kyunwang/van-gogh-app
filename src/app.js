const Vue = require('vue');

const App = require('./App.vue');

const { createRouter } = require('./router');

// export a factory function for creating fresh app, router and store
// instances
const createApp = context => {
	const router = createRouter();

	const app = new Vue({
		router,
		// the root instance simply renders the App component.
		render: h => h(App),
	});

	return { app, router };

	// return new Vue({
	// 	data: {
	// 		url: context.url,
	// 	},
	// 	template: `<div>The visited URL is: {{ url }}</div>`,
	// });
};

module.exports = createApp;
