import express from 'express'

import models from './models'
import { Product } from './models'

import bodyParser from 'body-parser'

const PORT = process.env.PORT || 3041;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.json({ text: 'Hello World!' })
})

const server = app.listen(PORT, function () {
  const { address, port } = server.address()
  console.log('App listening at http://%s:%s', address, port)
})

export default server
