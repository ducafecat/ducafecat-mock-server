import Koa from 'koa'
import {Nuxt, Builder} from 'nuxt'
import proxy from 'koa-proxies'
import {mockRouter, apiRouter} from './routers'
import cfg from './../utils/config'

async function start() {
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

  // 加载路由中间件
<<<<<<< HEAD
  // app.use(router.routes()).use(router.allowedMethods())
=======
>>>>>>> 3ffbd925c6749ab9cb009ed76cf24c3629f7283d
  app
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
  app.use(proxy(/^\/api\//, cfg.proxy))

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
