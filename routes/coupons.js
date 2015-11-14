import express from 'express'
const router = express.Router()

import { Coupon } from '../models'
import presenters from '../presenters'
import { CouponPresenter } from '../presenters'
import wrap from 'express-async-wrap'

router.get('/', wrap(async (req, res, next) => {
  const coupons = await Coupon.findAll()

  res.json(CouponPresenter.present(coupons, 'default'))
}))

router.get('/:couponId', wrap(async (req, res, next) => {
  const coupon = await Coupon.findOne({ 'id': req.param.couponId })

  res.json(CouponPresenter.present(coupon, 'default'))
}))

export default router
