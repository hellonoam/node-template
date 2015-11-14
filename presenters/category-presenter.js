import createPresenter from './base'

const CategoryPresenter = createPresenter({
  customAttributes: {
  },

  strategies: {
    default: {
      whitelist: ['id', 'name', 'slug', 'picture'],
      customAttributes: []
    }
  }
})

export default CategoryPresenter
