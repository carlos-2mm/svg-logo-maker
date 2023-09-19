// Packages needed for this application
const inquirer = require("inquirer"); // For prompting questions and collecting user input
const fs = require("fs"); // For filesystem operations
const { Triangle, Circle, Square } = require("./lib/shapes"); // Importing shape classes from the shapes module

// Function to collect user input
function collectInput() {
  // Array of questions for user to answer
  const questions = [
    {
      type: "input",
      name: "text",
      message: "Please enter the text (up to three characters):",
      // Validation for the input, ensuring it is up to three characters only
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
      choices: ["circle", "triangle", "square"], // Possible shape choices
    },
    {
      type: "input",
      name: "shapeColor",
      message: 'Please enter the shape color (e.g., "red" or "#FF5733"):',
    },
  ];

  // Use inquirer to prompt the questions and return the user's answers
  return inquirer.prompt(questions);
}
// Function to generate an SVG logo based on the provided input
function generateLogo(input) {
  let shape; // To store the chosen shape object

  // Determine which shape was selected and create the corresponding object
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

  // Generate the SVG content with the selected shape and provided text
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="110" font-family="Arial" font-size="48" text-anchor="middle" fill="${
        input.textColor
      }">${input.text}</text>
    </svg>
  `;

  // Write the SVG content to a file named "logo.svg"
  fs.writeFileSync("logo.svg", svgContent);
  // Notify the user that the logo has been generated
  console.log("Generated logo.svg");
}

// Collect user input and then generate the logo based on that input
collectInput().then(generateLogo);
