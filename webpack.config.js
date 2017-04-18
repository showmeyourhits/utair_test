const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
			js: path.resolve('src/js')
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('src/template.html'),
		})
	]
}