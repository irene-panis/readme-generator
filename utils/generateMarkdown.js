// returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
  // store license link using renderLicenseLink function
  const licenseLink = renderLicenseLink(license);
  // switch case to deal with which license is chosen
  // default case aka no license = empty string
  switch(license) {
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLink})`;
    case "GPL v3 (General Public License Version 3.0)":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](${licenseLink})`;
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${licenseLink})`;
    default:
      return "";
  }
}

// returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
  // switch case to determine which link to return
  switch(license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "General Public License Version 3.0 (GPL v3)":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    default:
      return "";
  }
}

// returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") { return ""; }
  // if license !== none return rendered license section
  return `## License\n
This project is licensed under the [${license}](${renderLicenseLink(license)}).`;
}

// generate markdown for README
function generateMarkdown(data) {
  // return string of markdown content using array of questions from index
  // use license functions instead of manually writing out titles
  return `# ${data.title}\n
${renderLicenseBadge(data.license)}\n
## Table of Contents\n
${generateTable(data)}\n
## Description\n
${data.description}\n
## Installation instructions\n
${data.installation}\n
## Usage\n
${data.usage}\n
## Contribution guidelines\n
${data.contribution}\n
## Test instructions\n
${data.test}\n
${renderLicenseSection(data.license)}\n
## Questions\n
For inquiries on this project, please contact me through GitHub @ [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.`;
}

// function to help generate table of contents
function generateTable(data) {
  // if license = none return table without license section present
  if (data.license === "None") {
    return `> 1. [Description](#description)
> 2. [Installation instructions](#installation-instructions)
> 3. [Usage](#usage)
> 4. [Contribution guidelines](#contribution-guidelines)
> 5. [Test instructions](#test-instructions)
> 6. [Questions](#questions)`
  } else { // else return table with license section present
    return `> 1. [Description](#description)
> 2. [Installation instructions](#installation-instructions)
> 3. [Usage](#usage)
> 4. [Contribution guidelines](#contribution-guidelines)
> 5. [Test instructions](#test-instructions)
> 6. [License](#license)
> 7. [Questions](#questions)`
  }
}

// export
module.exports = {
  generateMarkdown,
}
