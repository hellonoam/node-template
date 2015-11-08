import express from 'express'

import models from './models'
import { Product } from './models'
import { ProductPresenter } from './presenters'

import bodyParser from 'body-parser'

import SearchService from './services/SearchService'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products/search', async (req, res) => {
  // let searchResults = SearchService.search()

  let products = await Product.findAll()
  res.json(ProductPresenter.present(products.map(p=>p.get()), 'def'))
})

const server = app.listen(3031, function () {
  const { address, port } = server.address()
  console.log('App listening at http://%s:%s', address, port)
})

export default server
