/* 
define attributes / variables
number
string
boolean
array
dictionary / objects
undefined
sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value
*/
/*define attributes / variables
number
string
boolean
array
dictionary / objects
undefined
sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value */

const functions = {
    
    isThisNumber: (input) => {
        if (typeof input === "number") return true;
        return false
    },

    isThisString: (input) => {
        if (typeof input === "string") return true;
        return false
    },
    booleanToString: (input) => {
        if ( input === true) return 'true';
        return 'false'
    }, 
    arrayReturn2nd: (input) => {
        return input[1]
    }, 
    dictReturn2nd: (input) => {
        input["hair"]="red";
        return input
    }, 
    isUndefined: (input) => {
        if (typeof input === "undefined") return "Undefined";
        return "Defined";
    },
    ifElseMakeDoublePositive: (input) => {
        if (input > 0) return 2*input;
        return -2*input;
    },  
    funFunction: (input1, input2) => {
        return input1+"fun"+input2+"fun"
    }, 

    notFunFunction: (input) => {
        return input+"NotFun"
    }, 
};
export default functions;