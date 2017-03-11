module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: 'build',
		filename: '[name]_bundle.js',
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
	}
}