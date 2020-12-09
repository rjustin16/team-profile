
const inquirer = require("inquirer");
const path = require("path");
const render = require("./Develop/lib/htmlRenderer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "./Develop/output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
// const Employee = require("./Develop/lib/Employee");

const newEmployee = 
 
function({
  name, id, email, officeNumber, github, school, employeeType,
}){
  let e;
  if (!employeeType) {
    e = new Manager(name, id, email, officeNumber);
  } else if (employeeType === "Engineer") {
    e = new Engineer(name, id, email, github);
  } else if (employeeType === "Intern") {
    e = new Intern(name, id, email, school);
  }
  return e;
};

const makeFile =  function(arr) {
  const htmlTemplate = render(arr);
  fs.writeFile(outputPath, htmlTemplate, function(err) {
    err ? console.log(err) : console.log("Success!");
  });
};

const questions = [
  {
    name: "employeeType",
    message: "Select type of employee: ",
    type: "list",
    choices: ["Engineer", "Intern", 'EXIT'],
  },
  {
    name: "name",
    message: "Enter the employee's name: ",
  },
  {
    name: "id",
    message: "Enter the employee's id: ",
  },
  {
    name: "email",
    message: "Enter the employee's email: ",
  },
  {
    name: "github",
    message: "Enter the employee's github username:",
    when: (answers) => answers.employeeType === "Engineer",
  },
  {
    name: "school",
    message: "Enter the employee's school name:",
    when: (answers) => answers.employeeType === "Intern",
  },
  {
    name: "again",
    message: "Would you like to continue? ",
    type: "confirm",
  },
];

const managerQs = [
  {
    name: "name",
    message: "Enter the manager's name: ",
  },
  {
    name: "id",
    message: "Enter the manager's id: ",
  },
  {
    name: "email",
    message: "Enter the manager's email: ",
  },
  {
    name: "officeNumber",
    message: "Enter the manager's office number: ",
  },
];

const employees = [];

async function addEmployee()  {
  const employee = await inquirer.prompt(questions);
  employees.push(newEmployee(employee));
  employee.again ? addEmployee() : makeFile(employees);
};

async function init()  {
  const employee = await inquirer.prompt(managerQs);
  employees.push(newEmployee(employee));
  addEmployee();
};

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
