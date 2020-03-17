import functions from './functions.js';
import calcFunctions from './calculator.js';
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
//---------------------Calculator-----------------------------
idAdd.addEventListener('click', (() => {
    console.log("click add function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = calcFunctions.add(input1,input2);
 }));
 idSubtract.addEventListener('click', (() => {
    console.log("click Subtract function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = calcFunctions.subtract(input1,input2)
 }));
 idMultiply.addEventListener('click', (() => {
    console.log("click Multiply function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = calcFunctions.multiply(input1,input2)
 }));
 idDivide.addEventListener('click', (() =>  {
    console.log("click Divide function")
     let output = document.getElementById("output");
 
     
     var input1 = Number(document.getElementById("input1").value)
     var input2 = Number(document.getElementById("input2").value)
 
     output.innerHTML = calcFunctions.divide(input1,input2)
 }));
 //---------------------Canadian Taxes------------------------------
 
 idCanTax.addEventListener('click', (() =>   {
    console.log("click Tax")
    let outputTax = document.getElementById("outputTax");
    let outputRevenue = document.getElementById("outputRevenue");
    var inputTax = Number(document.getElementById("inputIncome").value)

    outputTax.innerHTML = calcFunctions.canTax(inputTax).toFixed(2);
    outputRevenue.innerHTML = inputTax-calcFunctions.canTax(inputTax);
 }));
 //---------------------Arrays------------------------------
 let array=[]
 idArrayAdd.addEventListener('click', (() =>  {
    var inputArr = (document.getElementById("inputArray").value);
    console.log("add " +inputArr);
    console.log( typeof inputArr);
    let message = document.getElementById("message");
    message.innerHTML = calcFunctions.ifNan(inputArr,array);
   
 }));
 idArrayShow.addEventListener('click', (() =>   {
    let message = document.getElementById("message");
    message.innerHTML = array
 }));
 idArrayTotal.addEventListener('click', (() =>   {
   console.log(calcFunctions.totalArray(array))
   message.innerHTML = calcFunctions.totalArray(array)
 }));
 idArrayClear.addEventListener('click', (() =>   {
   console.log("clear click");
   array=[];
   message.innerHTML = "Array has been cleared"
 }));
  //---------------------Dictionaries------------------------------

idDict.addEventListener('click', (() =>  {
    let inputDict = document.getElementById("inputDict").value;
    let dict = document.getElementById("dictionary");
    dict.innerHTML = calcFunctions.returnProvince(inputDict)
 }));