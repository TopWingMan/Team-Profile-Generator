class Employee
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email; 
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
        return 'Employee';
    }

}

class Manager extends Employee
{
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    GetRole()
    {
        return 'Manager';
    }
}

class Engineer extends Employee
{
    constructor(name, id, email, gitHub)
    {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    GetRole()
    {
        return 'Engineer';
    }

    GetGitHub()
    {
        return this.gitHub;
    }
}

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    GetRole()
    {
        return 'Intern';
    }

    GetSchool()
    {
        return this.school;
    }
}