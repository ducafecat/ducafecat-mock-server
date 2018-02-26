import Router from 'koa-router'
import c2k from 'koa2-connect'
import proxy from 'http-proxy-middleware'
import mock from './../controllers/mock'
import cfg from './../../utils/config'

let router = new Router()
router.use('/mock', mock.routes(), mock.allowedMethods())

// 代理proxy 转发所有本地的 /api 请求
router.get(/^\/api(\/|\/\w+)?$/, c2k(proxy(cfg.proxy)))

export default router
