import createPresenter from './base'

const CategoryPresenter = createPresenter({
  customAttributes: {
  },

  strategies: {
    default: {
      whitelist: ['id', 'name'],
      customAttributes: []
    }
  }
})

export default CategoryPresenter
