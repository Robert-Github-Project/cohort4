import functions from './syntax'

test('Is this a number?', () => {
    expect(functions.isThisNumber(1)).toBe(true);
    expect(functions.isThisNumber('a')).toBe(false);
});

test('Is this a string?', () => {
    expect(functions.isThisString(1)).toBe(false);
    expect(functions.isThisString('abc')).toBe(true);
});

test('Boolean ', () => {
    expect(functions.booleanToString(true)).toBe('true');
    expect(functions.booleanToString(false)).toBe('false');
});

test('array ', () => {
    expect(functions.arrayReturn2nd([2,4])).toBe(4);
    expect(functions.arrayReturn2nd([3,7,5,6])).toBe(7);
});

test('object dictionary ', () => {
    expect(functions.dictReturn2nd({age:12, name: "Bob"})).toStrictEqual({age:12, name: "Bob",hair:"red"});
    expect(functions.dictReturn2nd({age:13, name: "Emilie"})).toStrictEqual({age:13, name: "Emilie",hair:"red"});

});

test('isUndefined ', () => {
    expect(functions.isUndefined([][0])).toBe("Undefined");
    expect(functions.isUndefined(12)).toBe("Defined");
});
test('ifElseMakeDoublePositive ', () => {
    expect(functions.ifElseMakeDoublePositive(14)).toBe(28);
    expect(functions.ifElseMakeDoublePositive(-13)).toBe(26);
});
test('funFunction ', () => {
    expect(functions.funFunction("Hi",2)).toBe("Hifun2fun");
    expect(functions.funFunction("Me",7)).toBe("Mefun7fun");
});
test('notFunFunction ', () => {
    expect(functions.notFunFunction("John")).toBe("JohnNotFun");
    expect(functions.notFunFunction("Sally")).toBe("SallyNotFun");
});
