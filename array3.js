//FROM
let text = "avsjdgdkch";
const myArr = Array.from(text);
console.log(myArr)

//INCLUDE
const fruits = ["apple","peru","mango","kiwi"];
const p = fruits.includes("peru");
console.log(p)

//INDEXOF
const phal = ["apple","peru","mango","kiwi"];
let index = phal.indexOf("mango",2);
console.log(index)

//IS ARRAY
let text1 ="w3school";
let result = Array.isArray(text);
console.log(result)

//keys
const fruits1 = ["apple","kiwi","peru","cherry"];
const keys =fruits1.keys();
let text2 = " ";
for(let c of keys) {
    text2 += c +"";
}
console.log(text2)

//lastindexOf
const fruits2 =["mango","kiwi","peru","apple","peru"];
const e = fruits2.lastIndexOf("apple");
console.log(e)


//LENGTH
const fruits5 = ["apple","peru","kiwi0","cherry"];
fruits5.length = 2;
console.log(fruits5)

//MAPS
const numbers =[4,9,16,25];
const t = numbers.map(Math.sqrt);
console.log(t)
//example 2
const integers = [65,48,75,62];
const newArr = integers.map(myFunction);
// console.log(newArr);
function myFunction(num){
    return num*10
};
console.log(newArr)
