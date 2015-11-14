import createPresenter from './base'

const CouponPresenter = createPresenter({
  customAttributes: {
  },

  strategies: {
    default: {
      whitelist: ['id', 'productId', 'title', 'slug', 'picture', 'description', 'instructions',
      			  'couponCode', 'couponWebUrl', 'couponIosUrl', 'couponAndroidUrl'],
      customAttributes: []
    }
  }
})

export default CouponPresenter
