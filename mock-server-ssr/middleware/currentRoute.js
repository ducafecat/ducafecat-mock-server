
export default function (context) {
    // 设置当前 router path
    context.store.commit('SET_CURRENT_ROUTER', context.route.fullPath)
}
