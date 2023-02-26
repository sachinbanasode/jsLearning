var num1 = 100;
var num2 = 200;

var str1="sweety";
var str2="cutie";

function swapVariable(value1, value2,) { 
     // var value1=num1 , var value2=num2
 console.log("Before swap:",value1, value2);
 var temp=value1;
 value1=value2;
 value2=temp;
 console.log("After swap:",value1, value2);
 return "Swapping variables successfully complited";
}
swapVariable( num1,num2);  //function call or Function invoke
swapVariable( str1,str2);


var swapResult = swapVariable( num1,num2);//function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariable(str1,str2);//function call or Function invoke
console.log(swapResult2);


//function with no argumens and no return value
function showFullName ( ){
    console.log("My Full Name Is Sachin Babasaheb Banasode:");//100
}
showFullName ( );//function call or invok



//function with argumens and no return value
function showage(age){
console.log("My Age Is:",age);
}
showage(32);


//function with no argumens and return value
function fullName( ){
    var name= "Sachin Banasode";
    return name;
}
var fName = fullName( );
console.log(fName);


function sumOfNumber(num1, num2, num3){
var sum = num1 + num2 + num3;
return sum;
}
var sumResult= sumOfNumber(10, 45, 79);
console.log(sumResult);



 function display (num){
    console.log(num);//100
    var result = typeof num ; //number
    return result;
 }
 var displayResult= display(100);
console.log(displayResult);