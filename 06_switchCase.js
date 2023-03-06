function dayCheck(dayNumber) {
    
    if (dayNumber<=0 || dayNumber>7 || dayNumber==null || isNaN(dayNumber)) {
        console.log(`Invalid Day Number`);
    }
    if (dayNumber==1) {
        console.log("Monday");  
    }
    if (dayNumber==2) {
        console.log("Tuesday");  
    }
    if (dayNumber==3) {
        console.log("Wed");  
    }
    if (dayNumber==4) {
        console.log("Thurday");  
    }
    if (dayNumber==5) {
        console.log("Friday");  
    }
    if (dayNumber==6) {
        console.log("saturday");  
    }
    if (dayNumber==7) {
        console.log("sunday");  
    }
}
dayCheck(1);
dayCheck(2);
dayCheck(3);
dayCheck(5);
dayCheck(7);
dayCheck(-3);
dayCheck(NaN);
dayCheck(8);

console.log("-------------------------------------------------------------------------------------------------------------------------");

function weekDay(day) {
    switch (day) {
        case 1:
            console.log(`Day of The Week is ${day} :Monday`);
            break;
        case 2:
           console.log(`Day of The Week is ${day} :Tuesday`);
             break;
        case 3:
            console.log(`Day of The Week is ${day} :Wed`);
            break;
        case 4:
            console.log(`Day of The Week is ${day} :Thurday`);
            break;
        case 5:
           console.log(`Day of The Week is ${day} :Friday`);
            break;
        case 6:
            console.log(`Day of The Week is ${day} :saturday`);
            break;
        case 7:
           console.log(`Day of The Week is ${day} :sunday`);                          
           break;
        default:
            console.log(`Invalid Day : ${day}`);
            break;
    }   
}
weekDay(1);
weekDay(-6);
weekDay(2);
weekDay(3);
weekDay(5);
weekDay(7);
weekDay(undefined);
weekDay(NaN);
weekDay(0);
weekDay(null);