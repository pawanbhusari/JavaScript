// encode URI
let uri = "my test.asp?name=stale&cqr=saab";
let encoded = encodeURI(uri);
console.log(encoded);

//decode URI
let uri1 = "my%20test.asp?name=st%C3%A5le&car=saab";
let decode = decodeURI(uri1);
console.log(decode);

//EVAL
let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);
console.log(result);