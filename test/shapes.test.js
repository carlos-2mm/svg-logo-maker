// Import necessary shape classes from the shapes library
const { Triangle, Circle, Square } = require('../lib/shapes');

// Test for the Triangle class rendering method
test('It should generae a red Triangle SVG', () => {
  // Create a new instance of Triangle with red color
  const triangle = new Triangle('red');

  // Expect the SVG output to contain a polygon tag for triangles
  expect(triangle.render()).toContain('polygon');

  // Expect the SVG output to have the right fill color
  expect(triangle.render()).toContain('fill="red"');
});

// Test for the Circle class rendering method
test('It should generate a blue Circle SVG', () => {
  // Create a new instance of Circle with blue color
  const circle = new Circle('blue');

  // Expect the SVG output to contain a circle tag for circles
  expect(circle.render()).toContain('circle');

  // Expect the SVG output to have the right fill color
  expect(circle.render()).toContain('fill="blue"');
});

// Test for the Square class rendering method
test('It should generate a green Square SVG', () => {
  // Create a new instance of Square with green color
  const square = new Square('green');

  // Expect the SVG output to contain a rect tag for squares
  expect(square.render()).toContain('rect');

  // Expect the SVG output to have the right fill color
  expect(square.render()).toContain('fill="green"');
});