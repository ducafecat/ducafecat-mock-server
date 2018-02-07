const routers = {
    state: {
        routeMaps: [{
            name: '首页',
            path: '/',
            childs: [
                {
                    name: '项目',
                    path: '/mock/projects',
                    childs: [
                        {
                            name: 'API接口',
                            path: '/mock/projects/:id/apis'
                        },
                        {
                            name: 'API手册',
                            path: '/mock/projects/:id/books'
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
