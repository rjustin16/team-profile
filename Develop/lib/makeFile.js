const path = require("path");
const render = require("./htmlRenderer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const makeFile = (arr) => {
  const htmlTemplate = render(arr);
  fs.writeFile(outputPath, htmlTemplate, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
};

module.exports = makeFile;