var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-socket.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'src'),
      query: {
        presets: [
          [
            'es2015',
            { modules: false}
          ]
        ]
      }
    }]
  }
}
