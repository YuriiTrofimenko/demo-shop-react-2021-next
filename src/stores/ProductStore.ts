import { makeAutoObservable } from 'mobx'
import Product from '../models/Product'
import allProducts from '../json/shoes.json'
import history from '../history'
interface IProductFilter {
  orderBy: string,
  sortingDirection: string
}
class ProductStore {
  // constants
  readonly FETCH_STEP = 20
  readonly INITIAL_NEXT_PRODUCT_INDEX = 0
  // private properties
  private nextProductIndex: number = this.INITIAL_NEXT_PRODUCT_INDEX
  // observables
  products: Product[] = []
  sourceProductsTotalCount: number = 0
  allowFetchProducts: boolean = true
  filter: IProductFilter = {
    orderBy: 'id',
    sortingDirection: 'DESC'
  }
  prevFilter: IProductFilter = {
    orderBy: '',
    sortingDirection: ''
  }
  // constructors
  constructor () {
    makeAutoObservable(this)
  }
  // private methods
  private addProducts(products: Product[]) {
    this.products.push(...products)
  }
  private changeGalleryUrlParams () {
    history.push({
      pathname: '/gallery',
      search: `?orderBy=${this.filter.orderBy}
                &sortingDirection=${this.filter.sortingDirection}`
              .replace(/\s/g, '')
    })
  }
  // actions
  async fetchMore() {
    // TODO replace file data source with remote one
    // const response = await fetch(this.DATA_SOURCE_ADDRESS)
    // const products: Product[] = await response.json()
    this.sourceProductsTotalCount = allProducts.length
    const prevCount = this.products.length
    const fetchedProducts =
      allProducts
        .sort((p1, p2) => {
          const property = this.filter.orderBy as keyof Product
          const v1 : number =
            (typeof p1[property] !== 'number')
              ? Number((p1[property] as string).replace(',','.'))
              : p1[property] as number
          const v2 =
            (typeof p2[property] !== 'number')
              ? Number((p2[property] as string).replace(',','.'))
              : p2[property] as number
          if (this.filter.sortingDirection === 'ASC') {
            return v1 - v2
          } else if (this.filter.sortingDirection === 'DESC') {
            return v2 - v1
          } else {
            return p2.id - p1.id
          }
        }).slice(this.nextProductIndex, this.nextProductIndex + this.FETCH_STEP)
    this.addProducts(fetchedProducts)
    this.allowFetchProducts = true
    const currentCount = this.products.length
    this.nextProductIndex = currentCount
    return currentCount - prevCount
  }
  async clear() {
    this.products.length = 0
    this.nextProductIndex = this.INITIAL_NEXT_PRODUCT_INDEX
  }
  // setters
  set filterOrderBy (orderBy: string) {
    if (this.filter.orderBy === orderBy) {
      if (this.filter.sortingDirection === 'DESC') {
        this.filter.sortingDirection = 'ASC'
      } else {
        this.filter.sortingDirection = 'DESC'
      }
    } else {
      this.filter.sortingDirection = 'ASC'
      this.filter.orderBy = orderBy
    }
    this.changeGalleryUrlParams()
  }
  // getters
  get itemsLeftCount() {
    return this.sourceProductsTotalCount - this.products.length
  }
  get filterOrderBy () {
    return this.filter.orderBy
  }
  get filterSortingDirection () {
    return this.filter.sortingDirection
  }
}
export { ProductStore } 
export default new ProductStore()