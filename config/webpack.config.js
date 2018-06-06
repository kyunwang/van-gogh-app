/*==========================
=== Not for SSR
===========================*/

const path = require('path');
const webpack = require('webpack');

module.exports = {
	// The entry file for the app (client)
	entry: './src/app.js',

	// Where to put the file after compiling/transpiling.bundling and naming it
	output: {
		path: path.resolve(__dirname, '../dist'), // Where the bundle should be put in
		publicPath: '/dist/', // base path for all the assets within your application
		filename: 'bundle.js', // The name of the bundle
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/, // Look for anything with .js
				loader: 'babel-loader', // Use the babel loader over it
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},

	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
};
