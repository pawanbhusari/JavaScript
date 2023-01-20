const person = {
    firstname : "rahul",
    lastname : "deo",
    age :50,
    eyecolor :"blue",
};
let x = person.firstname +  " is " + person.age +  " years old";
console.log(x)

const person1 = {
    fname : "john",
    lname : "deo",
    age : 25,
};
let text = "";
 for (let z in person1){
    text +=person1[z] + "";
 };
 console.log(text)

 const person2 = {
    fname :"pawan",
    lname :"bhusari",
    age :50,
 };
 person2.nationality ="INDIAN";
 let p = person2.fname + person2.lname +" is "+ person2.nationality +" .";
 console.log(p)

 const person4 = {
    fname : "pawan",
    lname : "bhusari",
    age : 25,
 };
 delete person4.age;
 let w = person4.fname + " is " + person4.age + " yrs old. ";
 console.log(w); 

 const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
  let t = myObj.cars.car3;
  console.log(t)