/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:06 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:06 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
  project_group: {
    type: Schema.Types.ObjectId,
    ref: 'ProjectGroup'
  },
  request: {
    base: {
      group: String,
      method: String,
      url: String,
      description: String
    },
    parameters: [
      {
        key: String,
        value: String,
        description: String,
        type: {type: String, default: 'string'},
        must: {type: String, default: 'yes'},
        isEdit: {type: Boolean, default: true},
        isChecked: {type: Boolean, default: false}
      }
    ],
    headers: [
      {
        key: String,
        value: String,
        description: String,
        type: {type: String, default: 'string'},
        must: {type: String, default: 'yes'},
        isEdit: {type: Boolean, default: true},
        isChecked: {type: Boolean, default: false}
      }
    ],
    body: {
      type: String,
      kvData: [
        {
          key: String,
          value: String,
          description: String,
          type: {type: String, default: 'string'},
          must: {type: String, default: 'yes'},
          isEdit: {type: Boolean, default: true},
          isChecked: {type: Boolean, default: false}
        }
      ],
      rawType: String,
      rawData: String,
      rawDataMD: String
    }
  },
  response: {
    body: String,
    bodyMD: String,
    mockjs: String,
    headers: [
      {
        key: String,
        value: String,
        description: String,
        type: {type: String, default: 'string'},
        must: {type: String, default: 'yes'},
        isEdit: {type: Boolean, default: true},
        isChecked: {type: Boolean, default: false}
      }
    ]
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({project_group: 1, create_at: -1})

export default mongoose.model('Mock', schema)
