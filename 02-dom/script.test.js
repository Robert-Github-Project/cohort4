import functions from './script.js'

test('Check the add', () => {
    expect(functions.something(2)).toBe(4); 
 
});

test('Check the add', () => {
    expect(functions.childLoop([1,2,3])).toBe("undefined<br>undefined<br>undefined<br>"); 
 
});