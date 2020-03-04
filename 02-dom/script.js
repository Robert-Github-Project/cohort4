const functions = {
    
    something: (num1) => {
        
        return 4;
    },


    childLoop: (parent) => {
        var txt = "";
        var i;
        for (i = 0; i < parent.length; i++) {
          txt = txt + parent[i].textContent + "<br>";
        }
      return txt
      }
}



export default functions;