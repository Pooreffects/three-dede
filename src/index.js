'use strict';
// const { writeFileSync } = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { exec } = require('child_process');

const dirname = path.basename(process.cwd());

const framework = [
  'Vanilla Three.js',
  'React-three-fiber',
  'Next.js + React-three-fiber',
];

// Function to execute an NPM command

function executeCommand() {
  exec(
    `npm install three @react-three/fiber ${dirname}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    }
  );
}

// Inquirer API to handle CLI questions/responses

inquirer
  .prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the name of your project?',
      default: dirname,
    },
    {
      type: 'list',
      name: 'framework',
      message: 'What type of project?',
      choices: framework,
    },
  ])
  .then((answers) => {
      console.log(answers);
//     if (answers.framework === 'React-three-fiber') {
//       executeCommand();
//     }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.message);
    }
  });

// fs.writeFileSync(packageJson, JSON.stringify(answers, null, 2), 'utf8');

