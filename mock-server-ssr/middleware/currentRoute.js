export default function (ctx, next) {
  // console.log(context.route)
  let path = ctx.route.fullPath
  if (ctx.route.matched.length) {
    path = ctx.route.matched[0].path
  }
  ctx.store.commit('SET_CURRENT_ROUTER', path)
}
