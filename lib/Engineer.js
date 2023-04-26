// importing from Employee class for inheritance
const Employee = require('../lib/Employee');

// Engineer class and inheriting Employee
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    // Function returning Engineer items
    getGithub() {
        return this.github;
    }
}

// exporting class
module.exports = Engineer;