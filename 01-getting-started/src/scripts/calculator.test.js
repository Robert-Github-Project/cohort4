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
test('Check the Taxes', () => {
    expect(calcFunctions.canTax(10000)).toBe(1500); 
    expect(calcFunctions.canTax(20000)).toBe(3000);
    expect(calcFunctions.canTax(50000)).toBe(7580.575);
    expect(calcFunctions.canTax(60000)).toBe(9993.355); 
    expect(calcFunctions.canTax(100000)).toBe(21476.51);
    expect(calcFunctions.canTax(3000000)).toBe(973901.79); 
});
test('Check the Total Array', () => {
    expect(calcFunctions.totalArray([6,2])).toBe(8); 
    expect(calcFunctions.totalArray([6,2,4,7])).toBe(19); 
});
test('Check the return Province', () => {
    expect(calcFunctions.returnProvince("ab")).toBe("Alberta"); 
    expect(calcFunctions.returnProvince("qc")).toBe("Quebec"); 
});
test('Check the if NaN', () => {

    expect(calcFunctions.ifNan(2,[])).toBe("2 has been added to the array :)"); 
    expect(calcFunctions.ifNan("a",[])).toBe("a is not a number :("); 
});