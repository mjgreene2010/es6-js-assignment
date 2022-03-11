import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(id, name, storeNum) {
    super(id, name, storeNum);
    this.managedEmp = [];
  }

  delete(/*book.id*/) {
    return "delete book";
  }

  updateEmployee(/*employee.id*/) {
    return "update employee";
  }
}

export default Manager;
