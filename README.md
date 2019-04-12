# javascript sdk develop enviroment（JS-SDK开发环境）

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