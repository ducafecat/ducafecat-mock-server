/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:22 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:22 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  create_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'user_group'
})

schema.index({ group: 1, user: 1 }, { unique: true })

export default mongoose.model('UserGroup', schema)
