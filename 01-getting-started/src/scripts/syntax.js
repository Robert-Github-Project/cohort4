




const functions = {
 //define attributes / variables
 //number
    isThisNumber: (input) => {
        if (typeof input === "number") return true;
        return false
    },
//string
    isThisString: (input) => {
        if (typeof input === "string") return true;
        return false
    },
//boolean
    booleanToString: (input) => {
        if ( input === true) return 'true';
        return 'false'
    }, 
//array
    arrayReturn2nd: (input) => {
        return input[1]
    }, 
//dictionary / objects
    dictReturn2nd: (input) => {
        input["hair"]="red";
        return input
    }, 
//undefined
    isUndefined: (input) => {
        if (typeof input === "undefined") return "Undefined";
        return "Defined";
    },
//sample if / else
    ifElseMakeDoublePositive: (input) => {
        if (input > 0) return 2*input;
        return -2*input;
    },  
//functions
//parameters
    funFunction: (input1, input2) => {
        return input1+"fun"+input2+"fun"
    }, 
//returns
    notFunFunction: (input) => {
        return input+"NotFun"
    }, 
//arrays 
//add to the front
    addToFrontArray: (input) => {
        input.unshift(10)
        return input
    }, 
//add to the end
    addToEndArray: (input) => {
        input.push(10)
        return input
    },
//update values
    changeLastTo7: (input) => {
        input.pop()
        input.push(7)
        return input
    },
//loops 
//for
    forLoop: (input) => {
        let a = 0;
        for (let i = 0; i < input.length; i++) {
            a = a + input[i];
        
          }
        return a
    },
//for/in
    forInLoop: (input) => {
        let x;
        for (x in input){
            x = input[x] +"!"
            return x
        }   
    },
//while
    whileLoop: (input) => {
        let i=0;
        let a=0;
        while (i < input){
           a+=i;
           i++;
        }   
        return a;
    },
//do while
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
//forEach (with array and function)    
    forEachLoop: (input) => {
        let a = [];
        input.forEach(myFunction);
        function myFunction(item) {
            a.push(item+2)
        }
        return a
    },
//Objects / Dictionaries

//declare object
    declareObjectAge: (input) => {

      return {age:input}
    },
//lookup key to retrieve value
    lookUp: (input) => {
        let a={age:37,hair:"red"}
        return a[input]
      },
};

export default functions;