//Arrow function with no arguments
let  show = ()=> {
    console.log("Arrow Function");
}
show ();
 
//Arrow function with arguments nad no return value
let add = (num1, num2)=> {
    console.log(num1+num2);
}
add(10, 20);

//Arrow function with arguments nad return value
let multiply = (num1, num2)=> {
   const result = num1*num2;
   return result
}
const multiplyresult = multiply(10, 20);
console.log(multiplyresult);

//short method of arrow function
let multiplyRes = (num1, num2)=> num1*num2;
console.log(multiplyRes(10, 5));
