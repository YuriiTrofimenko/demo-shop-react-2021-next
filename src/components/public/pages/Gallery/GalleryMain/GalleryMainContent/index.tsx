import { observer } from 'mobx-react'
import { useStore } from '../../../../../../stores/Store'
const content: React.FC = observer(
  () => {
    const {productStore} = useStore()
    return (
      <>
        <div id="products-list">
          {
            productStore.products.map(
              product => <div key={product.name}>{product.name}</div>
            )
          }
        </div>
        <div className="load-more" id="load-more">
          <span>Load another 20 items</span>
          <br />
          <div className="load-more__items-left">so</div>
        </div>
      </>
    )
  }
)

export default content