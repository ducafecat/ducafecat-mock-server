import pathToRegexp from 'path-to-regexp'

const codeMap = {
  '-1': 'fail',
  '200': 'success',
  '401': 'token expired',
  '500': 'server error',
  '10001': 'params error'
}

const utilFn = {
  resuccess(data) {
    return {
      code: 200,
      success: true,
      message: codeMap['200'],
      data: data || null
    }
  },
  refail(message, code, data) {
    return {
      code: code || -1,
      success: false,
      message: message || codeMap[code],
      data: data || null
    }
  }
}

export default class UtilFunMiddleware {
  static util(ctx, next) {
    ctx.set('X-Request-Id', ctx.req.id)
    ctx.util = utilFn
    return next()
  }

  // static ipFilter (ctx, next) {
  //   if (ipFilter(ctx.ip, blackIPs, {strict: false})) {
  //     ctx.body = utilFn.refail('请求频率太快，已被限制访问')
  //     return
  //   }
  //   return next()
  // }

  static mockFilter(ctx, next) {
    const pathNode = pathToRegexp('/mock/:projectId(.{24})/:mockURL*').exec(
      ctx.path
    )

    if (!pathNode) ctx.throw(404)

    ctx.pathNode = {
      projectId: pathNode[1],
      mockURL: '/' + (pathNode[2] || '')
    }

    return next()
  }
}
