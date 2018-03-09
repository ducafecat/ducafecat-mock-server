import Router from 'koa-router'
import restc from 'restc'
import {user, mock, project} from './../controllers'
import utilFun from './../../middleware/utilFun'

// import mock from './../controllers/mock'

// import c2k from 'koa2-connect'
// import proxy from 'http-proxy-middleware'
// import cfg from './../../utils/config'

let mockRouter = new Router({prefix: '/mock'})
  // .all('*', utilFun.mockFilter, restc.koa2(), mock.getMockAPI)

let apiRouter = new Router({prefix: '/api'})
  .post('/u/login', user.login)
  .post('/u/register', user.register)
  .get('/u/profile', user.profile)
  .get('/project', project.list)
  .post('/project', project.create)
  .put('/project/:id', project.update)
  .delete('/project/:id', project.delete)
  .get('/project/:id', project.detail)

export {mockRouter, apiRouter}
