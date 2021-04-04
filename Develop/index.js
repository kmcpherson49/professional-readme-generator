// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); 
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input 
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = ([
    {
    type: "input",
    name: "title",
    message: 'What is the title of your project?'
    },
    {
        type: "input",
        name: "description",
        message: 'Please enter a description of your project'
    },
    // {
    //     type: 'input',
    //     name: 'table',
    //     message: ''
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project have?',
        choices: ['license 1', 'license 2', 'license 3', 'license 4']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add instructions for contributing developers.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add tests for your application'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
        questions
    )
    .then(answers => {
        fs.writeFileSync("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
