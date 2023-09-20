const { Triangle, Circle, Square } = require('../lib/shapes');

test('It should generae a red Triangle SVG', () => {
  const triangle = new Triangle('red');
  expect(triangle.render()).toContain('polygon');
  expect(triangle.render()).toContain('fill="red"');
});

test('It should generate a blue Circle SVG', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toContain('circle');
  expect(circle.render()).toContain('fill="blue"');
});

test('It should generate a green Square SVG', () => {
  const square = new Square('green');
  expect(square.render()).toContain('rect');
  expect(square.render()).toContain('fill="green"');
});