import Router from 'koa-router'
import restc from 'restc'
import mock from './../controllers/mock'
import mockFilter from './../../middleware/mockFilter'
<<<<<<< HEAD
=======

// import mock from './../controllers/mock'
>>>>>>> 3ffbd925c6749ab9cb009ed76cf24c3629f7283d

let mockRouter = new Router({prefix: '/mock'})
let apiRouter = new Router({prefix: '/api'})

<<<<<<< HEAD
// mock
// mock/5a7bac516347684a0857e274/mserver/mock/:id
=======
let router = new Router()
let mockRouter = new Router({prefix: '/mock'})
let apiRouter = new Router({prefix: '/api'})

// mock
>>>>>>> 3ffbd925c6749ab9cb009ed76cf24c3629f7283d
mockRouter.all('*', mockFilter, restc.koa2(), mock.getMockAPI)

// api
apiRouter.all('/test', mock.getMockAPI)

export {mockRouter, apiRouter}
<<<<<<< HEAD

// // import c2k from 'koa2-connect'
// // import proxy from 'http-proxy-middleware'
// // import cfg from './../../utils/config'

// let router = new Router()
// router.use('/mock', mock.routes(), mock.allowedMethods())

// // 代理proxy 转发所有本地的 /api 请求
// // router.all(/^\/api(\/|\/\w+)?$/, c2k(proxy(cfg.proxy)))

// export default router
=======
>>>>>>> 3ffbd925c6749ab9cb009ed76cf24c3629f7283d
