import express from 'express'
const router = express.Router()

import { Coupon } from '../models'
import presenters from '../presenters'
import { CouponPresenter } from '../presenters'


console.log(Object.keys(presenters));

router.get('/', async (req, res, next) => {
  const coupons = await Coupon.findAll()

  res.json(CouponPresenter.present(coupons, 'default'))
})


export default router;
