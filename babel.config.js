// https://babeljs.io/docs/en/configuration
const presets = [
  [
    '@babel/env',
    {
      targets: {
        ie: '9',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
        /**
         * you can also set browsers here
         * "browsers": ["last 3 versions", "safari 7"]
         * relative links:
         * https://babeljs.io/docs/en/next/babel-preset-env.html
         * https://github.com/browserslist/browserslist
         */
      },
      corejs: '3', // should be set
      /**
       * https://babeljs.io/docs/en/usage#polyfill
       * "usage" will practically apply the last optimization mentioned above where you only include the polyfills you need
       */
      useBuiltIns: 'usage'
    }
  ]
]
const plugins = []

if (process.env['ENV'] === 'prod') {
  // plugins.push(...);
}
module.exports = { presets, plugins }
