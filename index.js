// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// Array of questions for user input
function collectInput() {
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter the text (up to three characters):",
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return "Please enter up to three characters only.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: 'Please enter the text color (e.g., "red" or "#FF5733"):',
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: 'Please enter the shape color (e.g., "red" or "#FF5733"):',
  },
];

return inquirer.prompt(questions);
}

function generateLogo(input) {
  let shape;
  switch (input.shape) {
    case "triangle":
      shape = new Triangle(input.shapeColor);
      break;
    case "circle":
      shape = new Circle(input.shapeColor);
      break;
    case "square":
      shape = new Square(input.shapeColor);
      break;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="110" font-family="Arial" font-size="48" text-anchor="middle" fill="${
        input.textColor
      }">${input.text}</text>
    </svg>
  `;

  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

collectInput().then(generateLogo);