//Given array
const arrayNums = [20, 3, 4, 56, 90, 400, 49 ];

console.log("----------------------------Shallow clone ------------------------");

const clonedArrayNums = arrayNums;
clonedArrayNums.push(55, 66);
console.log(`After push(55, 66)in cloned array then Given array arrayNums is[ ${arrayNums} ]`);
console.log(`After push(55, 66)in cloned array then clone array clonedArrayNums is [ ${clonedArrayNums} ]`);

console.log("----------------------------Deep clone ------------------------");


const deepclonedArrayNums = [...arrayNums];
arrayNums.push(10, 25);
console.log(`Update value 10 , 25 at last position in given array then given array arrayNums is [${arrayNums}]`);
console.log(`Update value 10 , 25 at last position in given array then Deep cloned array deepclonedArrayNums is [${deepclonedArrayNums}]`);



console.log("----------------------------mearge array ------------------------");
const arrayEven = [ 2, 30, 14, 8 ];

let clonearray = [ ...arrayEven ];
const meargearray = arrayEven + arrayNums;
console.log(`After mearge array using spread operator is :- [ ${meargearray} ]`);

console.log("=====================Employee info Given object============================");

const employeeInfo = {
    empId: 27,
    empName: "John Doe",
    salary: {
        julyMonth: "40,000 INR",
        augMonth: "50,000 INR",
        junMonth: "65,000 INR"
    },
    address:{
        locality:{
            colony: "Om Vrindavan society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600345688","1800 4567 32","+91 9096 5678 72"]
}

console.table(employeeInfo.address);
console.log(employeeInfo.mobiles);

console.log("===================update july month salary in cloned object perform deep clone JSON.stringfy()==================================");

const updateEmpInfo = JSON.parse(JSON.stringify(employeeInfo));
updateEmpInfo.salary.julyMonth = "80,000 INR";
console.log(`Update property july month salary to 80,000 perform deep clone JSON.stringfy() then employeeInfo salary is  "${employeeInfo.salary.julyMonth}"`);
console.log(`Update property july month salary to 80,000 perform deep clone JSON.stringfy() then cloned employeeInfo salary is "${updateEmpInfo.salary.julyMonth}" `);

console.log("===================update country in original object perform deep clone JSON.stringfy()==================================");

employeeInfo.address.country = "United Kingdom";

console.log(`Update property country to 'Unitrd Kingdom' in orignal object then employeeInfo country is:-  "${employeeInfo.address.country}"`);
console.log(`Update property country to 'Unitrd Kingdom' in orignal object then cloned employeeInfo country is:- "${updateEmpInfo.address.country}" `);


console.log(employeeInfo);
console.log(updateEmpInfo);

