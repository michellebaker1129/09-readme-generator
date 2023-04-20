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
        type: "input", name: "Installation", message: "enter installation instructions", default: "Clone the repository and run npm i."
    }, {
        type: "input", name: "Usage", message: "provide instructions and examples for use", default: "Click the link and let the fun begin..."
    }, {
        type: "input", name: "Credits", message: "list your collaborators", default: "UC Berkeley Coding Bootcamp, (https://bootcamp.berkeley.edu/coding/)"
    }, {
        type: "list", name: "License", message: "select license from list", choices: ["MIT", "GPL", "Apache 2.0", "none"]
    }, {
        type: "contributing", name: "Contributing", message: "write any guidelines for how to contribute", default: "Please reach out to me if you want to collaborate or contribute. I have so much to learn!"
    }, {    
        type: "tests", name: "Tests", message: "provide a test example", default: "Test this project by clicking the deployed link."
    }, {
        type: "questions", name: "Questions", message: "Ask for questions", default: "Please do reach out with any questions."
    }
];

function writeToFile(fileName, data) {
    writeFile(path.join(__dirname, "/examples/", fileName), data)
}

function init() {
 prompt(questions).then(answers => writeToFile("README.md", generateMarkdown(answers)))
}

init();
