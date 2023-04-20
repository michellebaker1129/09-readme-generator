function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// function renderLicenseLink(license) {
//   if (license === "none") {
//     return ""
//   }
//   if (license === "Apache 2.0") {
//     return `https://opensource.org/licenses/Apache-2.0`
//   }
//   return `https://opensource.org/licenses/${license}`
// }

function renderTableOfContents(questions) {
  return questions
    .slice(1)
    .map((question) => {
      var toLowerCaseQs = question[0].toLowerCase()
      return `- [${question[0]}](#${toLowerCaseQs})\n`;
    })
    .join("");
}

function renderSections(questions) {
  return questions.slice(1).map((question) => {
    return `
### ${question[0]}
${question[1]}\n`;
  })
  .join("")
}

function generateMarkdown(data) {
  // {
  //   title: 'test',
  //   description: 'test',
  //   installation: 'test',
  //   license: 'none',
  // }
  const questions = Object.entries(data);
  // [ ['title', 'test'], ['description', 'test'], ['installation', 'test'], ['license', 'none'] ]

  const tableOfContents = renderTableOfContents(questions);

  return `# ${data.Title}

${renderLicenseBadge(data.License)}

## Table of Contents
${tableOfContents}

${renderSections(questions)}

`;
}

module.exports = generateMarkdown;
