// requiring class Employee constructor function and its methods
const Employee = require("./Employee");

// the extends keyword allows use of all contructor function and methods in class Employee 
// class Engineer constructor function has github in its parameter
class Engineer extends Employee {
    
    constructor (name, id, email, github) {
        
        // reference to the employee class 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

    // changes the employee role to the engineer role
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer;