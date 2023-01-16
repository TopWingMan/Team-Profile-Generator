const inquirer = require("inquirer");
const fs = require('fs');
const { Console } = require("console");
const document = "./new.html";

//#region Questions
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

const addEmployesQuestion =
[
    {
        type:"list",
        name:"addEmployee",
        message:"Add another employee to roster?",
        choices: ['Engineer', 'Intern', 'No more']
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
        name:"internSchool"
    }
]
//#endregion

inquirer
    .prompt(managerQuestions)
    .then((data) =>
    {
        writeToFile(data);
        AskAddEmployee();
    })

function writeToFile(data)
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
                                <p class="CardText">${data.managerName} <br> $ Manager</p>
                            </div>
                    
                            <div class="CardBottom">
                                <p class="BottomText">ID: ${data.managerID}</p>
                                <p class="BottomText">Email: ${data.managerEmail}</p>
                                <p class="BottomText">Office number: ${data.managerOfficeNumber}</p>
                            </div>
                        </div>
                    </div>
`

            , function (err) 
            {
                if (err) throw err;
                console.log('CreatedFile!');
            }
        );
}

function AskAddEmployee()
{
    inquirer
    .prompt(addEmployesQuestion)
    .then((data) =>
    {
        if (data.addEmployee === 'Engineer') {AskAddEngineer();}
        else if (data.addEmployee === 'Intern') {AskAddIntern();}
        else 
        {
            fs.appendFile('./new.html',
            `
                    
            
                        </div>
            
                        </body>
                    </body>
                    </html>`
            , 
            function (err) 
            {
                if (err) throw err;
                console.log('AppendedEngineer!');
            });
            console.log("Created file with employees")
        }
    })
}

function AskAddEngineer()
{
    inquirer
    .prompt(engineerQuestions)
    .then((data) =>
    {
        //Append data to a card to html file
        fs.appendFile('./new.html',
        `
        
                        <div style="padding: 10px;">
                            <div class="Card">
                                <div class="CardTop">
                                    <p class="CardText">${data.engineerName} <br> $ Engineer</p>
                                </div>
    
                                <div class="CardBottom">
                                    <p class="BottomText">ID: ${data.engineerID}</p>
                                    <p class="BottomText">Email: ${data.engineerEmail}</p>
                                    <p class="BottomText">Github: ${data.engineerGithub}</p>
                                </div>
                            </div>
                        </div>`, 
         function (err) 
        {
            if (err) throw err;
            console.log('AppendedEngineer!');
        });
        
        AskAddEmployee();
    })
}

function AskAddIntern()
{
    inquirer
    .prompt(internQuestions)
    .then((data) =>
    {
        //Append data to a card to html file
        fs.appendFile('./new.html',
        `
        
                        <div style="padding: 10px;">
                            <div class="Card">
                                <div class="CardTop">
                                    <p class="CardText">${data.internName} <br> $ Intern</p>
                                </div>
    
                                <div class="CardBottom">
                                    <p class="BottomText">ID: ${data.internID}</p>
                                    <p class="BottomText">Email: ${data.internEmail}</p>
                                    <p class="BottomText">School: ${data.internSchool}</p>
                                </div>
                            </div>  
                        </div>`, 
         function (err) 
        {
            if (err) throw err;
            console.log('AppendedIntern!');
        });
        
        AskAddEmployee();
    })
}