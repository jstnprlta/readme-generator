const inquirer = require('inquirer')
const fs = require('fs')


inquirer
  // list of questions 
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe how to install project.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How this project should be used?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license type.',
      choices: ['MIT', 'APACHE_2.0', 'GPL_3.0',]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contributed to the project?'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'testing was completed for this project?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Personal/proefessional email?'
    }
 
  ])
  .then(res => {

    fs.writeFile('sampleREADME.md', `# ${res.title}
  ![badge](https://img.shields.io/badge/license-${res.license}-blue.svg)
  
  -------
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description:
  
  ${res.description}
  
  ## Installation:
  
  ${res.installation}
  
  ## Usage:
  
  ${res.usage}
  
  ## Contributing:
  
  ${res.contributing}
  
  ## Testing:
  
  ${res.testing}
  
  ## License:
  
  ${res.license}
  
  ## Questions:
  
  Github Username: [${res.github}](https://github.com/${res.github})
  
  Contact me via email at: [${res.email}](mailto:${res.email})
  `, (err) => {
      if (err) { console.log(err) }
      console.log('File Created!')
    })


  })
  .catch(err => console.log(err))

