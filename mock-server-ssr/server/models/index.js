/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:57 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-06 14:22:55
 */

import mongoose from 'mongoose'
import config from './../../utils/config'

import User from './user'
import Mock from './mock'
import Group from './group'
import Project from './project'
import ProjectGroup from './project_group'
import MockCount from './mock_count'
import UserGroup from './user_group'
import UserProject from './user_project'

mongoose.Promise = global.Promise
mongoose.connect(
  config.server.mongodb,
  {
    // useMongoClient: true,
    poolSize: 20
  },
  err => {
    /* istanbul ignore if */
    if (err) {
      console.error('connect to %s error: ', config.server.mongodb, err.message)
      process.exit(1)
    }
  }
)

export {
  User,
  Mock,
  Group,
  Project,
  ProjectGroup,
  MockCount,
  UserGroup,
  UserProject
}
