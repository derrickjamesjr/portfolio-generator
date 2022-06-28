const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(nme, github);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
  
  // fs.writeFile('index.html', generatePage(nme, github), err => {
//   if (err) throw err;

//   console.log("Portfolio is complete! Check out index.html to see the output!");
// });
console.log(inquirer);