const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
    }
    
    const carEngine ={
        enginePower: "1499CC",
        maxPower: "113 BHP"

    } 

    console.log("---------------------mearge object.assign()------------------------------------");
    Object.assign(car, carEngine);
    console.log(car);

    console.log("---------------------mearge with spread operator------------------------------------");
    const mcar = {...car};
    const meargeCarEngine = car + carEngine;
    console.log(meargeCarEngine);