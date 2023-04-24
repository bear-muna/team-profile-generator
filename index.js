const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generate = require('./util/generateHtml');

const team = [];

const teamApp = async () => {
    const data = await inquirer
        .prompt([
            {
                type: 'list',
                message: 'Welcome! Select an option:',
                choices: ['Create Your Team', 'Quit'],
                name: 'intro',
            },
        ]);
    switch (data.intro) {
        case 'Create Your Team':
            const managerData = await inquirer 
                .prompt([
                    {
                        type: 'input',
                        message: "What is the manager's name?",
                        name: 'managerName',
                    },
                    {
                        type: 'input',
                        message: "What is the manager's ID number?",
                        name: 'managerID',
                    },
                    {
                        type: 'input',
                        message: "What is the manager's email?",
                        name: 'managerEmail',
                    },
                    {
                        type: 'input',
                        message: "What is the manager's office number?",
                        name: 'managerOfficeNumber',
                    },
                    {
                        type: 'list',
                        message: 'Would you like to add a team member?',
                        choices: ['Engineer', 'Intern', 'Quit'],
                        name: 'memberAdd'
                    },
                ]);
            memberApp(managerData.memberAdd);
    }
}

const memberApp = async (choice) => {
    switch (choice) {
        case 'Engineer':
            const engineerData = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the engineer's name?",
                        name: 'engineerName',
                    },
                    {
                        type: 'input',
                        message: "What is the engineer's ID?",
                        name: 'engineerID',
                    },
                    {
                        type: 'input',
                        message: "What is the engineer's email?",
                        name: 'engineerEmail',
                    },
                    {
                        type: 'input',
                        message: "What is the engineer's GitHub username?",
                        name: 'engineerGithub',
                    },
                ]);
            
    }
}