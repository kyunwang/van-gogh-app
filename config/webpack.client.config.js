const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
	entry: {
		app: './src/entry-client.js',
		vendor: ['vue', 'vue-router'],
	},

	resolve: {
		alias: {
			'create-api': './create-api-client.js',
		},
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.VUE_ENV': '"client"',
		}),

		new VueSSRClientPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.template.html',
		}),
	],
});
