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

const mapOfBanks = new Map();
mapOfBanks.set("4597863258", axisBank);
mapOfBanks.set("62514897564", sbiBank);
mapOfBanks.set("62514897564", iciciBank);
mapOfBanks.set("65128634855", kotakBank);
mapOfBanks.set("62514897564", hdfcBank);
mapOfBanks.set("62458635838", panjabBank);


const keysOfMap = mapOfBanks.keys();

for (const key of keysOfMap) {
    const element = mapOfBanks.get(key);
    console.log(element);
}

console.log("Travers the  Map");
const keyOfMap = mapOfBanks.keys();

for (const key of keyOfMap) {
  console.log(key, mapOfBanks.get(key));
}
console.log("------------****-----------");