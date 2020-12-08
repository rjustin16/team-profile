const questions = [
    {
      name: "employeeType",
      message: "Select type of employee: ",
      type: "list",
      choices: ["Engineer", "Intern"],
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
      name: "another",
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
  
  module.exports = { questions, managerQs };
  