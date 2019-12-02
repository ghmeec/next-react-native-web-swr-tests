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

module.exports = withTM({
  transpileModules: ['react-native-responsive-layout']
});