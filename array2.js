//FILL
const fruits = ["apple","orange","peru"];
const x =fruits.fill("kiwi");
console.log(x);

const phal = ["apple","orange","peru","mango"];
const z =phal.fill("kiwi" ,2,4);
console.log(z)

//FILTER
const ages = [32,25,24,36,45,17];
const results = ages.filter(checkAdult);
function checkAdult(age){
    return age >=18
};
console.log(results)

//FIND
const vay = [10,20,30,42,60];
const v = vay.find(checkVay);
function checkVay(vay){
    return vay > 18
};
console.log(v)

//FIND INDEX
const items = ["appl","per","mago","kwi"];
const q = items.findIndex(checkItems);
function checkItems(items){
    return items = "kwi"
};
console.log(q);

//FOR EACH
let text= "";
const fruits3 = ["apple","kiwi","peru","orange"];
const u = fruits3.forEach(myFunction);
console.log(text);
function myFunction(items1,index){
   console.log( index +" :" +items1 );
    // console.log(items1);
};
// console.log(u)

