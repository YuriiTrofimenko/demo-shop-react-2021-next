import Product from "../../../../../../../models/Product"

interface IProps {
  product: Product
}

const productGridItem: React.FC<IProps> = props =>
  {
    const {product} = props
    return (
      <div className="product" data-id={product.id}>
        <div className="product__content">
          <div className="product__photo">
            <img className="product__photo-img"
              src={product.imgSrc}
              alt=""/>
            <div className={['product__photo-sale', ((product.soldOut) ? 'product__photo-no-sale' : '')].join(' ')}>
              <span>-40%</span>
            </div>
            <div className="product__photo-like"></div>
          </div>
        </div>
        <div className="product__details">
          <span className="product__content-title">{product.name}</span>
          <div className="product__content-description">
            <div>
              <b className="brand">{product.brand}</b>
              <br />
              Brand
            </div>
            <div>
              <b className="product-color">{product.color}</b>
              <br/>
              Color
            </div>
            <div>
              <b className="rating">{product.rating}</b>
              <br/>
              Rating
            </div>
          </div>
          <div className="product__content-price">{product.price}</div>
        </div>
        <div className={['product__button', ((product.soldOut) ? 'product__button--color' : '')].join(' ')}>
          <span>{(product.soldOut) ? 'Sold out' : 'Buy now'}</span>
        </div>
      </div>
    )
  }

export default productGridItem