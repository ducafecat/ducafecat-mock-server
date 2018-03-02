import Router from 'koa-router'
import restc from 'restc'
import mock from './../controllers/mock'
import mockFilter from './../../middleware/mockFilter'

let mockRouter = new Router({prefix: '/mock'})
let apiRouter = new Router({prefix: '/api'})

// mock
// mock/5a7bac516347684a0857e274/mserver/mock/:id
mockRouter.all('*', mockFilter, restc.koa2(), mock.getMockAPI)

// api
apiRouter.all('/test', mock.getMockAPI)

export {mockRouter, apiRouter}
