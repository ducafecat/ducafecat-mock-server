/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:21:08 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:21:08 
 */

import {Project} from './../models'
import UserProxy from './user'

export default class ProjectProxy {
  static async newAndSave(docs) {
    const projects = await Project.insertMany(docs)
    return projects
  }

  static findByName(name) {
    return Project.findOne({name})
  }

  static findOne(query) {
    return Project.findOne(query)
  }

  static find(query) {
    return Project.find(query, {})
  }

  static updateById(id, doc) {
    return Project.update({_id: id}, {$set: doc})
  }

  static del(query) {
    return Project.remove(query)
  }
}
