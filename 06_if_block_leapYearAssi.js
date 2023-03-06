function checkLeapYear(leapYear) {
    if ( (typeof leapYear != "number") || isNaN == leapYear ) {
        console.log(`${leapYear} is invalid data` );
    
    }

    if (leapYear%4==0  ) {
        console.log(`${leapYear} is leap  Year` );
    } else {
        console.log(`${leapYear} is no leap Year` );
    }
    
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);