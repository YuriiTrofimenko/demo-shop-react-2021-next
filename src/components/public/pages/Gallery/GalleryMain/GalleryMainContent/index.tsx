import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStore } from '../../../../../../stores/Store'
import ProductGridItem from './ProductGridItem'
const GalleryMainContent: React.FC =
  observer(() => {
    const {productStore} = useStore()
    useEffect(() => {
      console.log(productStore.allowFetchProducts)
      if (productStore.allowFetchProducts) {
        productStore.allowFetchProducts = false
        const windowUrl = window.location.search
        const params = new URLSearchParams(windowUrl)
        console.log(params.get('orderBy'), params.get('sortingDirection'))
        const orderBy = params.get('orderBy') || 'id'
        const sortingDirection = params.get('sortingDirection') || 'DESC'
        if (orderBy !== productStore.prevFilter.orderBy
            || sortingDirection !== productStore.prevFilter.sortingDirection
        ) {
          productStore.prevFilter.orderBy = orderBy
          productStore.prevFilter.sortingDirection = sortingDirection
          if (orderBy) {
            productStore.filter.orderBy = orderBy
          }
          if (sortingDirection) {
            productStore.filter.sortingDirection = sortingDirection
          }
          productStore.clear()
          productStore.fetchMore()
        }
      }
      return () => {productStore.clear()}
    }, [])
    const handleMoreButton = () => {
      productStore.fetchMore()
    }
    return (
      <>
        <div id="products-list">
          {
            productStore.products.map(
              product => <ProductGridItem key={product.id} product={product}/>
            )
          }
        </div>
        {
            (productStore.itemsLeftCount > 0)
            ? <div className="load-more" id="load-more" onClick={handleMoreButton}>
                <span>Load another 20 items</span>
                <div className="load-more__items-left">({productStore.itemsLeftCount} items left)</div>
              </div>
            : ''
        }
      </>
    )
  })

export default GalleryMainContent