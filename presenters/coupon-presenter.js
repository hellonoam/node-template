import createPresenter from './base'

const CouponPresenter = createPresenter({
  customAttributes: {
  },

  strategies: {
    default: {
      whitelist: ['productId', 'title', 'slug', 'picture', 'description', 'instructions',
      			  'couponCode', 'couponWebUrl', 'couponIosUrl', 'couponAndroidUrl'],
      customAttributes: []
    }
  }
})

export default CouponPresenter
