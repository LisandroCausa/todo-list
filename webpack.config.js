const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
    	index: './src/index.js',
		todo: './src/todo.js',
	},
	module: {
	rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
	],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'todo-list',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};