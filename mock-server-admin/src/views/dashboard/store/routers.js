const routers = {
    state: {
        tree: {
            name: '首页',
            path: '/',
            childs: []
        },
        currentRoute: null
    },
    mutations: {
        SET_CURRENT_ROUTER: (state, currentRoute) => {
        state.currentRoute = currentRoute
        },
        CLEAR_CURRENT_ROUTER: (state) => {
        state.currentRoute = null
        }
    }
}

export default routers
