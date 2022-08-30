import {operation} from './calculator.js';

describe('Test calculator add feature', () => {
  test('4+2 should return 6', () => {
    expect(operation.add(4, 2)).toBe(6)
  });
  test('4+(-2) should return 2', () => {
    expect(operation.add(4, -2)).toBe(2)
  });
  test('(-4)+2 should return -2', () => {
    expect(operation.add(-4, 2)).toBe(-2)
  });
  test('(-4)+(-2) should return -6', () => {
    expect(operation.add(-4, -2)).toBe(-6)
  });
});
describe('Test calculator substract feature', () => {
    test('4-2 should return 2', () => {
      expect(operation.substract(4, 2)).toBe(2);
    });
    test('4-(-2) should return 6', () => {
      expect(operation.substract(4, -2)).toBe(6);
    });
    test('(-4)-2 should return -6', () => {
      expect(operation.substract(-4, 2)).toBe(-6);
    });
    test('(-4)-(-2) should return -2', () => {
      expect(operation.substract(-4, -2)).toBe(-2);
    });
  });
  
  describe('Test calculator divide feature', () => {
    test('4/2 should return 2', () => {
      expect(operation.divide(4, 2)).toBe(2);
    });
    test('4/(-2) should return -2', () => {
      expect(operation.divide(4, -2)).toBe(-2);
    });
    test('(-4)/2 should return -2', () => {
      expect(operation.divide(-4, 2)).toBe(-2);
    });
    test('4/0 should throw an error', () => {
      expect(operation.divide(-4, 0)).toBe('Error: "b" cant be zero');
    });
  });
  
  describe('Test calculator multiply feature', () => {
    test('4*2 should return 8', () => {
      expect(operation.multiply(4, 2)).toBe(8);
    });
    test('4*(-2) should return -8', () => {
      expect(operation.multiply(4, -2)).toBe(-8);
    });
    test('(-4)*2 should return -8', () => {
      expect(operation.multiply(-4, 2)).toBe(-8);
    });
    test('4*0 should return 0', () => {
      expect(operation.multiply(4, 0)).toBe(0);
    });
  });