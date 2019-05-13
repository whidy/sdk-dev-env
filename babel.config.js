// https://babeljs.io/docs/en/configuration
const presets = [
  [
    '@babel/env',
    {
      // https://babeljs.io/docs/en/babel-preset-env#targets
      // TODO: how to compatibilite with ie 8
      targets: {
        ie: '8',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
        /**
         * you can also set browsers in package.json
         * "browserslist": ["last 3 versions"]
         * relative links:
         * https://github.com/browserslist/browserslist
         */
      },
      corejs: '3',
      // corejs: { version: 3, proposals: true },
      /**
       * https://babeljs.io/docs/en/usage#polyfill
       * https://github.com/zloirock/core-js#babelpreset-env
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
