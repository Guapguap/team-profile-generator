// requiring class Employee constructor function and its methods
const Employee = require("./Engineer");

// extend employee construction function to intern 
class Intern extends Employee {

    constructor(name, id, email, school){
        
        // reference to the employee class 
        super (name, id, email);

        this.school = school;
    }

    // method to return school from input 
    getSchool () {

        return this.school;
    }

     // method that changes the employee role to the intern role
    getRole () {

        // returns role as intern 
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;