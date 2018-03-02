import Router from 'koa-router'

let mock = new Router()

mock.get('/one', async (ctx, next) => {
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

export default mock
