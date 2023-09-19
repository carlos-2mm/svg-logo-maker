// Base class representing a generic shape with a specified color
class Shape {
    constructor(color) {
      // Color property common to all shapes
      this.color = color;
    }
  }
  
  // Class representing a triangle, inherits from the base Shape class
  class Triangle extends Shape {
    // Method to render the SVG representation of the triangle
    render() {
      // Polygon SVG element for triangle using three points for vertices
      // Base spans from (0,200) to (300,200) with the peak at (150,0)
      return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
  }
  
  // Class representing a circle, inherits from the base Shape class
  class Circle extends Shape {
    // Method to render the SVG representation of the circle
    render() {
      // Circle SVG element centered at (150,100) with a radius of 100 units
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
  // Class representing a square, inherits from the base Shape class
  class Square extends Shape {
    // Method to render the SVG representation of the square
    render() {
      // Rectangular SVG element starting at (50,50) with width and height of 200 units
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  // Export the shape classes to be used in other modules
  module.exports = { Triangle, Circle, Square };