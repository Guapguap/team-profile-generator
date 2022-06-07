// require Employee 
const Employee = require("./Employee");

// extend employee construction function to manager 
class Manager extends Employee {

    constructor(name, id, email, office){

        // reference to the employee class 
        super (name, id, email);

        this.office = office;
}

    // method the returns office
    getOffice(){

        return this.office;
    }

    // changes the employee role to the manager role
    getRole(){

        return "Manager";
    }
}

// to be exported
module.exports = Manager