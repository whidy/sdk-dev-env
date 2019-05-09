'use strict'
const Handlebars = require('handlebars');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');
const server = Hapi.server({ port: 8080 })

const start = async () => {
  await server.register(Vision)
  await server.register(Inert)
  server.views({
    engines: {
      html: Handlebars
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
