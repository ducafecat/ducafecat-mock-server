let projectList = () => import('./../pages/project-list')

export default [
  {
    path: '',
    component: projectList
  },
  {
    path: 'mock/projects',
    component: projectList
  }
]
