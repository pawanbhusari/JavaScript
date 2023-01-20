const array1 =["pawan","viju","raju"];
const array2 =["sonu","tonu"];
const array3 = array1.concat(array2);
console.log(array3)

// JOIN
const fruits =["apple","mango","banana"];
let text  = fruits.join(" ");
console.log(text)

//SLICE
const paaji =["peru","guava","amrud","amla","lemon"];
const citrus =paaji.slice(3);
console.log(citrus)

//SPLICE
const phal = ["kiwi","cherry"];
phal.splice(2,2,"nimbu","adrak");
console.log(phal)

//copyWithin
const names =["ajju","bhaaju","kaju","naju"];
names.copyWithin(2,0);
console.log(names)

//Entries
const rules = ["ragada","parade","drill","battleload"];
const f = rules.entries();
for (let x of f){
    console.log(x);
}

//Every
const ages = [23,45,31,14,22];
 let x = ages.every(checkAge);
function checkAge(age){
    return age > 18;
}
console.log(x)