const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const template = fs.readFileSync(path.resolve('./src/index.template.html'), 'utf-8');

require('dotenv').config({ path: './vars.env' });

const server = express();
const isProduction = process.env.NODE_ENV === 'production';

function createAppRenderer(serverBundle, options) {
	return createBundleRenderer(
		serverBundle,
		Object.assign(options, {
			template,
			runInNewContext: false,
		})
	);
}

const appRenderer = (function() {
	if (isProduction) {
		const serverBundle = require('../dist/vue-ssr-server-bundle.json');
		const clientManifest = require('../dist/vue-ssr-client-manifest.json');

		return createAppRenderer(serverBundle, { clientManifest });
	} else {
		return new Promise(resolve => {
			require('../config/setup-dev-server.js')(server, (serverBundle, options) => {
				resolve(createAppRenderer(serverBundle, options));
			});
		});
	}
})();

function response(app, req, res) {
	const context = { url: req.url };

	app.renderToString(context, (err, html) => {
		if (err) {
			if (err.code === 404) {
				res.status(404).end('Page not found');
			} else {
				res.status(500).end('Server error');
			}
		} else {
			res.end(html);
		}
	});
}

server.use('/', express.static(path.resolve('../dist/')));

server.get('*', (req, res) => {
	if (isProduction) {
		response(appRenderer, req, res);
	} else {
		appRenderer.then(result => {
			response(result, req, res);
		});
	}
});

const port = process.env.PORT;

server.listen(port, () => {
	console.log(`server started at localhost: ${port}`);
});

module.exports = server;
