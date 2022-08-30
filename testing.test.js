import { stringLength, reverseString } from './testing.js';

test('Gustavo length is equal to 7', () => {
  expect(stringLength('gustavo')).toBe(7);
});
test('should no empty strings', () => {
    expect(stringLength('')).toBe('Imposible to evaluate length')
});
test('should no too long', () => {
    expect(stringLength('otorrinolaringologo')).toBe('To long to evaluate for this test')
});
test('should have the reversed string', () => {
    expect(reverseString('gustavo')).toBe('ovatsug')
});
