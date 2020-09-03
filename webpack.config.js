module.exports = {
	entry: `${__dirname}/src/App.jsx`,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: `${__dirname}/public/dist`
	}
};