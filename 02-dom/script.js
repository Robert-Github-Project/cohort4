const functions = {
    
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
      // console.log("working");
      idOl.children[idOl.children.length-1].remove(); 
      },

    deleteFirst: () => {
      // console.log("working");
      idOl.children[0].remove(); 
      },
// ----------Card Section-------------------
    
    createCard: (text) => {
      const div = document.createElement('div');
      div.appendChild(document.createTextNode(text));
      
      const br = document.createElement('br');
      div.appendChild(br);


      const add = document.createElement('button');
      add.appendChild(document.createTextNode("Add Before"));
      div.appendChild(add);

      const before = document.createElement('button');
      before.appendChild(document.createTextNode("Add After"));
      div.appendChild(before);

      div.classList.add('card');
     // console.log(div);
      return div;
        },

    addBefore: (node, text) => {
      const div = functions.createCard(text);
      node.parentElement.insertBefore(div,node)
      
      },

    addAfter: (node, text) => {
      const div = functions.createCard(text);
      node.parentElement.insertBefore(div,node.nextSibling)
      }
}

export default functions;