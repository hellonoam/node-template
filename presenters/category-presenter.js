import createPresenter from './base'

const CategoryPresenter = createPresenter({
  customAttributes: {
  },

  strategies: {
    default: {
      whitelist: ['name', 'slug', 'picture'],
      customAttributes: []
    }
  }
})

export default CategoryPresenter
