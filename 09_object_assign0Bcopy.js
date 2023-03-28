let sbiBank = {
    bankName : "SBI Bank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75
}

let axisBank = {
    bankName: "Axis",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5
}

let hdfcBank = {
    bankName: "hdfc",
    location: "Sinhgad road",
    accounct: 4593587569,
    ifsc: "HDFC000489",
    interestRate: 11.79
}

let yesBank = {
    bankName: "YesBank",
    location: "Kothrud Pune",
    account: 4568792581,
    ifsc: "YESB0214597",
    interestRate: 14.5,

    show: function () {
       console.log(`Name ${this.bankName}, location:${this.location}`); 
    }

}

console.log(sbiBank);
console.log(axisBank);
console.log(hdfcBank);
console.log(yesBank);

yesBank.show();

const arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank];
for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
    
}

for (const bank of arrayOfBanks) {
    console.log(bank);
}