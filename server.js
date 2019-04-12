'use strict'
const Hapi = require('hapi')
const server = Hapi.server({ port: 8080 })

const start = async () => {
  await server.register(require('vision'))
  await server.register(require('inert'))
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'sample'
  })

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist'
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h) {
      return h.view('index')
    }
  })
  server.route({
    method: 'GET',
    path: '/pro',
    handler: function(request, h) {
      return h.view('pro')
    }
  })
  await server.start()
}

start()
console.log('server start')
