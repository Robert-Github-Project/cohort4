



const functions = {
          ifNan: (inputAccountName,inputAccountBalance) => {
            if (isNaN(inputAccountBalance) === false) {
                return  "Account "+ inputAccountName + " has been created with $" + inputAccountBalance;
      } else  return inputAccountBalance +" is an invalid entry!!!!  Please input a number";
  },

          addOption:(parent,accountName) => {
            const option = document.createElement("option");
            option.textContent=accountName ;
            parent.appendChild(option);
  },
}

export default functions;