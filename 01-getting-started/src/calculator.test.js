import calcFunctions from './calculator'

test('Check the add', () => {
    expect(calcFunctions.add(2,2)).toBe(4); 
    expect(calcFunctions.add(17,5)).toBe(22); 
});
test('Check the subtract', () => {
    expect(calcFunctions.subtract(5,2)).toBe(3); 
    expect(calcFunctions.subtract(13,3)).toBe(10); 
});
test('Check the Multiply', () => {
    expect(calcFunctions.multiply(5,2)).toBe(10); 
    expect(calcFunctions.multiply(13,3)).toBe(39); 
});
test('Check the Multiply', () => {
    expect(calcFunctions.divide(6,2)).toBe(3); 
});
