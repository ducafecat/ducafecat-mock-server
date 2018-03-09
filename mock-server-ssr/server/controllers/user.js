/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 13:40:55 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-09 15:20:04
 */
import _ from 'lodash'
import jwt from 'jsonwebtoken'

import {UserProxy} from './../proxys'
import MixUtil from './../../utils/mix'
import ft from './../models/fields_table'
import config from './../../utils/config'

/**
 * 用户控制器
 *
 * @export
 * @class UserController
 */
export default class UserController {
  /**
   * 用户注册
   *
   * @static
   * @param {any} ctx
   * @memberof UserController
   */
  static async register(ctx) {
    const name = ctx
      .checkBody('name')
      .notEmpty()
      .len(4, 20).value
    const password = ctx
      .checkBody('password')
      .notEmpty()
      .len(6, 20).value

      if (ctx._validationErrors.length) {
      ctx.body = ctx.util.refail(null, 10001, ctx._validationErrors)
      return
    }

    const newPassword = MixUtil.bhash(password)
    let user = await UserProxy.newAndSave(name, newPassword)
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 用户登录
   *
   * @static
   * @param {any} ctx
   * @memberof UserController
   */
  static async login(ctx) {
    const name = ctx.checkBody('name').notEmpty().value
    const password = ctx.checkBody('password').notEmpty().value

    if (ctx._validationErrors.length) {
      ctx.body = ctx.util.refail(null, 10001, ctx._validationErrors)
      return
    }

    const user = await UserProxy.getByName(name)

    if (!user) {
      ctx.body = ctx.util.refail('用户不存在')
      return
    }

    const verifyPassword = MixUtil.bcompare(password, user.password)

    if (!verifyPassword) {
      ctx.body = ctx.util.refail('用户名或密码错误')
      return
    }

    user.token = jwt.sign({uid: user._id}, config.server.jwtSecret, {
      expiresIn: config.server.jwtExpire
    })

    ctx.body = ctx.util.resuccess(_.pick(user, ft.user))
  }

  /**
   * 离线 用户信息
   *
   * @static
   * @param {any} ctx
   * @memberof UserController
   */
  static async profile(ctx) {
    // const token = ctx
    //   .checkHeaders('Authorization')
    //   .notEmpty()
    //   .value.replace('Bearer ', '')

    // if (ctx._validationErrors.length) {
    //   ctx.body = ctx.util.refail(null, 10001, ctx._validationErrors)
    //   return
    // }

    const user = await UserProxy.getById(ctx.state.user.uid)
    if (!user) {
      ctx.body = ctx.util.refail('用户不存在')
      return
    }

    ctx.body = ctx.util.resuccess(_.pick(user, ft.user))
  }
}
