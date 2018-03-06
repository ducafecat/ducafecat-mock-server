/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 13:40:55 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-06 14:25:45
 */

import {UserProxy} from './../proxys'
import MixUtil from './../../utils/mix'

/**
 * 用户控制器
 *
 * @export
 * @class UserController
 */
export default class UserController {
  static async register(ctx) {
    let name = 'hans'
    let password = '12312321321'

    let user = await UserProxy.newAndSave(name, password)
    ctx.body = ctx.util.resuccess()
  }
}
