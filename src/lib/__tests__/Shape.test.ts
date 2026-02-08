import { describe, it, expect, beforeEach } from 'vitest';
import { Rectangle, Circle, ShapeManager, Shape } from '../Shape';

describe('Shape Classes', () => {
  describe('Rectangle', () => {
    let rectangle: Rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(5, 3, 'red');
    });

    it('should calculate area correctly', () => {
      expect(rectangle.calculateArea()).toBe(15);
    });

    it('should calculate perimeter correctly', () => {
      expect(rectangle.calculatePerimeter()).toBe(16);
    });

    it('should return correct dimensions', () => {
      expect(rectangle.getWidth()).toBe(5);
      expect(rectangle.getHeight()).toBe(3);
    });

    it('should update dimensions when set', () => {
      rectangle.setDimensions(10, 8);
      expect(rectangle.getWidth()).toBe(10);
      expect(rectangle.getHeight()).toBe(8);
      expect(rectangle.calculateArea()).toBe(80);
    });

    it('should have correct color initially', () => {
      expect(rectangle.getColor()).toBe('red');
    });

    it('should update color when set', () => {
      rectangle.setColor('blue');
      expect(rectangle.getColor()).toBe('blue');
    });
  });

  describe('Circle', () => {
    let circle: Circle;

    beforeEach(() => {
      circle = new Circle(3, 'blue');
    });

    it('should calculate area correctly', () => {
      expect(circle.calculateArea()).toBeCloseTo(Math.PI * 9, 5);
    });

    it('should calculate perimeter correctly', () => {
      expect(circle.calculatePerimeter()).toBeCloseTo(2 * Math.PI * 3, 5);
    });

    it('should return correct radius', () => {
      expect(circle.getRadius()).toBe(3);
    });

    it('should update radius when set', () => {
      circle.setRadius(5);
      expect(circle.getRadius()).toBe(5);
      expect(circle.calculateArea()).toBeCloseTo(Math.PI * 25, 5);
    });

    it('should have correct color initially', () => {
      expect(circle.getColor()).toBe('blue');
    });

    it('should update color when set', () => {
      circle.setColor('green');
      expect(circle.getColor()).toBe('green');
    });
  });

  describe('ShapeManager', () => {
    let manager: ShapeManager;
    let rectangle: Rectangle;
    let circle: Circle;

    beforeEach(() => {
      manager = new ShapeManager();
      rectangle = new Rectangle(4, 5, 'red');
      circle = new Circle(3, 'blue');
    });

    it('should add shapes correctly', () => {
      manager.addShape(rectangle);
      manager.addShape(circle);
      
      const shapes = manager.getAllShapes();
      expect(shapes).toHaveLength(2);
      expect(shapes[0]).toBeInstanceOf(Rectangle);
      expect(shapes[1]).toBeInstanceOf(Circle);
    });

    it('should remove shapes by index', () => {
      manager.addShape(rectangle);
      manager.addShape(circle);
      
      manager.removeShape(0);
      const shapes = manager.getAllShapes();
      expect(shapes).toHaveLength(1);
      expect(shapes[0]).toBeInstanceOf(Circle);
    });

    it('should calculate total area correctly', () => {
      manager.addShape(new Rectangle(3, 4)); // Area = 12
      manager.addShape(new Circle(2));       // Area ≈ 12.57
      
      const totalArea = manager.getTotalArea();
      expect(totalArea).toBeCloseTo(24.57, 2);
    });

    it('should return null when getting largest shape from empty manager', () => {
      const largest = manager.getLargestShapeByArea();
      expect(largest).toBeNull();
    });

    it('should return the largest shape by area', () => {
      const smallRect = new Rectangle(2, 3); // Area = 6
      const largeRect = new Rectangle(5, 4); // Area = 20
      
      manager.addShape(smallRect);
      manager.addShape(largeRect);
      
      const largest = manager.getLargestShapeByArea();
      expect(largest).toBe(largeRect);
      expect(largest?.calculateArea()).toBe(20);
    });
  });
});