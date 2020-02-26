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
    addToFrontArray: (input) => {
        input.unshift(10)
        return input
    }, 
    addToEndArray: (input) => {
        input.push(10)
        return input
    },
    changeLastTo7: (input) => {
        input.pop()
        input.push(7)
        return input
    },
    forLoop: (input) => {
        let a = 0;
        for (let i = 0; i < input.length; i++) {
            a = a + input[i];
        
          }
        return a
    },
    forInLoop: (input) => {
        let x;
        for (x in input){
            x = input[x] +"!"
            return x
        }   
    },
    whileLoop: (input) => {
        let i=0;
        let a=0;
        while (i < input){
           a+=i;
           i++;
        }   
        return a;
    },
    doWhileLoop: (input) => {
        let i=0;
        let a=0;
       do {
        a+=i;
        i++;
        }
        while (i < input)  
        return a;
    },
    forEachLoop: (input) => {
        let a = [];
        input.forEach(myFunction);
        function myFunction(item) {
            a.push(item+2)
        }
        return a
    },
    declareObjectAge: (input) => {

      return {age:input}
    },
    lookUp: (input) => {
        let a={age:37,hair:"red"}
        return a[input]
      },
};

export default functions;