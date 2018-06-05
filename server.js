const Vue = require('vue');
const fs = require('fs');
const express = require('express');
const { createRenderer, createBundleRenderer } = require('vue-server-renderer');

const { createApp } = require('./app');
// const createApp = require('/path/to/built-server-bundle.js')

const app = express();

const template = fs.readFileSync('./index.template.html', 'utf-8');
const serverBundle = require('/vue-ssr-server-bundle.json');
// const clientManifest = require('/path/to/vue-ssr-client-manifest.json');

// Create the renderen based on template
const renderer = createBundleRenderer(serverBundle, {
	runInNewContext: false, // recommended
	template, // (optional) page template
	// clientManifest, // (optional) client build manifest
});

// app.get('*', (req, res) => {
// 	const context = { url: req.url, title: 'Testing Vue' };
// 	const app = createApp(context);

// 	createApp(context).then(app => {
// 		renderer.renderToString(app, context, (err, html) => {
// 			if (err) {
// 				if (err.code === 404) {
// 					res.status(404).end('Page not found');
// 				} else {
// 					res.status(500).end('Internal Server Error');
// 				}
// 			} else {
// 				res.end(html);
// 			}
// 		});
// 	});

// });

// inside a server handler...
app.get('*', (req, res) => {
	const context = { url: req.url };
	// No need to pass an app here because it is auto-created by
	// executing the bundle. Now our server is decoupled from our Vue app!
	renderer.renderToString(context, (err, html) => {
		// handle error...
		res.end(html);
	});
});
