const professor = {
    firstName:"Mahesh",
    lastName:"Pawar",
    age:35,
    address:"Solapur",
    id:124521,
    degreeDetails: function () {
        this.degrees//this is referance variable
        return `First degree is: ${this.degrees.degree01},second degree is ${this.degrees.degree02}, Third degree is ${this.degrees.degree03} fourth degree is${this.degrees.degree04}`
    }

}


professor.degrees= {
    degree01: "Engineering",
    degree02: "CSD",
    degree03: "PHD",
    degree04: "Adv Computing"

},
console.log(professor.degrees);

professor.cirtificates={
    cirtificate01:"Hacker Rank",
    cirtificate02:"Participation",
    cirtificate03:"IFE Course",
    cirtificate04:"Adv Programming",
        
},
console.log(professor.cirtificates);


console.log(`-------------------------------******  -Step 2- *******------------------------------total degrees`);
let resultDegree = professor.degreeDetails();
console.log(resultDegree);

console.log(`-------------------------------------- step 3 -----------------------------Add new property as professor college univercity`);
 professor.univercity = "Kolhapur";
 console.log(professor.univercity);


 console.table(professor);

 console.log(`--------------------------------------step 4 -------------------------------updare age property`);
 professor.age= 38;
console.log("Updated age is ",professor.age);
//  console.table(professor);

 console.log(`--------------------------------------step 5 -------------------------------delete cirtificate 03`);
 delete professor.cirtificates.cirtificate03;
 console.log("delete cirtificate03",delete professor.cirtificates.cirtificate03);
//  console.table(professor);

 console.log(`--------------------------------------step 6 -------------------------------Add new cirtificate 05 on nested object`);

professor.cirtificates.cirtificate = {
    cirtificate: "Adv Excel"
}
console.log(professor.cirtificates.cirtificate);
console.table(professor);
