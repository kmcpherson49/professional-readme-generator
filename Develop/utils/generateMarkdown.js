// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)

//function renderLicenseBadge(data.license) {
  // if (data.license[0]) {
  //   return [![License: MIT]('https://img.shields.io/badge/License-MIT-yellow.svg')]('https://opensource.org/licenses/MIT');
  // } 
  // if (data.license[1]) {
  //   return [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0);
  // }
  // if (data.license[2]) {
  //   return [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)
  // }
//}; 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description-
  ${data.description}

  ## Table of Contents-
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation   
  Use these instructions to help with installation:
  ${data.installation}

  ## Usage   
  Examples for use:
  ${data.usage}

  ## License
  This project use this license:
  ${data.license}

  ## Contributing   
  List any collaborating Github users:
  ${data.contributing}

  ## Tests  
  Examples of tests used to build this app:
  ${data.tests}

  ## Questions   
  If you have any questions contact me by my username or email:   
  Username-
  ${data.username}   
  Email-
  ${data.email}

`;
}

module.exports = generateMarkdown;
