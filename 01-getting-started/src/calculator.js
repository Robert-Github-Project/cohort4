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
    canTax: (num) => {  
        if (num<48535) return num*0.15;
        else if (num<53404) return (num-48535)*.205+7280.25;
        else if (num<63895) return (num-53404)*.26+8278.395;
        else if (num<214368) return (num-63895)*.29+11006.06;
        else return 0.33*(num-214368) + 54643.23;
    },
    totalArray: (arr) => {
        let a = 0;
        for (let i=0; i<arr.length;i++){
            a=a+arr[i];
        }
        return a;
    },
    returnProvince: (num1) => {
        return province[num1];
    },
};
//---------------------Calculator-----------------------------
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
 //---------------------Canadian Taxes------------------------------
 function clickTax() {
    console.log("click Tax")
    let outputTax = document.getElementById("outputTax");
    let outputRevenue = document.getElementById("outputRevenue");
     
    var inputTax = Number(document.getElementById("inputIncome").value)


    outputTax.innerHTML = calcFunctions.canTax(inputTax).toFixed(2);
    outputRevenue.innerHTML = inputTax-calcFunctions.canTax(inputTax);
 }

 //---------------------Arrays------------------------------
let array=[]
 function clickAddArray() {
    var inputArr = Number(document.getElementById("inputArray").value);
    console.log("add " +inputArr);
    console.log( typeof inputArr);
    let message = document.getElementById("message");
    if (isNaN(inputArr) === false) {
        array.push(inputArr)
        message.innerHTML = inputArr +" has been added to the array :)";
    } else  message.innerHTML = document.getElementById("inputArray").value +" is not a number :(";
 }
 function clickShowArray() {
    let message = document.getElementById("message");
    message.innerHTML = array
 }
 function clickTotalArray() {
   console.log(calcFunctions.totalArray(array))
   message.innerHTML = calcFunctions.totalArray(array)
 }
 function clickClearArray() {
   console.log("clear click");
   array=[];
   message.innerHTML = "Array has been cleared"
 }
 //---------------------Dictionaries------------------------------
let province ={
    ab:"Alberta",
    bc:"British Columbia",
    mb:"Manitoba",
    nl:"Newfoundland",
    nb:"New Brunswick",
    nt:"Northwest Territories",
    nu:"Nanavut",
    ns:"Nova Scotia",
    on:"Ontario",
    pe:"Prince Edward Island",
    qc:"Quebec",
    sk:"Saskatchewan",
    yk:"Yukon"
}
 function clickLookupDict() {
    let inputDict = document.getElementById("inputDict").value;
    let dict = document.getElementById("dictionary");
    dict.innerHTML = calcFunctions.returnProvince(inputDict)
 }

//export default calcFunctions;