import {HotModuleReplacementPlugin, optimize} from 'webpack';

const {OccurenceOrderPlugin} = optimize;
const entry = {
  'example-universal': ['./examples/common/universal/client'],
  'example-universal+redux': ['./examples/common/universal+redux/client']
};

Object.keys(entry).forEach(function (key) {
  entry[key].unshift('webpack-hot-middleware/client?reload=true');
});

export const config = {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry,
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [['react-transform', {
            transforms: [
              {
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              },
              {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }
            ]
          }]],
          presets: ['es2015', 'react']
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loader: 'json',
        test: /\.json$/
      }
    ],
    preLoaders: [{
      exclude: /node_modules/,
      loader: 'eslint',
      test: /\.js$/
    }]
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    publicPath: '/'
  },
  plugins: [
    new OccurenceOrderPlugin(),
    new HotModuleReplacementPlugin()
  ],
  resolve: {modulesDirectories: ['src', 'node_modules']}
};
