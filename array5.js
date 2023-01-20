//SHIFT
const fruits = ["apple","peru","cherry","kiwi"];
fruits.shift();
console.log(fruits)

//SOME
const ages = [3,10,2,7];
var o =ages.some(checkAdult);
function checkAdult(age){
    return age > 18
};
console.log(o)