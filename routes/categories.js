import express from 'express'
const router = express.Router()

import { Category } from '../models'
import presenters from '../presenters'
import { CategoryPresenter, CouponPresenter } from '../presenters'
import wrap from 'express-async-wrap'

router.get('/', wrap(async (req, res, next) => {
  const categories = await Category.findAll()

  res.json(CategoryPresenter.present(categories, 'default'))
}))

router.get('/:categoryId', wrap(async (req, res, next) => {
  const category = await Category.findOne({ 'id': req.param.categoryId })

  res.json(CategoryPresenter.present(category, 'default'))
}))

router.get('/:categoryId/coupons', wrap(async (req, res, next) => {
  const category = await Category.findOne({ 'id': req.param.categoryId })
  const coupons = await category.getCoupons()

  res.json(CouponPresenter.present(coupons, 'default'))
}))

export default router
