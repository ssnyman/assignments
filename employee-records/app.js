// create empty array
let employees = []
// create employee constructor
function employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    // method sends info to console
    employee.prototype.printEmployeeForm = function () {
        employees.push(this)
    }
}
// create three employees
let john = new employee("John", "Engineer", "$45/hr", "full time");
let bill = new employee("Bill", "QA", "$34/hr", "full time");
let sean = new employee("Sean", "Trainee", "$20/hr", "full time");
// set a status to contract
sean.status = "contract"
// call the printEmployeeForm for each employee
john.printEmployeeForm(this)
bill.printEmployeeForm(this)
sean.printEmployeeForm(this)
// push employees into array
employees.push(john, bill, sean)

console.log(john, bill, sean)