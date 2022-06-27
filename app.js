// // console.log(profileDataArgs);
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [nme, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem => console.log(profileItem)));
//   };

// printProfileData(profileDataArgs);



fs.writeFile('index.html', generatePage(nme, github), err => {
  if (err) throw err;

  console.log("Portfolio is complete! Check out index.html to see the output!");
});