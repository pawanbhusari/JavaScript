// SEARCH
let text = "Mr Blue has a blue house";
let position = text.search("Blue");
console.log(position)

//case sensitive example
let text1 = "Mr Blue has a blue house";
let position1 = text.search("blue");
console.log(position1)

//REPLACE
let text2 = "Mr Blue has a blue house";
let result = text2.replace(/blue/,"red");
console.log(result)

//startsWith
let text3 = "hello world,welcome to world";
let result1 = text3.startsWith("Hello");
console.log(result1)

//SUBSTR
let text4 = "hello world!";
let result4 = text4.substr(1);
console.log(result4)

//SUBSTRING
let text7 = "hello world";
let result3 = text7.substring(1,4);
console.log(result3)