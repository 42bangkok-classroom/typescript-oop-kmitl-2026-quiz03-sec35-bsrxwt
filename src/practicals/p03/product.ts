export class Product {
    readonly name:string = "";
    protected price:number = 0;
    static readonly DISCOUNT_PERCENT:number =10;
    constructor(names:string,prices:number=0){
        this.name = names;
        this.price = prices;
    }
    getPrice(){
      return this.price;  
    }
    setPrice(price: number){
        this.price = price;
   }
}

