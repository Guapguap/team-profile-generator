// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team profiles
const Manager = require('./build/Manager');
const Engineer = require('./build/Engineer');
const Intern = require('./build/Intern'); 

// link to page creation
const generateHTML = require('./src/generateHTML');

// team array
const teamArr = []; 

// this function displays prompts for the user about the manager
function addManager(){
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: userInput => {

                // using isNaN to validate if the value is a number 
                if  (isNaN(userInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {

                // using this email regex to validate if it is a live email 
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])

    // this promise has the user input data 
    .then(dataManager => {

        // object destructuring data for manager 
        const  { name, id, email, officeNumber } = dataManager; 

        // creates new object passing all input data through the parameters
        const manager = new Manager (name, id, email, officeNumber);

        // pushes the new object into the empty array 
        teamArr.push(manager); 
    })
};

// this function displays prompts for the user about the Engineer and / or Intern
function addEmployee() {

    // to separate the manager prompts from the employee prompts 
    console.log(`
    =================
    Adding more team members
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },

        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",

            // using role to determine if the user chose this specific employee type 
            when: (input) => input.role === "Engineer",
        },

        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",

            // using role to determine if the user chose this specific employee type
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmMember',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])

    // this promise has the user input data 
    .then(employeeData => {

        // object destructuring data for employee 
        let { name, id, email, role, github, school, confirmMember } = employeeData; 
        
        // this employee variable has two possible values 
        let employee; 

        // if statement to check if the user input selected the Engineer 'role' or the Intern 'role' from the list options 
        if (role === "Engineer") {

            // creates new object passing all input data through the parameters
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {

            // creates new object passing all input data through the parameters
            employee = new Intern (name, id, email, school);

        }

        // pushing the new object into the empty array 
        teamArr.push(employee); 

        // if the user inputs 'y' then the addEmployee function will be invoked 
        if (confirmMember) {
            return addEmployee(teamArr); 
        } 
        else {

        // if the user inputs 'N' then it will return the teamArr  
            return teamArr, console.log(teamArr);;
        }
    })

};

addManager()
    .then(addEmployee)
