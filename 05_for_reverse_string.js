
//string is doing reverse letter
var  reverseString = function  (str){
    var reverse = "";
    for (let index = str.length-1 ; index >=0; index--) {
        var charAt = str.charAt(index);  
        reverse = reverse + charAt;
    }
    return reverse;
}
var result = reverseString("Do it anyhow");
console.log(`Reverse string is: ${result}`);

//only last word is reverse
var  reverseString = function  (str){
    var reverse = "";
    for (let index = str.length-1 ; index >=0; index--) {
        var char = str.charAt(index); 
       if (char ==" ") {
        break;
       }
        reverse = reverse + char;
    }
    return reverse;
}
var result = reverseString("Do it anyhow");
console.log(`Reverse string is: ${result}`);

//"I am Angular Champ"
//count spaces in string
var str = "I am Angular  Champ";
var count = 0;
for (let index = 0; index < str.length; index++){
   var char = str.charAt(index);
   if (char == " ") {
    count = count + 1;
   }
}
console.log("Total number of spaces is :",count);


//count of "a" and e
var str = "i am angular  Champ";
var count = 0;
for (let index = 0; index < str.length; index++){
   var char = str.charAt(index);
   if (char == "a"|| char == "e") {
    count = count + 1;
   }
}
console.log("Total number of a and e is :",count);