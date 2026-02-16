export class Person {
    firstname:string ="";
    lastname:string = "";
    private age = 0;
    static COUNTRY = "Thailand";
    setAge(ages:number){
        this.age = ages;
    }
    getAge(){
        return this.age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
}