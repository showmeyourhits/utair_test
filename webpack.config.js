const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve('src/index.js'),
	},
	output: {
		path: 'build',
		filename: '[name]_bundle.js',
	},
	resolve: {
		alias: {
			js: path.resolve('src/js'),
			styles: path.resolve('src/styles'),
		}
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: {
					loader: "babel-loader",
					options: {
						presets: ['es2015', 'react', 'stage-1'],
					},
				}
			},
			{
				test: /\.scss$/,
				exclude: [/node_modules/],
				use: ExtractTextPlugin.extract([{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
						importLoader: 1,
						localIdentName: '[name]__[local]___[hash:base64:5]'
					}	
				}, {
					loader: 'sass-loader',
				}]),
			},
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'styles.css',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve('src/template.html'),
		}),
	]
}
