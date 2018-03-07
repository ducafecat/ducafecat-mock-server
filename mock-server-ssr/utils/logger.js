/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-07 16:08:06 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-07 17:27:08
 */

import fs from 'fs'
import uuid from 'uuid'
import path from 'path'
import mkdirp from 'mkdirp'
import moment from 'moment'
import koaPinoLogger from 'koa-pino-logger'
import {multistream} from 'pino-multi-stream'

const streamOpt = {flags: 'a', encoding: 'utf8'}
const date = moment().format('YYYY-MM-DD')
const logDir = path.join(__dirname, '../logs')
let streams = [
  {level: 'info', stream: process.stdout},
  {level: 'error', stream: process.stderr}
]

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') {
  if (!fs.existsSync(logDir)) mkdirp.sync(logDir)

  streams = [
    {
      level: 'info',
      stream: fs.createWriteStream(`logs/${date}-info.log`, streamOpt)
    },
    {
      level: 'error',
      stream: fs.createWriteStream(`logs/${date}-error.log`, streamOpt)
    }
  ]
}

export default koaPinoLogger(
  {
    name: 'Mock Server',
    level:
      process.env.NODE_ENV === 'test'
        ? 'silent'
        : /* istanbul ignore next */ 'info',
    genReqId: req => req.headers['x-request-id'] || uuid.v4()
  },
  multistream(streams)
)
