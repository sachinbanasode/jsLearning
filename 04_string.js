var greet = "Good Morning";
console.log("Type of greet is", typeof greet);
console.log("Total no of character available into this string variable  - greet");
var greetLength=greet.length;
console.log(greetLength);


console.log("Find the Character by index value");
var charAtIndex3=greet.charAt(3);
console.log("Character available at inde3 is ",charAtIndex3);

console.log("Find The Last Charactr");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log(charAtLastIndex );


console.log("Find The Index By Character Value");
var indexOfM= greet.indexOf('M')
console.log("Index of Char M Is",indexOfM);

console.log("Index Of O Char Is",greet.indexOf('o'));
console.log("Index Of Last O Char Is",greet.lastIndexOf('o'));


var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:",replaceResult.toUpperCase());
console.log("Upper Case:",replaceResult.toLowerCase());

var myName = "   Sachin Banasode    ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim():",myNameAfterTrim, myName.length, myNameAfterTrim.length);
//Find Total Extra Spaces removed from the string  -myName
var count = myName.length -  myNameAfterTrim.length;
console.log(count);

console.log("includes()");

console.log("Is substring mor includes in the greet or not:",greet.includes("mor"));
console.log("Is substring Afternoon includes in the greet or not:",greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not:",greet.includes("o"));

console.log("Slice() Method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("Split() Method");
var greet = "Good Morning my Dear friend"
var splitResult = greet.split(" ")
console.log(splitResult);
console.log("type of split result is :", typeof splitResult);
console.log("Total Wordes:",splitResult.length);


var myFriendList = "Billgates, stew job , elon Musk, ratan tata, Sundre pichai, satya Nadela, Narayan Murti, Nandan Nilekani";
var frdList = myFriendList.split(",")
console.log(frdList  );
console.log(frdList.length );
