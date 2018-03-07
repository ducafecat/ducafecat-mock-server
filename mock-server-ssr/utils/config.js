export default {
  appName: 'mockServer',
  appMiniName: 'M',
  whiteList: ['/login'],
  apiBaseURL: '/api',
  server: {
    mongodb: 'mongodb://hans:123@localhost/mock-server',
    jwtSecret: 'shared-secret',
    jwtExpire: '14 days'
  }
}
