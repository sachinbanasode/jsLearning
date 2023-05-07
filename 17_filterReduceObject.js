class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil ", " IT ", 50000, " TCS ");
const emp_radha = new Employee(33, "Radha ", " HR ", 74000, " Wipro ");
const emp_rishi = new Employee(55, "Rishi ", " Finance ", 47000, " TCS ");
const emp_sonali = new Employee(66, "Sonali ", " Finance ", 45000, " Infy ");
const emp_monika = new Employee(77, "Monika ", " IT ", 40000, " Wipro ");
const emp_viny = new Employee(88, "Vinayak ", " IT ", 75000, " TCS ");
const emp_mahi = new Employee(99, "Mahesh ", " HR ", 85000, " Infy ");

const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(
  "------------------------Employees frpm Wipro Company---------------------------"
);
arrayEmployee.filter((Employee) => {
  if (Employee.emp_company == " Wipro ") {
    console.log(Employee.emp_name, Employee.emp_company);
  }
});
console.log(
  "------------------------Employees frpm IT or HR Department---------------------------"
);

arrayEmployee.filter((Employee) => {
  if (Employee.emp_dept == " IT " || Employee.emp_dept == " HR ") {
    console.log(Employee.emp_name, Employee.emp_dept);
  }
});
console.log(
  "------------------------Employees whose id is greater than 50 ---------------------------"
);

arrayEmployee.filter((Employee) => {
  if (Employee.emp_id > 50) {
    console.log(Employee.emp_name, Employee.emp_id);
  }
});
console.log(
  "------------------------Employees has names start fron leter 'A', 'V', 'M'---------------------------"
);

arrayEmployee.filter((Employee) => {
  let empName = Employee.emp_name;
  if (
    empName.startsWith("A") ||
    empName.startsWith("V") ||
    empName.startsWith("M")
  ) {
    console.log(Employee.emp_name);
  }
});

console.log(
  "------------------------Employees average salary of all department---------------------------"
);
console.log(
  "------------------------Employees average salary of 'IT' Department---------------------------"
);

// no output
const arrayEmpSalary = arrayEmployee
  .filter((Employee) => {
    empSalary = Employee.emp_salary;
    return empSalary;
  })
  .reduce((runningTotal, value) => {
    totalSalary = runningTotal + value;
    avgSalary = totalSalary / empSalary.length;
    return avgSalary;
  });
console.log(arrayEmpSalary);
