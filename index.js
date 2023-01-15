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

inquirer
    .prompt(managerQuestions)
    .then((data) =>
    {
        writeToFile();
    })

function writeToFile()
{
    fs.writeFile
        ('new.html',
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="./style.css">
            </head>
            <body>
                <div style="background-color: rgb(252, 102, 102); padding: 2%;">
                    <h1 style="text-align: center; color: white;">My Team</h1>
                </div>
            
                <div id="CardHolder">
            
                    <div style="padding: 10px;">
                        <div class="Card">
                            <div class="CardTop">
                                <p class="CardText">Jared <br> $ Title</p>
                            </div>
                    
                            <div class="CardBottom">
                                <p class="BottomText">ID: 1</p>
                                <p class="BottomText">Email: ford@gmail.com</p>
                                <p class="BottomText">Office number: 1</p>
                            </div>
                        </div>
                    </div>
            
                </div>
            
                </body>
            </body>
            </html>`

            , function (err) 
            {
                if (err) throw err;
                console.log('CreatedFile!');
            }
        );
}