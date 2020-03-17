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
test('Push to Front of array ', () => {
    expect(functions.addToFrontArray([1,2,3])).toStrictEqual([10,1,2,3]);
});
test('Push to End of array ', () => {
    expect(functions.addToEndArray([1,2,3])).toStrictEqual([1,2,3,10]);
});
test('Change last number to 7 ', () => {
    expect(functions.changeLastTo7([1,2,3])).toStrictEqual([1,2,7]);
    expect(functions.changeLastTo7([2,32,34,47])).toStrictEqual([2,32,34,7]);
});
test('For Loop ', () => {
    expect(functions.forLoop([1,2,3])).toStrictEqual(6);
    expect(functions.forLoop([11,22,33])).toStrictEqual(66);
});

test('For In Loop ', () => {
    expect(functions.forInLoop({age:12,hair:"red",name:"Bob"})).toStrictEqual("12!");
    expect(functions.forInLoop({hair:"black",mustache:"Yes",name:"Ed"})).toStrictEqual("black!");
});
test('While Loop ', () => {
    expect(functions.whileLoop(2)).toStrictEqual(1);
    expect(functions.whileLoop(4)).toStrictEqual(6);
});
test('Do While Loop ', () => {
    expect(functions.doWhileLoop(2)).toStrictEqual(1);
    expect(functions.doWhileLoop(4)).toStrictEqual(6);
});
test('For Each Loop ', () => {
    expect(functions.forEachLoop([1,2,3])).toStrictEqual([3,4,5]);
    expect(functions.forEachLoop([6,2,12])).toStrictEqual([8,4,14]);
});
test('Declare Object ', () => {
    expect(functions.declareObjectAge(37)).toStrictEqual({age:37});
    expect(functions.declareObjectAge(37)).toStrictEqual({age:37});
});
test('Lookup Keys ', () => {
    expect(functions.lookUp("age")).toStrictEqual(37);
    expect(functions.lookUp("hair")).toStrictEqual("red");
});