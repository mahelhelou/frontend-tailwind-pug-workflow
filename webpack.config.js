const currentTask = process.env.npm_lifecycle_event
const path = require('path')

// Plugins
const PugPlugin = require('pug-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const config = {
	/**
	 * Entry of pug files only.
	 * Don't put any entry CSS or JS files.
	 * Because pug-plugin outputs CSS and Js files on "build" process/script.
	 */
	entry: {
		index: './src/pug/index.pug',
		'index-rtl': './src/pug/index-rtl.pug',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/[name].[contenthash:8].js',
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		/**
		 * Open the project on mobile using ip:300. How to know the ip from Terminal?
		 * Windows: ipconfig
		 * Mac: For Ethernet connections, enter the command ipconfig getifaddr en1. For Wi-Fi connections, enter the command ipconfig getifaddr en0
		 */
		host: '0.0.0.0', // Mac: System settings -> WIFI -> Connection -> IP Address
		port: 3000,
		static: {
			directory: path.resolve(__dirname, 'public'),
		},
		// open: true,
		hot: true,
		// liveReload: false,
		watchFiles: {
			paths: ['src/**/*.*'],
			options: {
				usePolling: true,
			},
		},
	},
	stats: {
		errorDetails: true,
	},
	module: {
		rules: [
			{
				test: /\.pug$/i,
				loader: PugPlugin.loader,
			},
			{
				test: /\.css$/i,
				use: ['css-loader', 'postcss-loader'],
			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg|ico|svg)/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext][query]',
				},
			},
		],
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			extractComments: true,
			extractCss: {
				filename: 'css/[name].[contenthash:8].css',
			},
		}),
		new CssMinimizerPlugin({
			minimizerOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
		}),
	],
}

if (currentTask == 'dev') {
	config.mode = 'development'
}

if (currentTask == 'build') {
	config.mode = 'production'
}

module.exports = config
