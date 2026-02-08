import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { Calculator, ICalculator } from '../Calculator';

describe('Calculator', () => {
  let calculator: ICalculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    // Cleanup if needed
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      const result = calculator.add(-2, -3);
      expect(result).toBe(-5);
    });

    it('should add positive and negative numbers correctly', () => {
      const result = calculator.add(5, -3);
      expect(result).toBe(2);
    });

    it('should handle zero addition', () => {
      const result = calculator.add(5, 0);
      expect(result).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    it('should subtract negative numbers correctly', () => {
      const result = calculator.subtract(-2, -3);
      expect(result).toBe(1);
    });

    it('should handle zero subtraction', () => {
      const result = calculator.subtract(5, 0);
      expect(result).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      const result = calculator.multiply(3, 4);
      expect(result).toBe(12);
    });

    it('should multiply negative numbers correctly', () => {
      const result = calculator.multiply(-3, 4);
      expect(result).toBe(-12);
    });

    it('should return zero when multiplying by zero', () => {
      const result = calculator.multiply(5, 0);
      expect(result).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      const result = calculator.divide(12, 3);
      expect(result).toBe(4);
    });

    it('should divide negative numbers correctly', () => {
      const result = calculator.divide(-12, 3);
      expect(result).toBe(-4);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });
});