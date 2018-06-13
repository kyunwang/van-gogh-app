import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Apptour/Home.vue';
import Tourmap from './views/Apptour/Tourmap.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';
import Selection from './views/Apptour/Selection/index.vue';
// import SelectionOverview from './views/SelectionOverview/index.vue';

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
				meta: { title: '' },
			},
			{
				path: '/tourmap',
				name: 'Tourmap',
				component: Tourmap,
				meta: { title: '' },
			},
			{
				path: '/selection',
				name: 'selection',
				component: Selection,
				meta: { title: 'Create your Tour' },
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				component: Dashboard,
				meta: { title: 'MMT Dashboard' },
			},
			// {
			// 	path: '/selection-overview',
			// 	name: 'selection overview',
			// 	component: SelectionOverview,
			// 	meta: { title: 'This is your Tour' },
			// },
		],
	});
}

export { createRouter };
