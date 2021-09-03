const navbar: React.FC = () => (
  <div className="navigation-bar__top">
    <div className="sort-by">
      <span>Sort by:</span>
      <div className="sort-by__price" id="sort-by-price" data-filter="price">
        Price
        <div id="by-price-chevron" className="fas fa-chevron-down"></div>
      </div>

      <div
        className="sort-by__rating"
        id="sort-by-rating"
        data-filter="rating"
      >
        Rating

        <div id="by-rating-chevron" className="fas fa-chevron-down"></div>
      </div>
      <div className="sort-by--reset-all">Reset all filters</div>
    </div>

    <div className="modal-window__button">Get your gift!</div>
  </div>
)

export default navbar