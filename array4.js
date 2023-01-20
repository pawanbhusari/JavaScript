//POP
const fruits = ["apple","cherry","peru","kiwi"];
fruits.pop();
console.log(fruits)

//example2
const fruits1 = ["kiwi","apple","chery"];
let removed = fruits1.pop();
console.log(removed)

//PROTOTYPE
Array.prototype.myUcase = function(){
    for (let i = 0; i < this.length; i++) {
     this[i] = this[i].toUpperCase();
        
    }
}
const phal = ["apple","banana","kiwi"];
phal.myUcase();
console.log(phal)

//PUSH
const fruits3 = ["apple","peru","kiwi"];
fruits3.push("cherry");
console.log(fruits3)

//REDUCE
const numbers = [45,23,1];
let m = numbers.reduce(myFunction)
function myFunction(total,num){
    return total - num;
};
console.log(m)

//REDUCE RIGHT
const number = [2,45,30,100];
const d = number.reduceRight(getSum);
function getSum(total,num){
    return total - num
};
console.log(d)

//REVERSE
const fruits7 = ["apple","cherry","peru"];
fruits7.reverse();
console.log(fruits7)

//SORT
let fruits9 = ["apple","peru","cherry","kiwi"];
fruits9.sort();
console.log(fruits9) 

const number5 = [11,65,75,79,35];
number5.sort();
console.log(number5)