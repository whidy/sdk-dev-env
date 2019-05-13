# javascript sdk develop enviroment（JS-SDK开发环境）

**该项目环境目前尚不稳定，建议仅用于测试，不建议使用在生产环境**

该仓库用作开发JavaScript SDK用的一个基础骨架。

## 运行

```
npm i
```

开发状态下直接预览效果

```
npm run dev
```

访问<http://localhost:8080>，在控制台查看结果，兼容ie9+。

如需用于生产环境

```
npm run build
npm run start
```

访问<http://localhost:8080>，在控制台查看结果，兼容ie9+。

如有其他问题请提Issue。

## 特性

* 结合`babel 7.4`+`core-js 3`编译，兼容**IE9及以上**
* 采用`Webpack 4.30.0`进行构建
* 使用`eslint`+`prettier`进行代码格式化
* 建议`vscode`开发，已配置好保存自动格式化代码
* 采用`Hapi`作为node服务器，实现简单的SSR及相关功能
* 采用`nodemon`对服务端文件变更及时更新，同时也支持Webpack监听

主要是个人做一些SDK开发时搭建的快速编译构建环境。

哎，前端发展太快了。每次搭环境都要重新看一下各种文档，配置看起来大同小异，但是总是有点问题，为了兼容低版本IE也是花了些精力配这个。反复尝试，也不知道哪里出问题没有。感觉暂时没啥问题，先发个初版。

相关链接：

* [core-js](https://github.com/zloirock/core-js)
* [webpack/babel-loader](https://webpack.docschina.org/loaders/babel-loader/)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## 项目依赖说明

对于不同的分支依赖安装可能有些不同，我这里尽可能描述清楚每一个依赖的用途，强烈反对胡乱装依赖，不用的又不清理的坏习惯。

### Webpack相关：

最基本的Webpack安装（[安装Webpack](https://webpack.docschina.org/guides/installation/)）

```
npm i -D webpack
npm i -D webpack-cli
```

结合Babel需要的部分，babel-loader使用需要（[安装babel-loader](https://webpack.docschina.org/loaders/babel-loader/)）

```
npm i -D babel-loader @babel/core @babel/preset-env
npm i @babel/polyfill core-js
```

* `babel-loader`和Webpack一起使用的loader
* `@babel/core`不知道如何解释反正很重要，详细请见[@babel/core](https://babeljs.io/docs/en/next/babel-core.html)
* `@babel/preset-env`一个智能的预设编译打包环境，在babel配置中设定，它会结合你配置的兼容环境来自动处理。详细请见[@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)
* `@babel/polyfill`和`core-js`支持es2015+的所有转换。

> **注意：**后来官方建议使用`npm i --save core-js regenerator-runtime`。因此我这里会有两种写法。详细请见[@babel/polyfill](https://www.babeljs.cn/docs/babel-polyfill)。

如果你仅用`@babel/polyfill`可能会在构建过程中出现如下提示：

```
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

  ...
```

未在babel配置文件内配置core-js版本，默认读取2.x版，如果装的3.x，则报错。所以需要将配置设置一个正确的core-js版本。

当然关于core-js官方也有推荐不用polyfill，详细请见[core-js babel](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babel)

**注意：**关于`@babel/preset-env`的补充，本例中的使用的**presets**为`@babel/env`（https://babeljs.io/docs/en/usage#configuration），应该等同于`@babel/preset-env`，但是我并没有找到相关说明。

其他的插件

```
npm i -D babel-minify-webpack-plugin clean-webpack-plugin
```

* `babel-minify-webpack-plugin`用于生产环境压缩js
* `clean-webpack-plugin`用于每次编译产出打包文件前清理旧文件

### Hapi

用于本地测试启用的Nodejs服务器，特别注意，**该项目使用`@hapi/hapi`版本号18.x，依赖跟`hapi`的17.x不同！**

```
npm install -D @hapi/hapi @hapi/inert @hapi/vision handlebars
```

* `@hapi/hapi`是nodejs服务器[hapijs](https://hapijs.com/)
* `@hapi/inert`静态文件管理插件[inert](https://github.com/hapijs/inert)
* `@hapi/vision`用于模板渲染的一个插件[vision](https://github.com/hapijs/vision)
* `handlebars`大概是理解为模板引擎[Handlebars.js](http://handlebarsjs.com/)

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
