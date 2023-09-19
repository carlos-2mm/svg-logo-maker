const { Triangle, Circle, Square } = require('../lib/shapes');

test('Triangle SVG', () => {
  const triangle = new Triangle('red');
  expect(triangle.render()).toContain('polygon');
  expect(triangle.render()).toContain('fill="red"');
});

test('Circle SVG', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toContain('circle');
  expect(circle.render()).toContain('fill="blue"');
});

test('Square SVG', () => {
  const square = new Square('green');
  expect(square.render()).toContain('rect');
  expect(square.render()).toContain('fill="green"');
});