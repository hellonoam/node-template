import express from 'express'
const router = express.Router()

import { Category } from '../models'
import presenters from '../presenters'
import { CategoryPresenter } from '../presenters'

console.log(Object.keys(presenters));

router.get('/', async (req, res, next) => {
  const categories = await Category.findAll()

  res.json(CategoryPresenter.present(categories, 'default'))
})

export default router
