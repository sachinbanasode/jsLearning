const BankSBI = {
    bankName : "SBI Bank",
    branch : "Mangalwedha",
    ifsc : "SBIN0001915",
    interestrate : "8.75%"
}

const BankLocation = {
    street : "Pandharpur Road",
    city : "Mangalwedha",
    pinCode : 413304
}
// console.table(BankSBI);
// console.table(BankLocation);

Object.assign(BankSBI , BankLocation );
console.log(BankSBI);

const newBank = {...BankSBI}
console.log("Cloned New object using spread operetot:-");
console.log(newBank); //when i using string templet output is [object object]

const RateOfInterest = {
    homeLoanInterest : "6 %",
    personalLoanInterest : "7 %",
    dueInterest :"8 %" 
}


let sbiDetails = {}
Object.assign(sbiDetails, BankSBI , BankLocation, RateOfInterest);
console.log(`Mearge object BankSBI, BankLocation & RateOfInterest`);
console.table( sbiDetails);

//traversing of sbiDetails is remaining.