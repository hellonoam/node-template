import ModelPresenter from 'model-presenter'
import _ from 'lodash'

export default function createPresenter(options) {
  const CategoryPresenter = ModelPresenter.extend(options)

  const oldPresent = CategoryPresenter.present

  CategoryPresenter.present = function (model, strategy, options) {
    const isCollection = Array.isArray(model);
    let collection = isCollection ? model : [model];

    collection = collection.map(i => i.get())

    return oldPresent.call(CategoryPresenter, collection, strategy, options)
  }

  return CategoryPresenter
}
