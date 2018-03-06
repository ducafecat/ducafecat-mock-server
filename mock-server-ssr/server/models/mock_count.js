/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:01 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:01 
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema(
  {
    mock: {
      type: Schema.Types.ObjectId,
      ref: 'Mock'
    },
    count: Number,
    create_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'mock_counts'
  }
)

schema.index({mock: 1, create_at: -1})

module.exports = mongoose.model('MockCount', schema)
