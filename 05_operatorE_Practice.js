// numeric string used with + gives string type

let result;

result = " 3 " + 2;
console.log(result); // " 32 "

result = " 3 " + true;
console.log(result); // " 3true "

result = " 3 " + undefined;
console.log(result); // " 3undefined "

result = " 3 " + null;
console.log(result); // " 3null "

console.log("*** Implicit boolean conversion to Number ***");

// if boolean is used , true is 1 , false is 0
let result1;

result = " 4 " - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

console.log("*** Implicit string conversion to Number ***");

// numeric string used with -
let result2;
result = " 4 " - " 2 ";
console.log(result); // 2

result = " 4 " - 2;
console.log(result); // 2

result = " 4 " * 2;
console.log(result); // 8

result = " 4 " / 2;
console.log(result); // 2 1

console.log("*** Undefined used with number , boolean or null given NaN ***");

// Arithmetic operation of undefined with number , boolean or null gives NaN
let result3;

result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN

console.log(
  "***  Explicit conversion : Convert number strings and boolean values to numbers , In that case we can use Number ( ) ; ***"
);

// string to number
result = Number(" 324 ");
console.log(result); // 324

result = Number(" 324e - 1 ");
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

console.log(
  "***  Explicit conversion : Invalid strings to number return NaN ; ***"
);

let result4;
result = Number(" hello ");
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

console.log(
  "***  Explicit conversion :  string to number using + operator; ***"
);

var numberInString = " 100 ";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

console.log(
  "***  Explicit conversion :number to string data type conversion using toString ( ) method ***"
);

var myNumber = 100;
console.log(typeof myNumber); // number
var afterConversion = myNumber.toString();
console.log(typeof afterConversion); // string
