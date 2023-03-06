function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`month of the year is ${monthNumber} : January`);
            break;
        case 2:
            console.log(`month of the year is ${monthNumber} : February`);
            break;
        case 3:
            console.log(`month of the year is ${monthNumber} : March`);
            break;
        case 4:
            console.log(`month of the year is ${monthNumber} : April`);
            break; 
        case 5:
            console.log(`month of the year is ${monthNumber} : May`);
            break;
        case 6:
            console.log(`month of the year is ${monthNumber} : June`);
            break;
        case 7:
            console.log(`month of the year is ${monthNumber} : July`);
            break; 
        case 8:
            console.log(`month of the year is ${monthNumber} : Augast`);
            break;
        case 9:
            console.log(`month of the year is ${monthNumber} : saptember`);
            break; 
        case 10:
            console.log(`month of the year is ${monthNumber} : Octomber`);
            break;
        case 11:
            console.log(`month of the year is ${monthNumber} : November`);
            break; 
        case 12:
            console.log(`month of the year is ${monthNumber} : December`);
            break;                         
    
        default:
            console.log(`invalid Month Number ${monthNumber}`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
