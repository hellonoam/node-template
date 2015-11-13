import _ from 'lodash'
import models from '../../models'

const categories = [
  { name: 'Transportation' },
  { name: 'Food' },
  { name: 'Travel' },
].map(i => ({ ...i, slug: _.kebabCase(i.name) }))

const products = [
  { name: 'Lyft', categories: [ { name: 'Transportation' } ] },
  { name: 'SpoonRocket', categories: [ { name: 'Food' } ] },
].map(i => ({ ...i, slug: _.kebabCase(i.name) }))

const coupons = [
  { title: 'Free 10 rides', product: { name: 'Lyft' }, categories: [ { name: 'Transportation' } ] },
  { title: '$5 off your first order', product: { name: 'SpoonRocket' }, categories: [ { name: 'Food' } ] },
].map(i => ({ ...i, slug: _.kebabCase(i.title) }))

const data = _.reduce({
  'Category': categories,
  'Product': products,
  'Coupon': coupons
}, (all, items, modelName) => {
  all.push(...items.map(i => ({ model: modelName, data: i })))
  return all
}, [])

export default data
