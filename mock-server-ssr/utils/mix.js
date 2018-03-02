import jsBeautify from 'js-beautify/js/lib/beautify'
import mdPrettify from 'prettify-markdown'

export default {

  // 格式化json
  formatJson(str) {
    str = str.trim()
    if (str === '') {
      return str
    }
    try {
      return jsBeautify.js_beautify(str, {indent_size: 2})
      // let obj = JSON.parse(str)
      // return JSON.stringify(obj, null, 4)
    } catch (err) {
      return str
    }
  },
  // 格式化 markdown
  formatMarkdown(str) {
    str = str.trim()
    if (str === '') {
      return str
    }
    return mdPrettify(str)
  },
  // 删除确认
  delConfirm() {
    const msg = '您真的确定要删除吗？\n\n请确认！'
    return confirm(msg)
  }
}
