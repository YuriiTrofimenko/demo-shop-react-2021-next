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
    console.log('allProducts store', allProducts)
    this.sourceProductsTotalCount = allProducts.length
    console.log('sourceProductsTotalCount store', this.sourceProductsTotalCount)
    const prevCount = this.products.length
    console.log('prevCount store', prevCount)
    console.log('this.nextProductIndex store', this.nextProductIndex)
    console.log('this.nextProductIndex + this.FETCH_STEP store', this.nextProductIndex + this.FETCH_STEP)
    const fetchedProducts =
      allProducts.slice(this.nextProductIndex, this.nextProductIndex + this.FETCH_STEP)
    console.log('fetchedProducts', fetchedProducts)
    this.addProducts(fetchedProducts)
    console.log('prods store', this.products)
    const currentCount = this.products.length
    this.nextProductIndex = currentCount
    console.log('prods store', this.products)
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