export default {
  'appName': 'mockServer',
  'appMiniName': 'M',
  'whiteList': ['/login'],
  'apiBaseURL': '/api',
  'proxy': {
    target: 'https://www.easy-mock.com/mock/5a7bac516347684a0857e274/mserver',
    changeOrigin: true,
    rewrite: path => path.replace('/api', ''),
    logs: true
  }
}
