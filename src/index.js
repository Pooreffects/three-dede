'use strict';
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'text',
      name: 'Fav baller',
      message: 'Who is your fav football player?',
      default: 'Me 🙄',
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.message);
    }
  });
