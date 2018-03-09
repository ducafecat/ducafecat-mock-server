/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-07 17:50:43 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-09 15:43:48
 */

import _ from 'lodash'

import {ProjectProxy} from './../proxys'
import MixUtil from './../../utils/mix'
import ft from './../models/fields_table'
import config from './../../utils/config'

/**
 * 项目控制
 *
 * @export
 * @class ProjectController
 */
export default class ProjectController {
  /**
   * 创建
   *
   * @static
   * @param {any} ctx
   * @memberof ProjectController
   */
  static async create(ctx) {
    // const ddd = ctx.checkBody('url')
    const uid = ctx.state.user.uid
    const description = ctx.request.body.description
    const name = ctx.checkBody('name').notEmpty().value
    const url = ctx.checkBody('url').matchs(/^\/.*$/i, 'URL 必须以 / 开头').notEmpty().value
    const findQuery = {$or: [{name}, {url}]}
    const saveQuery = {
      name,
      url,
      description: description || name
    }

    if (ctx._validationErrors.length) {
      ctx.body = ctx.util.refail(null, 10001, ctx.errors)
    }

    saveQuery.user = uid
    const project = await ProjectProxy.findOne(findQuery)

    if (project) {
      ctx.body =
        project.name === name
          ? ctx.util.refail(`项目 ${name} 已存在`)
          : ctx.util.refail('请检查 URL 是否已经存在')
      return
    }

    const projects = await ProjectProxy.newAndSave(saveQuery)

    ctx.body = ctx.util.resuccess()
  }

  /**
   * 详情
   *
   * @static
   * @param {any} ctx
   * @memberof ProjectController
   */
  static async detail(ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 更新
   *
   * @static
   * @param {any} ctx
   * @memberof ProjectController
   */
  static async update(ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 列表
   *
   * @static
   * @param {any} ctx
   * @memberof ProjectController
   */
  static async list(ctx) {
    ctx.body = ctx.util.resuccess()
  }

  /**
   * 删除
   *
   * @static
   * @param {any} ctx
   * @memberof ProjectController
   */
  static async delete(ctx) {
    ctx.body = ctx.util.resuccess()
  }
}
