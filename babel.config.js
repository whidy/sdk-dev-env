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
      },
      corejs: '3', // should be set
      useBuiltIns: 'usage'
    }
  ]
]
const plugins = []

if (process.env['ENV'] === 'prod') {
  // plugins.push(...);
}
module.exports = { presets, plugins }
