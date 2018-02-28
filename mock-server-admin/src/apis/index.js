import axios from 'axios'
import Config from '@/utils/config'
import { getToken } from '@/utils/auth'
import store from '@/store'

const _errMesage = message => {
  store.commit('SET_ALERT', {
    variant: 'danger',
    description: message
  })
}

const instance = axios.create({
  baseURL: Config.apiBaseURL
})

instance.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => {
    const body = res.data

    if (body.success === false) {
      switch (body.errCode) {
        case 1000: // 没有数据
          _errMesage(body.errMessage)
          break
        case 401:
          store.dispatch('LogOut').then(() => {
            router.push({
              path: '/login'
            })
          })
          break
        default:
          break
      }
      return Promise.reject(res)
    }
    return res
  },
  error => {
    const res = error.response
    if (res) {
      if (res.status === 401) {
        store.dispatch('LogOut').then(() => {
          router.push({
            path: '/login'
          })
        })
      } else if (res.data && res.data.error) {
        _errMesage(res.data.error)
      }
    }
    Promise.reject(error)
  }
)

const createAPI = (url, method, config) => {
  config = config || {}
  return instance({
    url,
    method,
    ...config
  })
}
const createFormAPI = (url, method, config) => {
  config = config || {}
  config.headers['Cache-Control'] = 'no-cache'
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.responseType = 'json'
  config.transformRequest = [
    function(data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }
  ]
  return instance({
    url,
    method,
    ...config
  })
}

// 创建用于导出数据的表单
const createExportForm = (url, data) => {
  const form = document.createElement('form')

  form.method = 'POST'
  form.action = url

  if (Array.isArray(data)) {
    data.forEach(d => {
      const input = document.createElement('input')
      input.name = 'ids[]'
      input.value = d
      form.appendChild(input)
    })
  } else {
    const input = document.createElement('input')
    input.name = 'project_id'
    input.value = data
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

// 业务

const u = {
  login: config => createFormAPI('/u/login', 'post', config),
  register: config => createAPI('/u/register', 'post', config),
  update: config => createAPI('/u/update', 'post', config),
  profile: config => createAPI('/u/profile', 'post', config)
}

const project = {
  list: config => createAPI('/project', 'get', config),
  create: config => createAPI('/project', 'post', config),
  update: config => createAPI(`/project/${config.data.id}`, 'put', config),
  delete: config => createAPI(`/project/${config.data.id}`, 'delete', config),
  info: config => createAPI(`/project/${config.data.id}`, 'get', config)
}

const group = {
  list: config => createAPI('/group', 'get', config),
  create: config => createAPI('/group', 'post', config),
  update: config => createAPI(`/group/${config.data.id}`, 'put', config),
  delete: config => createAPI(`/group/${config.data.id}`, 'delete', config),
  info: config => createAPI(`/group/${config.data.id}`, 'get', config)
}

const mock = {
  list: config => createAPI('/mock', 'get', config),
  create: config => createAPI('/mock', 'post', config),
  update: config => createAPI(`/mock/${config.data.id}`, 'put', config),
  delete: config => createAPI(`/mock/${config.data.id}`, 'delete', config),
  info: config => createAPI(`/mock/${config.data.id}`, 'get', config)
}

const dashboard = {
  list: config => createAPI('/dashboard', 'get', config)
}

const util = {}

export { u, project, group, mock, dashboard, util }
