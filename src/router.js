import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

// Return factory function:
// Returns a function which creates Router instance
function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/about',
				name: 'about',
				component: About,
			},
		],
	});
}

export { createRouter };
