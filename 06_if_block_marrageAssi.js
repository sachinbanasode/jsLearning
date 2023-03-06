console.log(
  "-------------------------------Quation No 1----------------------------------"
);
function maleMarageEligibility(gender, age, boyName) {
  if (gender == "male" && age >= 21) {
    console.log(
      `Hey ${boyName} your age is ${age} You are eligibe for marrage`
    );
  } else {
    console.log(
      ` ${boyName} your age is ${age} You are not eligibe for marrage`
    );
  }
}
maleMarageEligibility("male", 25, "Billgates");
maleMarageEligibility("male", 17, "tew jobs");

console.log(
  "-------------------------------Quation No 2  ---------------------------------"
);
function femaleMarageEligibility(gender, age, girlName) {
  if (gender == "male" && age >= 21) {
    console.log(
      `Hey ${girlName} your age is ${age} You are eligibe for marrage`
    );
  } else {
    console.log(
      ` ${girlName} your age is ${age} You are not eligibe for marrage`
    );
  }
}
maleMarageEligibility("male", 25, "Jenifer");
maleMarageEligibility("male", 17, "tew jobs");
