// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short Description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install Dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What Command should be run to run Tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'userknowledge',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about Contributing to the repo?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('README file created successfully!');
    }
});
}

// TODO: Create a function to initialize app
function init() {
    console.log('Create a Professional README!');

    inquirer.prompt(questions).then((answers) => {

    writeToFile('utils/README.md', generateMarkdown(answers))

  
})
}
// Function call to initialize app
init();
