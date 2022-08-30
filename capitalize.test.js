import { capitalizeFirst } from './capitalize.js';

describe('Test capitalize first letter of a string', () => {
    test('input "gustavo" should return "Gustavo"', () => {
      expect(capitalizeFirst('gustavo')).toBe("Gustavo");
    });
  });