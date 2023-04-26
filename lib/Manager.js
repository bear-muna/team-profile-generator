// Importing employee class for inheritance
const Employee = require('../lib/Employee');

// Manager class and inheriting employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    // Method returning manager items
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Exporting class
module.exports = Manager;