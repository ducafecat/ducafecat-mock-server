/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:33 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:33 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema
const schema = new Schema({
  nick_name: String,
  head_img: String,
  name: String,
  password: String,
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({ name: 1 }, { unique: true })

export default mongoose.model('User', schema)
