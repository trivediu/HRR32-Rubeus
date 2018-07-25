const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(DIST_DIR)
//   },
//   module: {
//     rules: [
//       {
//         test : /\.jsx?/,
//         include: SRC_DIR,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['react', 'es2015']
//             }
//           },

//         ]
//       }
//     ]
//   }
// }
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};

// const path = require('path')
