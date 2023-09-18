class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render(text) {
      return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render(text) {
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render(text) {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };