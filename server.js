const Vue = require('vue');
const fs = require('fs');
const express = require('express');
const { createRenderer } = require('vue-server-renderer');

const { createApp } = require('./app');
// const createApp = require('/path/to/built-server-bundle.js')

const app = express();

// Create the renderen based on template
const renderer = createRenderer({
	runInNewContext: false,
	template: fs.readFileSync('./index.template.html', 'utf-8'),
});

app.get('*', (req, res) => {
	const context = { url: req.url, title: 'Testing Vue' };
	const app = createApp(context);

	// renderer.renderToString(app, context, (err, html) => {
	// 	console.log(html); // will be the full page with app content injected.
	// 	res.end(html);
	// });

	createApp(context).then(app => {
		renderer.renderToString(app, context, (err, html) => {
			if (err) {
				if (err.code === 404) {
					res.status(404).end('Page not found');
				} else {
					res.status(500).end('Internal Server Error');
				}
			} else {
				res.end(html);
			}
		});
	});
});
