import Router from 'koa-router'
import mock from './../controllers/mock'

let router = new Router()
router.use('/mock', mock.routes(), mock.allowedMethods())

export default router
