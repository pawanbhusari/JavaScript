//the properties of an object can be displayed as a string
const person = {
    name : "john",
    age : 30,
    city : "new york",
};
let x = person.name + " " + person.age + " "  +person.city;
console.log(x)

//displaying object in a loop
const person1 = {
    name : "john",
    age : 30,
    city : "new york",
};
let text ="";
for (let x in person1){
    text +=person1[x]+ " ";
};
console.log(text);

//usig JSON.stringfy()
const name = {
    naav : "johm",
    age :40,
    city : "new york",
};
let myString = JSON.stringify(name)
console.log(myString);