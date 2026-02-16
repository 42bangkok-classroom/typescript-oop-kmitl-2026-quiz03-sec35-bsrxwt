import { Product } from './product'

export class Playstation extends Product {
  generation:number = 0;
  constructor(names:string,generations:number,prices:number){
    super(names,prices)
    this.generation = generations;
  }
  getProfile(){
    return `${this.name} (Gen ${this.generation})`
  }
  getDiscountPrice(){
    return this.price - (this.price * (Playstation.DISCOUNT_PERCENT/100))
  }
}