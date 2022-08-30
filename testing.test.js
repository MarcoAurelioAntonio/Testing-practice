const lettersAmount = require('./testing');
/* import { stringLength } from './testing.js'; */

test('Gustavo length is equal to 7', () => {
  expect(lettersAmount('gustavo')).toBe(7);
});
test('should no empty strings', () => {
    expect(lettersAmount('')).toBe('Imposible to evaluate length')
});
test('should no too long', () => {
    expect(lettersAmount('otorrinolaringologo')).toBe('To long to evaluate for this test')
});
