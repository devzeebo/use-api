const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'core-js/stable',
    path.join(root, 'msw', 'index.ts'),
    path.join(root, 'index.tsx'),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8888,
    contentBase: './public',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: root,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    }],
  },
};
