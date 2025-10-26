const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Functions', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
