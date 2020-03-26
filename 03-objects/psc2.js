



const functions = {
          ifNan: (inputAccountName,inputAccountBalance) => {
            if (isNaN(inputAccountBalance) === false) {
                return  "Account "+ inputAccountName + " has been created with $" + inputAccountBalance;
      } else  return inputAccountBalance +" is an invalid entry!!!!  Please input a number";
  },
}

export default functions;