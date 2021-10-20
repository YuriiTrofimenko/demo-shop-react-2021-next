import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react'
import { useStore } from '../../../../../../stores/Store'
const Navbar: React.FC = observer(() => {
  const { productStore } = useStore()
  const handleOrderButtonClick = (orderBy: string) => {
    productStore.filterOrderBy = orderBy
    productStore.toggleFilterSortingDirection()
    // this.setState({ activeOrderButton: buttonName })
  }
  const orderPriceChevronClass =
    `chevron-${(productStore.filterOrderBy === 'price' && productStore.filterSortingDirection === 'DESC') ? 'up' : 'down'}` as IconName
  const orderRatingChevronClass =
    `chevron-${(productStore.filterOrderBy === 'rating' && productStore.filterSortingDirection === 'DESC') ? 'up' : 'down'}` as IconName
  return (
    <div className="navigation-bar__top">
      <div className="sort-by">
        <span>Sort by:</span>
        <div
          className={['sort-by__price', (productStore.filterOrderBy === 'price' ? 'sort-by--color' : '')].join(' ')}
          onClick={(e) => {
            handleOrderButtonClick('price')
        }}>
          Price
          {/* <div id="by-price-chevron" className="fas fa-chevron-down"></div> */}
          <FontAwesomeIcon id='by-price-chevron' icon={['fas', orderPriceChevronClass]} />
        </div>

        <div
          className={['sort-by__rating', (productStore.filterOrderBy === 'rating' ? 'sort-by--color' : '')].join(' ')}
          onClick={(e) => {
            handleOrderButtonClick('rating')
        }}>
          Rating
          {/* <div id="by-rating-chevron" className="fas fa-chevron-down"></div> */}
          <FontAwesomeIcon id='by-rating-chevron' icon={['fas', orderRatingChevronClass]} />
        </div>
        <div className="sort-by--reset-all">Reset all filters</div>
      </div>

      <div className="modal-window__button">Get your gift!</div>
    </div>
  )
})

export default Navbar