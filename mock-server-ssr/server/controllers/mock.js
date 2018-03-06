/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:33 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:33 
 */

const mock = {
  async getMockAPI(ctx, next) {
    let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
    ctx.body = html
  }
}

export default mock
