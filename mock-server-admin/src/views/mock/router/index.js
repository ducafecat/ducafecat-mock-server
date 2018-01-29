let projectList = () => import('./../pages/project-list')
let apiList = () => import('./../pages/api-list')

export default [
  {
    path: '',
    component: projectList
  },
  {
    path: 'mock/projects',
    component: projectList
  },
  {
    path: 'mock/projects/:id/apis',
    component: apiList
  }
]
