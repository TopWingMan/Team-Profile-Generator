const inquirer = require("inquirer");
const fs = require('fs');

const managerQuestions =
[
    {
        type:"input",
        message:"What is your team managers name?",
        name:"managerName"
    },
    {
        type:"input",
        message:"What is your team managers employee ID?",
        name:"managerID"
    },
    {
        type:"input",
        message:"What is your team managers email address?",
        name:"managerEmail"
    },
    {
        type:"input",
        message:"What is your team managers office number?",
        name:"managerOfficeNumber"
    }
]

const engineerQuestions =
[
    {
        type:"input",
        message:"What is your engineers name?",
        name:"engineerName"
    },
    {
        type:"input",
        message:"What is your engineers employee ID?",
        name:"engineerID"
    },
    {
        type:"input",
        message:"What is your engineers email address?",
        name:"engineerEmail"
    },
    {
        type:"input",
        message:"What is your engineers Github username?",
        name:"engineerGithub"
    }
]

const internQuestions =
[
    {
        type:"input",
        message:"What is your interns name?",
        name:"internName"
    },
    {
        type:"input",
        message:"What is your interns employee ID?",
        name:"internID"
    },
    {
        type:"input",
        message:"What is your interns email address?",
        name:"internEmail"
    },
    {
        type:"input",
        message:"What school does your intern go to?",
        name:"internGithub"
    }
]