export default class Product {
  constructor(
    public id: number,
    public category: string,
    public imgSrc: string,
    public name: string,
    public color: string,
    public brand: string,
    public rating: number | string,
    public price:  number | string,
    public soldOut: boolean,
    public isLike: boolean
  ) {
    if (typeof price === 'string') {
      price = price.replace(',', '.')
      this.price = Number(price)
    }
    if (typeof rating === 'string') {
      rating = rating.replace(',', '.')
      this.rating = Number(rating)
    }
  }
}