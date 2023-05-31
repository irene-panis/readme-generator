// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) { return ""; }
  return `## License\n
This project is licensed under the ${license}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
${renderLicenseBadge(data.license)}\n
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

module.exports = {
  generateMarkdown,
}
