console.log("-------Quation 01---------");
function maleMarriageEligibility(gender, age, boyName) {
   var result = gender =="male" && age >=21 
   ? `Hey ${boyName} you are eligible for marrage`
   :`${boyName} Not eligible for marrage`;
    return result;
}
var result = maleMarriageEligibility("male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("male", 17, "Stew Jobs");
console.log(result);

console.log("-------Quation 02---------");

function femaleMarriageEligibility(gender, age, girlName) {
    var result = gender =="female" && age >=18
    ? `Hey ${girlName} you are eligible for marrage`
    :`${girlName} Not eligible for marrage`;
     return result;
 }
 var result = maleMarriageEligibility("female", 16, "Jenifer");
 console.log(result);
 
 var result = maleMarriageEligibility("female", 27, "Malinda Gates");
 console.log(result);