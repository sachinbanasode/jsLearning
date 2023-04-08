class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, " Anil ", " IT ", 50000, " TCS ");
const emp_radha = new Employee(33, " Radha ", " HR ", 74000, " Wipro ");
const emp_rishi = new Employee(55, " Rishi ", " Finance ", 47000, " TCS ");
const emp_sonali = new Employee(66, " Sonali ", " Finance ", 45000, " Infy ");
const emp_monika = new Employee(77, " Monika ", " IT ", 40000, " Wipro ");
const emp_viny = new Employee(88, " Vinayak ", " IT ", 75000, " TCS ");
const emp_mahi = new Employee(99, " Mahesh ", " HR ", 85000, " Infy ");

const setOfemp= [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];

console.log(
  "----------------------Employees working in  TCS------------------------------"
);
for (const Employee of setOfemp) {
  if (Employee.emp_company == " TCS ") {
    console.log(`${Employee.emp_name} , ${Employee.emp_company}`);
  }
}

console.log(
  "----------------------Employees in Finance Department------------------------------"
);

for (const Employee of setOfemp) {
  if (Employee.emp_dept == " Finance ") {
    console.log(`${Employee.emp_name} , ${Employee.emp_dept}`);
  }
}
console.log(
  "----------------------Employees has name start with 'R'------------------------------"
);

for (const Employee of setOfemp) {
  // var empNameLength=Employee.emp_name.length;
  // console.log(greetLength);

  var empNameFirstCar = Employee.emp_name.charAt(1);
  if (empNameFirstCar == "R") {
    console.log(Employee);
  }
}

console.log(
  "----------------------Employees whose salaryis grater than 75000------------------------------"
);

for (const Employee of setOfemp) {
  if (Employee.emp_salary > 75000) {
    console.log(
      `${Employee.emp_name} ,${Employee.emp_company}, ${Employee.emp_salary}`
    );
  }
}

console.log(
  "----------------------Employees whose salaryis grater than ro equal to  50000 and from 'IT' department---------"
);

for (const Employee of setOfemp) {
  if (Employee.emp_salary >= 50000 && Employee.emp_dept == " IT ") {
    console.log(Employee);
  }
}

console.log(
  "----------------------Employees has working in company 'infy'------------------------------"
);

for (const Employee of setOfemp) {
  if (Employee.emp_company == " Infy ") {
    console.log(Employee);
  }
}
