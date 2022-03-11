class Employee {
  constructor(id, name, storeNum) {
    this.id = id;
    this.name = name;
    this.storeNum = storeNum;
  }

  addBook() {
    return "added book";
  }

  deleteRequest() {
    return "delete request";
  }

  updateBook() {
    return "update book";
  }

  updateProfile() {
    return "updated profile";
  }
}

export default Employee;
