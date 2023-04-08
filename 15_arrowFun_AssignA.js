console.log("------------------------------Array function with no argument and no return value--------------------------");
let greet = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
greet();

console.log("------------------------------Array function with 3 argument and no return value--------------------------");

let multiply = (num1, num2, num3=1) =>{
    console.log(`multiplication is : `,num1*num2*num3);
}
multiply(5, 5, 2);
multiply(10, 4);//assign num3 value default it is 1 
console.log("------------------------------Array function with 5 argument and return value--------------------------");

let add = (arg1, arg2, arg3, arg4, arg5) => {
    const result = arg1 + arg2 + arg3 + arg4 + arg5;
    return result;
}
const addition = add(100, 100, 200, 349, 756);
console.log(`Addition of 100, 100, 200, 349, 756 these 5 number's is = "${addition}"`);  
const greetadd = add("I am ", " learning ", " ES6 ", " features ", " in depth ");
console.log(`Addition of string values is = "${greetadd}"`);