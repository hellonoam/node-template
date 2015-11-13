import express from 'express'
const router = express.Router()

import { Category } from '../models'


router.get('/', async (req, res, next) => {
  const categories = await Category.findAll()

  res.json(categories)
})

export default router
