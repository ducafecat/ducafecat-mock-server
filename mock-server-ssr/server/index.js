import Koa from 'koa'
import {Nuxt, Builder} from 'nuxt'
import proxy from 'koa-proxies'
import koaBody from 'koa-body'
// import restc from 'restc'
import validator from 'koa2-validator'
import onerror from 'koa-onerror'
import koaJwt from 'koa-jwt'
import cors from '@koa/cors'
import pathToRegexp from 'path-to-regexp'

import {mockRouter, apiRouter} from './routers'
import cfg from './../utils/config'
import UtilFunMiddleware from './../middleware/utilFun'
import logger from './../utils/logger'

async function start() {
  console.log(`process.env.NODE_ENV => ${process.env.NODE_ENV}`)
  
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  onerror(app)
  // validator(app)

  // 中间件
  app
    .use(validator())
    // .use(restc.koa2())
    .use(logger)
    .use(UtilFunMiddleware.util)
    .use(cors({ credentials: true, maxAge: 2592000 }))
    .use(koaJwt({ secret: cfg.server.jwtSecret }).unless((ctx) => {
      if (/^\/api/.test(ctx.path)) {
        return pathToRegexp([
          '/api/u/login',
          '/api/u/register'
        ]).test(ctx.path)
      }
      return true
    }))
    .use(koaBody({multipart: true}))
    .use(mockRouter.routes())
    .use(mockRouter.allowedMethods())
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods())

  // http status 404 改 200
  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  // 代理
  // app.use(proxy(/^\/api\//, {
  //     target: 'https://www.easy-mock.com/mock/5a7bac516347684a0857e274/mserver',
  //     changeOrigin: true,
  //     rewrite: path => path.replace('/api', ''),
  //     logs: true
  //   }))

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
