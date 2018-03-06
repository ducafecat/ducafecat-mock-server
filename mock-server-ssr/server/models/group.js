/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:51 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:51 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    unique: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({ user: 1, create_at: -1 })
schema.index({ name: 1 }, { unique: true })

export default mongoose.model('Group', schema)
