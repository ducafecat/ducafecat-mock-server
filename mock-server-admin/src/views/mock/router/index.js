let projectList = () => import('./../pages/project-list')
let apiList = () => import('./../pages/api-list')

export default [
  {
    name: '项目',
    path: 'mock/projects',
    component: projectList
  },
  {
    name: '接口',
    path: 'mock/projects/:id/apis',
    component: apiList
  }
]
