import Router from 'koa-router'
import restc from 'restc'
import mock from './../controllers/mock'
import mockFilter from './../../middleware/mockFilter'

// import mock from './../controllers/mock'

// import c2k from 'koa2-connect'
// import proxy from 'http-proxy-middleware'
// import cfg from './../../utils/config'

let router = new Router()
let mockRouter = new Router({prefix: '/mock'})
let apiRouter = new Router({prefix: '/api'})

// mock
mockRouter.all('*', mockFilter, restc.koa2(), mock.getMockAPI)

// api
apiRouter.all('/test', mock.getMockAPI)

export {mockRouter, apiRouter}
