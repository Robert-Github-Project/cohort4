const calcFunctions = {
    
    add: (num1,num2) => {
        return num1+num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    
};
function clickAdd() {
   console.log("click add function")
    let output = document.getElementById("output");

    
    var input1 = Number(document.getElementById("input1").value)
    var input2 = Number(document.getElementById("input2").value)

    output.innerHTML = input1+input2
}
function clickSubtract() {
    console.log("click Subtract function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = input1-input2
 }
 function clickMultiply() {
    console.log("click Multiply function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = input1*input2
 }
 function clickDivide() {
    console.log("click Divide function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = input1/input2
 }
 
//export default calcFunctions;