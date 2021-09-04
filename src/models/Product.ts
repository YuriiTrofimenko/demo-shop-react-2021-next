export default class Product {
  constructor(
    public id: number,
    public category: string,
    public imgSrc: string,
    public name: string,
    public color: string,
    public brand: string,
    public rating: string | number,
    public price:  string | number,
    public soldOut: boolean,
    public isLike: boolean
  ) {
    if (typeof price === 'string') {
      this.price = Number(price)
    }
    if (typeof rating === 'string') {
      this.rating = Number(rating)
    }
  }
}