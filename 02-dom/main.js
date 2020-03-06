import functions from './script.js';



// idDivClass.addEventListener('click', ((element) =>   {
//     console.log(element)
//     }));

// idShow.addEventListener('click', (() =>   {
//     console.log(document.getElementById("idDivClass").children);
//     document.getElementById("idMessage").innerHTML = document.getElementById("idDivClass").children;
//     }));

idShow.addEventListener('click', (() =>   {
    console.log(document.getElementById("idDivClass").children);
    document.getElementById("idMessage").innerHTML = functions.childLoop(document.getElementById("idOl").children);
    }));
    
idAdd.addEventListener('click', (() =>   {
    console.log("add");
    functions.addList(idOl)
     }));

idDeleteFirst.addEventListener('click', (() =>   {
    console.log("delete");
    functions.deleteFirst()
    }));    
    
idDeleteLast.addEventListener('click', (() =>   {
    console.log("delete");
    functions.deleteLast()
    }));  