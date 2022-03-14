import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(id, name, storeNum) {
    super(id, name, storeNum);
    this.managedEmp = [];
  }

  addProfile() {
    return "add employee";
  }

  updateProfile(/*employee.id*/) {
    //will override the updateProfile method
    return "update employee information and permissions";
  }

  deleteProfile(/*employee.id*/) {
    return "update employee";
  }
}

export default Manager;

//Book class will have add, update and delete books
