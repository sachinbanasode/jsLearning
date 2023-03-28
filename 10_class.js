class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }

}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
sbiBank.showDetails();//good method it is used maney times

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);


class person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;

    }
}
const personDhoni = new person ("M S Dhoni","Ranchi");
const personShubham = new person ("Shubham", "Mumbai");


console.log(personDhoni instanceof person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);