//classes
class car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear()-this.year;
    }
}
let myCar = new car("ford",2015);
console.log("my car is " + myCar.age() + "years old");

//class static
class Car1 {
    constructor(name){
    this.name = name;
    }
static ford(){
    return "ford";
    }
}

let myCar1 = new Car1("ford");
console.log(Car1.ford()); 

//use myCar object inside the static method you can send it as a parameter
class Car2 {
    constructor (name){
        this.name=name;
    }
    static hello(x){
        return "hello " + x.name;
    }
}
let myCar2 = new car ("ford");
console.log(Car2.hello(myCar2));

//class inheritance
 class fruits {
    constructor (brand) {
        this.fruitname = brand;
    }
    present(){
        return ' i have a ' + this.fruitname;
    }
 }
 class Model extends fruits {
    constructor(brand,mod){
        super(brand);
        this.Model = mod;
    }
    show(){
        return this.present() + ',it is a '+ this.Model;
    }
 }
 let myFruits = new Model("ford","musstang");
 console.log(myFruits.show());

 //CLASS CONSTRUCTOR
class car3 {
    constructor(dish){
        this.carName = dish;
    }
};
 myCar3 =new car3("ford");
 console.log("my car is a " + myCar3.carName);





