const path = require('path')
const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [{
				test: /\.(m?js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react']
					}
				},		
		},
		/*{
			test : /\.js$/, 
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
					//presets: ['es2015','react']
			}
    },*/
		{
			test: /\.pug$/,
			loader: 'pug-loader',
			options: {
				pretty: true
			}
		},{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.sass$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }
      ]
    }]
	},
	devServer: {
		//inline: false,
		historyApiFallback: true,	
	},
  plugins: [
		new webpack.NamedModulesPlugin(),
		new SpriteLoaderPlugin(),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery',
			'window.jQuery':'jquery',
		}),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
		new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
		}),
		/*
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.pug`,
		}),
		*/
		new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/static`, to: '' },
		]),
		new ImageminPlugin({
			pngquant: ({ quality: [0.9, 0.9] }),
			plugins: [imageminMozjpeg({ quality: 90 })]
		})
	],
}
