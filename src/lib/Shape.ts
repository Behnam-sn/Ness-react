/**
 * Example of OOP concepts: inheritance, encapsulation, and polymorphism
 */

export abstract class Shape {
  protected color: string;

  constructor(color: string = 'white') {
    this.color = color;
  }

  abstract calculateArea(): number;

  abstract calculatePerimeter(): number;

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number, color: string = 'white') {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  setDimensions(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }
}

export class Circle extends Shape {
  private radius: number;

  constructor(radius: number, color: string = 'white') {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }
}

export class ShapeManager {
  private shapes: Shape[] = [];

  addShape(shape: Shape): void {
    this.shapes.push(shape);
  }

  removeShape(index: number): void {
    if (index >= 0 && index < this.shapes.length) {
      this.shapes.splice(index, 1);
    }
  }

  getAllShapes(): Shape[] {
    return [...this.shapes]; // Return a copy to prevent external modification
  }

  getTotalArea(): number {
    return this.shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
  }

  getLargestShapeByArea(): Shape | null {
    if (this.shapes.length === 0) {
      return null;
    }

    return this.shapes.reduce((largest, current) => 
      current.calculateArea() > largest.calculateArea() ? current : largest
    );
  }
}