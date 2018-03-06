import jsBeautify from 'js-beautify/js/lib/beautify'
import mdPrettify from 'prettify-markdown'
import bcrypt from 'bcryptjs'

/**
 * 工具函数
 * 
 * @export
 * @class MixUtil
 */
export default class MixUtil {
  /**
   * 格式化json
   *
   * @static
   * @param {any} str
   * @returns
   * @memberof MixUtil
   */
  static formatJson(str) {
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
  }

  /**
   * 格式化 markdown
   *
   * @static
   * @param {any} str
   * @returns
   * @memberof MixUtil
   */
  static formatMarkdown(str) {
    str = str.trim()
    if (str === '') {
      return str
    }
    return mdPrettify(str)
  }

  /**
   * 删除确认
   *
   * @static
   * @returns
   * @memberof MixUtil
   */
  static delConfirm() {
    const msg = '您真的确定要删除吗？\n\n请确认！'
    return confirm(msg)
  }

  /**
   * 加密字符串
   * 
   * @static
   * @param {any} str 
   * @returns 
   * @memberof MixUtil
   */
  static bhash(str) {
    return bcrypt.hashSync(str, 8)
  }

  /**
   * 对比原字符串与经过加密的字符串是否相同
   * 
   * @static
   * @param {any} str 
   * @param {any} hash 
   * @returns 
   * @memberof MixUtil
   */
  static bcompare(str, hash) {
    return bcrypt.compareSync(str, hash)
  }

  /**
   * 安全的 decodeURIComponent
   * 
   * @static
   * @param {any} str 
   * @returns 
   * @memberof MixUtil
   */
  static safeDecodeURIComponent(str) {
    try {
      return decodeURIComponent(str)
    } catch (e) {
      return str
    }
  }

  /**
   * 解析出 params 对象
   *
   * /user/nick (/user/:name) => { name: 'nick' }
   *
   * @param String restURL /user/:name
   * @param String fullURL /user/nick
   */
  static params(restURL, fullURL) {
    const params = {}
    const paramNames = []
    const api = pathToRegexp(restURL, paramNames)
    const captures = fullURL.match(api)

    if (!captures) return {}

    captures.slice(1).forEach((value, i) => {
      /* istanbul ignore else */
      if (paramNames[i]) {
        params[paramNames[i].name] = this.safeDecodeURIComponent(value)
      }
    })

    return params
  }
}
