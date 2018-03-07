/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-07 14:11:44 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-07 14:12:29
 */

export default {
  group: ['_id', 'name'],
  projectExtend: ['_id', 'is_workbench'],
  user: ['_id', 'name', 'nick_name', 'head_img', 'token'],
  mock: [
    '_id',
    'url',
    'method',
    'description',
    'mode',
    'parameters',
    'response_model'
  ],
  project: [
    '_id',
    'name',
    'url',
    'description',
    'swagger_url',
    'members',
    'extend',
    'group'
  ]
}
