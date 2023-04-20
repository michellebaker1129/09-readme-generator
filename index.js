// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const prompt = inquirer.createPromptModule()
const generateMarkdown = require("./utils/generateMarkdown")
// to not need a callback
const {writeFile} = require("fs/promises")
const path = require("path")

// TODO: Create an array of questions for user input
// ADD MORE Qs
const questions = [
    {
        type: "input", name: "title", message: "enter your project title"
    }, {
        type: "input", name: "description", message: "enter your project description"
    }, {
        type: "input", name: "installation", message: "enter installation instructions", default: "clone the repository and run npm i"
    }, {
        type: "list", name: "license", message: "select license from list", choices: ["MIT", "GPL", "Apache 2.0", "none"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(path.join(__dirname, "/examples/", fileName), data)
}

// TODO: Create a function to initialize app
function init() {
 prompt(questions).then(answers => writeToFile("README.md", generateMarkdown(answers)))
}

// Function call to initialize app
init();
