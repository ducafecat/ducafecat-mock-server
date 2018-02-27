const routers = {
    state: {
        routeMaps: [{
            name: '首页',
            path: '/dashboard',
            childs: [
                {
                    name: '项目',
                    path: '/projects',
                    childs: [
                        {
                            name: 'API接口',
                            path: '/projects/:id'
                        },
                        {
                            name: 'API手册',
                            path: '/books/:id'
                        }
                ]}
            ]
        }],
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
