const inquirer = require ("inquirer")
const prompt = inquirer.createPromptModule()
const generateMarkdown = require("./utils/generateMarkdown")
const {writeFile} = require("fs/promises")
const path = require("path")

const questions = [
    {
        type: "input", name: "Title", message: "enter your project title"
    }, {
        type: "input", name: "Description", message: "enter your project description", default: "AS a USER, "
    }, {
        type: "input", name: "Installation", message: "enter installation instructions", default: "clone the repository and run npm i"
    }, {
        type: "input", name: "Usage", message: "provide instructions and examples for use", default: "click the link and the fun begins"
    }, {
        type: "input", name: "Credits", message: "list your collaborators", default: "UC Berkeley Coding Bootcamp, (https://bootcamp.berkeley.edu/coding/)"
    }, {
        type: "list", name: "License", message: "select license from list", choices: ["MIT", "GPL", "Apache 2.0", "none"]
    }, {
        type: "badges", name: "Badges", message: "demonstrate your street cred", default: "(https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)"
    },
];

function writeToFile(fileName, data) {
    writeFile(path.join(__dirname, "/examples/", fileName), data)
}

function init() {
 prompt(questions).then(answers => writeToFile("README.md", generateMarkdown(answers)))
}

init();
