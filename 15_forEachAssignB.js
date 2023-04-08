

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
  
  const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
  

  console.log("---------------------Find the employees whose Working in TCS company....---------------------"); 
  arrayEmployee.forEach(Employee => { 
 
    if (Employee.emp_company == " TCS ") { 
        console.log(`Employee Name is: ${Employee.emp_name} & Company is: ${Employee.emp_company}`); 
    } 
});
console.log("---------------------Find the employees whose Salary>=5000....---------------------"); 


arrayEmployee.forEach(Employee => { 
   
     if (Employee.emp_salary >=  50000) { 
         console.log(Employee); 
     } 
 });

 console.log("---------------------Sum of all employe salary....---------------------"); 
 
let sum = 0;
arrayEmployee.forEach((Employee) => {
  
  sum = sum + Employee.emp_salary;
});
console.log(`Addition of all employees salary is :  ${sum}`);

console.log("---------------------Sum of all employe salary....---------------------"); 
var avgSalary = sum / arrayEmployee.length;
console.log(avgSalary);

console.log("---------------------Employee has department is 'IT' OR 'HR' AND salary is greater than 75000....---------------------"); 

arrayEmployee.forEach(Employee => {
    if (Employee.emp_dept == " IT "|| " HR " ) {
        if (Employee.emp_salary >=75000 ) {
            console.log(Employee);
        }
    }
});