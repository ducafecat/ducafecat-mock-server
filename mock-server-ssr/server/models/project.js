/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:15 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:15 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  group: {
    type: ObjectId,
    ref: 'Group'
  },
  name: String,
  url: String,
  description: {
    type: String,
    default: ''
  },
  swagger_url: {
    type: String,
    default: ''
  },
  members: [
    {
      type: ObjectId,
      ref: 'User',
      default: []
    }
  ],
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({user: 1, members: 1, create_at: -1})

export default mongoose.model('Project', schema)
