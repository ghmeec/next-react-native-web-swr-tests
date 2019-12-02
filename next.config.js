// const path=require("path")

// module.exports = {
//   webpack: (config, { defaultLoaders }) => {
//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//       // Transform all direct `react-native` imports to `react-native-web`
//       'react-native$': 'react-native-web',
//     }
//     config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx')

//     config.resolve.modules=[
//       ...config.resolve.modules,
//       path.resolve(__dirname,'node_modules')
//     ]

//     config.module.rules.push({
//       test:/\.+(js|jsx|ts|tsx)$/,
//       use:defaultLoaders.babel,
//       include:[path.resolve(__dirname,'node_modules','react-native-responsive-layout')]
//     })
//     return config
//   },
// }


// next.config.js
const withTM = require('next-transpile-modules');
const path=require('path')

module.exports = withTM({
    transpileModules: ['react-native-responsive-layout','react-native-vector-icons','react-native-elements'],
    webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx')

    config.resolve.modules=[
      ...config.resolve.modules,
      path.resolve(__dirname,'node_modules')
    ]

    config.module.rules.push({
      test:/\.+(js|jsx|ts|tsx)$/,
      use:defaultLoaders.babel,
      include:[
        path.resolve(__dirname,'node_modules','react-native-responsive-layout'),
        // path.resolve(__dirname,'node_modules','react-native-vector-icons'),
        path.resolve(__dirname,'node_modules','react-native-elements'),

      
      ]
    })

    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: { loader: 'url-loader', options: { name: '[name].[ext]' } }
    });
    config.module.rules.push({
      test: /\.ttf$/,
      include: path.resolve(__dirname, 'node_modules', 'react-native-vector-icons'),
      use: { loader: 'url-loader' }
    });

    return config
  },
 
});