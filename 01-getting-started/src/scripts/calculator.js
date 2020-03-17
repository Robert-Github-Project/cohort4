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
    ifNan: (inp,nArr) => {
        if (isNaN(inp) === false) {
            nArr.push(Number(inp));
            return inp +" has been added to the array :)";
        } else  return inp + " is not a number :(";
    },
    returnProvince: (num1) => {
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
        return province[num1];
    },
};

export default calcFunctions;