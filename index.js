// include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

// array of questions to ask user
// name property will be used to access response data when generating markdown
const questions = [
  {
    name: 'title',
    type: 'input', 
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    type: 'input', 
    message: 'Provide a brief description of your project:',
  },
  {
    name: 'installation',
    type: 'input', 
    message: 'Provide instructions on how to install this project:',
  },
  {
    name: 'usage',
    type: 'input', 
    message: 'Provide information on how to use and navigate this project:',
  },
  {
    name: 'contribution',
    type: 'input', 
    message: 'How can one contribute to this project?',
  },
  {
    name: 'test',
    type: 'input', 
    message: 'Provide information on the tests for this project:',
  },
  {
    name: 'license',
    type: 'list', 
    message: 'What kind of license are you using for this project?',
    choices: [
      'MIT License',
      'General Public License Version 3.0 (GPL v3)',
      'Apache License 2.0',
      'None',
    ]
  },
  {
    name: 'github',
    type: 'input', 
    message: 'What is your GitHub username?',
  },
  {
    name: 'email',
    type: 'input', 
    message: 'What is your email address?',
  }
];

// write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generate.generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log(`README generated @ ${fileName}!`)
  );
}

// initialize app by starting prompts then writing file named README-generated.md
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('README-generated.md', data);
    });
}

// initialize
init();
