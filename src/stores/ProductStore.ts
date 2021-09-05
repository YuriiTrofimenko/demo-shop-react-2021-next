import { makeAutoObservable } from 'mobx'
import Product from '../models/Product'
import allProducts from '../json/shoes.json'
// import { deepClone } from '../utils/CloneMaker'
class ProductStore {
  // constants
  // readonly DATA_SOURCE_ADDRESS = '../'
  readonly FETCH_STEP = 20
  readonly INITIAL_NEXT_PRODUCT_INDEX = 0
  // private properties
  private nextProductIndex: number = this.INITIAL_NEXT_PRODUCT_INDEX
  // observables
  products: Product[] = []
  sourceProductsTotalCount: number = 0
  // constructors
  constructor () {
    makeAutoObservable(this)
  }
  // private methods
  private addProducts(products: Product[]) {
    this.products.push(...products)
  }
  // actions
  async fetchMore() {
    // TODO replace file data source with remote one
    // const response = await fetch(this.DATA_SOURCE_ADDRESS)
    // const products: Product[] = await response.json()
    this.sourceProductsTotalCount = allProducts.length
    const prevCount = this.products.length
    const fetchedProducts =
      allProducts.slice(this.nextProductIndex, this.nextProductIndex + this.FETCH_STEP)
    this.addProducts(fetchedProducts)
    const currentCount = this.products.length
    this.nextProductIndex = currentCount
    return currentCount - prevCount
  }
  async clear() {
    this.products.length = 0
    this.nextProductIndex = this.INITIAL_NEXT_PRODUCT_INDEX
  }
  // getters
  get itemsLeftCount() {
    return this.sourceProductsTotalCount - this.products.length
  }
}
export { ProductStore } 
export default new ProductStore()