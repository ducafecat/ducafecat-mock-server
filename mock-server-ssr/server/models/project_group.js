/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:10 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:10 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
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

schema.index({ project: 1, create_at: -1 })

export default mongoose.model('ProjectGroup', schema)
