const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
	plugins: [],
	/*alias: {
		app: path.resolve(__dirname, '../src')
	}*/
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
