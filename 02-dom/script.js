const functions = {
    
    something: (num1) => {
        
        return 4;
    },


    childLoop: (parent) => {
        let txt = "";
        let i;
        for (i = 0; i < parent.length; i++) {
          txt = txt + parent[i].textContent + "<br>";
        }
      return txt
      },
    addList: (parent) => {
      const li = document.createElement("li");
      li.textContent="New item" ;
      parent.appendChild(li); 
      },

    deleteLast: () => {
      console.log("working");
      idOl.children[idOl.children.length-1].remove(); 
      },

    deleteFirst: () => {
      console.log("working");
      idOl.children[0].remove(); 
      }
                
      
}



export default functions;