// Importing Employee class for inheritance
const Employee = require('../lib/Employee');

// Intern class and inheriting Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    // Method returning intern items
    getSchool() {
        return this.school;
    }
}

// Exporting class
module.exports = Intern;