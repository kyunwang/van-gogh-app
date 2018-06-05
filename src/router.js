const Vue = require('vue');
const Router = require('vue-router');

Vue.use(Router);

const createRouter = () => {
	return new Router({
		mode: 'history',
		routes: [
			// ...
			// { path: '/data/:type', component: 'Data' }
		],
	});
};

module.exports = createRouter;
