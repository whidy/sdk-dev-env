# javascript sdk develop enviroment（JS-SDK开发环境）

**该项目环境目前尚不稳定，仅用于测试，请勿使用在生产环境**

该仓库用作开发JavaScript SDK用的一个基础骨架。

## 特性

* 采用`Webpack 4.29.6`进行构建
* 使用`eslint`+`prettier`进行代码格式化
* 建议`vscode`开发，已配置好保存自动格式化代码
* 结合`babel`+`core-js`编译，兼容性IE9及以上
* 采用`Hapi`作为node服务器，实现简单的SSR及相关功能
* 采用`nodemon`对服务端文件变更及时更新，同时也支持Webpack监听

主要是个人做一些SDK开发时搭建的快速编译构建环境。

哎，前端发展太快了。每次搭环境都要重新看一下各种文档，配置看起来大同小异，但是总是有点问题，为了兼容低版本IE也是花了些精力配这个。反复尝试，也不知道哪里出问题没有。感觉暂时没啥问题，先发个初版。

相关链接：

* [core-js](https://github.com/zloirock/core-js)
* [webpack/babel-loader](https://webpack.docschina.org/loaders/babel-loader/)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## 分支说明

针对不同的ES版本进行了分支维护，关于不同版本的ECMAScript的特性，我这里找了几篇文章，你可以仔细阅读下：

* [JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)
* [细解JavaScript ES7 ES8 ES9 新特性](https://segmentfault.com/a/1190000017174508)

### master

该分支仅支持es6以下的语法进行SDK开发。你可以阅读Babel官方的[Learn ES2015](https://babeljs.io/docs/en/learn.html)

这里对常用的ES6特性进行测试：

1. Default Parameters in ES6
1. Template Literals in ES6
1. Multi-line Strings in ES6
1. Destructuring Assignment in ES6
1. Enhanced Object Literals in ES6
1. Arrow Functions in ES6
1. Promises in ES6
1. Block-Scoped Constructs Let and Const
1. Classes in ES6
1. Modules in ES6

参考：[Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/)

### for-es7

配置中。。。

### for-es8

配置中。。。

### for-es9

配置中。。。
