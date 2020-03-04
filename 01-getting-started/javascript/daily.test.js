import functions from './daily.js' 

test('Check the temp', () => {
    expect(functions.convertToFarhenhiet(-40)).toBe(-40);
    expect(functions.convertToFarhenhiet(0)).toBe(32); 
    expect(functions.convertToFarhenhiet(100)).toBe(212);   
});