class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
const iciciBank = new Bank("ICICI Bank", "Sangola", "62514897564", "YES0004598", 14.75 );
const kotakBank = new Bank("Kotak Bank", "Panvel", "65128634855", "KBN0004138", 14.75 );
const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 );
const panjabBank = new Bank("Panjab Bank", "Pandharpur", "62458635838", "PANB0001208", 8.23 );

console.log("--------------------------Add all Objects in one array and traverse this array using for of loop-----------------------------");
const setOfBanks = new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(panjabBank);

console.log(setOfBanks);

for (const bank of setOfBanks) {
    console.log(`${bank.bankName}  ${bank.location}`);
}

console.log("----------------------------- Find The Object which has name Kotak Bank using for of loop --------------------------------------");
for (const bank of setOfBanks) {
    if (bank.bankName=="Kotak Bank") {
        console.log(bank);
    }
}

console.log("----------------------------- Log the Details on console using for of loop --------------------------------------");
for (const bank of setOfBanks) {
    console.log(bank);
    
}