// importing packages and other classes 
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generate = require('./util/generateHtml');

// Team array for fs function
const team = [];

// Function to take in user input of team
const teamApp = async () => {
    try {
        // Prompt method
        const data = await inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Welcome! Select an option:',
                    choices: ['Create Your Team', 'Quit'],
                    name: 'intro',
                },
            ]);
        // Switch case that takes in previous prompt's answer
        switch (data.intro) {
            case 'Create Your Team':
                
                // Prompt method for manager
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
                
                // Adding object into team array    
                team.push(new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber));    
                memberApp(managerData.memberAdd);
                break;
    
            case 'Quit':
                break;
        }
    // Catching error 
    } catch (err) {
        console.log(err);
    }
}

// Function to create members
const memberApp = async (choice) => {
    try {
        // Switch case for answer from previous prompt
        switch (choice) {
            case 'Engineer':
                
                // Engineer prompt
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
                        {
                            type: 'list',
                            message: "What team member do you want to add?",
                            choices: ['Engineer', 'Intern', 'Quit'],
                            name: 'memberAdd',
                        },
                    ]);
                // Adding engineer object to team array
                team.push(new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub));
                memberApp(engineerData.memberAdd);
                break;

            case 'Intern':
                // Intern prompt
                const internData = await inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: "What is the intern's name?",
                            name: 'internName',
                        },
                        {
                            type: 'input',
                            message: "What is the intern's ID?",
                            name: "internID",
                        },
                        {
                            type: 'input',
                            message: "What is the intern's email?",
                            name: 'internEmail',
                        },
                        {
                            type: 'input',
                            message: "What is the intern's school?",
                            name: 'internSchool',
                        },
                        {
                            type: 'list',
                            message: "What team member do you want to add?",
                            choices: ['Engineer', 'Intern', 'Quit'],
                            name: 'memberAdd',
                        }
                    ]);
                // Adding intern object into team array
                team.push(new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool));
                memberApp(internData.memberAdd);
                break;
    
            case 'Quit':
                // Creates HTML file
                fs.writeFile('./dist/index.html', generate(team), err => 
                    err ? console.log(err) : console.log("Success"));
                break;          
        }
    // Catches error
    } catch (err) {
        console.log(err);
    }
}

teamApp();