import express from 'express'

import models from './models'
import { Product } from './models'

import bodyParser from 'body-parser'
import logger from 'morgan'

import * as routes from './routes'

const PORT = process.env.PORT || 3041

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

Object.keys(routes).forEach(k => { if (k !== 'default') app.use(`/${k}`, routes[k]) })

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
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

const server = app.listen(PORT, () => {
  const { address, port } = server.address()
  console.log('App listening at http://%s:%s', address, port)
})

export default server
