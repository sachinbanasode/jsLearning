console.log("========== Step 1 ========== Find the total number of vowels of string");

function vowelCount(str) {
   var count = 0;
   for (let index = 0; index < str.length; index++){
      var char = str.charAt(index);
      if (char == "a"|| char == "e" || char == "i" || char== "o" || char == "u") {
       count = count + 1;
      }

   }
   console.log(`Total number of vowels available of string " ${str} " is: ${count}`);
}
vowelCount("i am angular  Champ");
vowelCount("JavaScript is the language of internet");
vowelCount("Hard work and commitment is the key of success");

console.log("========== Step 2 ========== Find the total character available in the last word");

function lastWordCarsCount(word) {
   for (let index = 0; index < lastWordCarsCount.length; index++) {
      const element = lastWordCarsCount[index];
      
   }
   
}
lastWordCarsCount("i am angular  Champ");
// lastWordCarsCount("JavaScript is the language of internet");
// lastWordCarsCount("Hard work and commitment is the key of success");