const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.png', '.svg', '.jpg'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/cookingList/'
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    compress: true,
    historyApiFallback: true,
    port: 4000
  }
};
