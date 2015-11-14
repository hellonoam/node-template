import express from 'express'
const router = express.Router()

import { Category } from '../models'
import presenters from '../presenters'
import { CategoryPresenter, CouponPresenter } from '../presenters'

console.log(Object.keys(presenters));

router.get('/', async (req, res, next) => {
  const categories = await Category.findAll()

  res.json(CategoryPresenter.present(categories, 'default'))
})

router.get('/:categoryId', async (req, res, next) => {
  const category = await Category.findOne({ 'id': req.param.categoryId })

  res.json(CategoryPresenter.present(category, 'default'))
})

router.get('/:categoryId/coupons', async (req, res, next) => {
  const category = await Category.findOne({ 'id': req.param.categoryId })

  res.json(CouponPresenter.present(await category.getCoupons(), 'default'))
})


export default router
