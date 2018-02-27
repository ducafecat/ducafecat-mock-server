export default function (context) {
  // console.log(context.route)
  let path = context.route.fullPath
  if (context.route.matched.length) {
    path = context.route.matched[0].path
  }
  context.store.commit('SET_CURRENT_ROUTER', path)
}
