const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const makeEmployee = ({
  name,
  id,
  email,
  officeNumber,
  github,
  school,
  employeeType,
}) => {
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

module.exports = makeEmployee;