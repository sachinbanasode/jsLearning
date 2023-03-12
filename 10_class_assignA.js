console.log('=================Step 01 =====================******************Define a class for vehicle with constructer');
class Vehicle {
    constructor (VehicleName, company, engineNumber, engineType, colour, price){
        this.VehicleName = VehicleName;
        this.company = company;
        this.engineNumber= engineNumber;
        this.engineType = engineType;
        this.colour = colour;
        this.price = price;
    }
}
const i10 = new Vehicle ("i 10", "Hunday", "ENG00LP87540", "Diezel Engine","White", "7.2 Lakh");
console.log(i10);

const Spresso = new Vehicle ("Spresso", "Maruti Suzuki", "ENP00JD78653", "Petrol + CNG Engine", "Gray", "5.5 Lakh");
console.log(Spresso);

const wrv = new Vehicle ("WR-V", "Honda", "ENP000SP549638", "Petrol Engine", "Red", "10.5 Lakh");
console.log(wrv);

const swift = new Vehicle ('Swift Desire', 'Maruti Suzuki', 'ESP001MP648761', 'Diezel Engine', 'Black', '7.25 Lakh');
console.log(swift);

console.log('=================Step 01 =====================***************Define a class for College with constructer');

class College {
    constructor(collegeName, address, university, collegeRank, CollegeOf, Placement ){
        this.collegeName = collegeName;
        this.address = address;
        this.university = university;
        this.collegeRank = collegeRank;
        this.CollegeOf = CollegeOf;
        this.Placement = Placement;
    }
}
const KBP = new College ('K.B.P', 'Pandharpur', 'Solapur','A+', 'Science, Arts, Commers','80%' );
console.log(KBP);

const kec = new College ('K.E.C.','Shelwe,Pandharpur','Solapur', 'A++','Engineering','85%');
console.log(kec);





