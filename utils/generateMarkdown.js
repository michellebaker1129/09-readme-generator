// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO make more badges
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents
- [description](#description)
- //each question goes here, add to bottom description below


### Description
${data.description}
`;
}

module.exports = generateMarkdown;
