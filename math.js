let x = Math.random(1)*10;
console.log(x);

//NUMBER.JS
//max value
let c =Number.MAX_VALUE;
console.log(Number.MAX_VALUE);

//to locale string
let num = 10000;
let text = num.toLocaleString();
console.log(text)

let num1 = 1000;
const myObj  ={
    style : "currency",
    currency : "USD"
};
let text1 =num1.toLocaleString("en-US",myObj);
console.log(text1);
