export default {
  // http 方法
  httpMethods: () => {
    return [
      {value: 'get', text: 'get'},
      {value: 'post', text: 'post'},
      {value: 'delete', text: 'delete'},
      {value: 'put', text: 'put'},
      {value: 'patch', text: 'patch'}
    ]
  },
  // http 类型
  httpBodyTypes: () => {
    return [
      { text: 'form-data', value: '1' },
      { text: 'x-www-form-urlencoded', value: '2' },
      { text: 'raw', value: '3' },
      { text: 'binary', value: '4' }
    ]
  },
  // http raw 类型
  httpBodyRawTypes: () => {
    return [
      { text: 'JSON', value: '1' },
      { text: 'Text', value: '2' },
      { text: 'XML', value: '3' },
      { text: 'HTML', value: '4' }
    ]
  }

}
