// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  ## License\n
  ${data.license}\n
  ## Questions\n
  ${data.github} and ${data.email}
`;
}

module.exports = generateMarkdown;
