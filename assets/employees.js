class Employee
{
    constructor()
    {
        this.name;
        this.id;
        this.email; 
    }

    GetName()
    {
        return this.name;
    }

    GetID()
    {
        return this.id;
    }

    GetEmail()
    {
        return this.email;
    }

    GetRole()
    {
        return this.role;
    }

}

class Manager extends Employee
{
    constructor()
    {
        this.officeNumber;
    }
}

class Engineer extends Employee
{
    constructor()
    {
        this.gitHub;
    }

    GetGitHub()
    {
        return this.gitHub;
    }
}

class Intern extends Employee
{
    constructor()
    {
        this.school;
    }

    GetSchool()
    {
        return this.school;
    }
}

var me = new Engineer()
console.log(me.GetGitHub());