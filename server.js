import _ from 'lodash'
import express from 'express'
import favicon from 'serve-favicon'

import models from './models'
import { Product } from './models'

import bodyParser from 'body-parser'
import logger from 'morgan'
import wrap from 'express-async-wrap'

import * as routes from './routes'

const PORT = process.env.PORT || 3041

const app = express()

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

_(routes).chain().keys().pull('default').forEach(k => app.use(`/${k}`, routes[k])).value()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.json({ text: 'Hello World!' })
})

// 404
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

const server = app.listen(PORT, () => {
  const { address, port } = server.address()
  console.log('App listening at http://%s:%s', address, port)
})

export default server
