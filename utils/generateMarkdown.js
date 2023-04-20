function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
}

function renderLicenseLink(license) {
  if (license === "none") {
    return ""
  }
  if (license === "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  return `https://opensource.org/licenses/${license}`
}

function renderTableOfContents(questions) {
  return questions.slice(1).map((question) => {
    return `- [${question[0]}](#${question[0]})\n`
  }).join("")
}

function renderSections(questions) {
  return questions.map((question) => {
    if (question[0] === "license") {
      return `
### ${question[0]}
${question[1]}: ${renderLicenseLink(question[1])}\n`
    }

    if (question[0] === "usage") {
      // return the steps in a list
    }

    return `
### ${question[0]}
${question[1]}\n`
  }).join("")
}

function generateMarkdown(data) {
  // {
  //   title: 'test',
  //   description: 'test',
  //   installation: 'test',
  //   license: 'none',
  // }
  const questions = Object.entries(data)
  // [ ['title', 'test'], ['description', 'test'], ['installation', 'test'], ['license', 'none'] ]

  const tableOfContents = renderTableOfContents(questions)

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
${tableOfContents}

${renderSections(questions)}

`;
}

module.exports = generateMarkdown;
