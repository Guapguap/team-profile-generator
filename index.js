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

const addManager = () => {
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(dataManager => {
        const  { name, id, email, officeNumber } = dataManager; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager); 
        console.log(manager); 
        console.log(teamArr);
    })
};

addManager()