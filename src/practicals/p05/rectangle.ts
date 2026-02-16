import {Shape} from  "./shape"
export class Rectangle extends Shape{
    private width:number = 0;
    private height:number = 0;
    constructor(color:string,width:number,height:number){
        super(color);
        this.width = width;
        this.height = height;
    }
    draw():void{
        console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`)
    };
    getArea():number{
        return this.width * this.height;
    };
}