const {alias, configPaths} = require('react-app-rewire-alias');
const webpack = require('webpack');
module.exports = function override(config) {
   alias(configPaths('./tsconfig.paths.json'))(config);
   config.plugins.push(
      new webpack.DefinePlugin({
         GOOGLE_API_BOOKS: JSON.stringify(
            'https://www.googleapis.com/books/v1/volumes'
         ),
      })
   );
   return config;
};
