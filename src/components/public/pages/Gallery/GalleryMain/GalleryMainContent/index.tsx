import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStore } from '../../../../../../stores/Store'
import ProductGridItem from './ProductGridItem'
const GalleryMainContent: React.FC =
  observer(() => {
    const {productStore} = useStore()
    useEffect(() => {
      productStore.fetchMore()
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