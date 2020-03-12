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

// ---------------------Card section-----------------
let cardCounter=4
// idAddBefore1.addEventListener('click', (() =>   {
//     console.log("Add Before");

    
//     }));
// idAddAfter1.addEventListener('click', (() =>   {
//     console.log("Add after");
//     }));
// idDelete1.addEventListener('click', (() =>   {
//     console.log("Delete");
//     }));

// addEventListener('click', ((e) =>   {
//     console.log(e.target.id);
//     let newDiv = functions.createCard("hi ");
//     let container = document.getElementById("idContainer");
//     console.log(container);
//     container.appendChild(newDiv);
// }));

addEventListener('click', ((e) =>   {
console.log("click",e.target.parentElement.textContent)

    switch(e.target.textContent) {
        case "Add Before":
            console.log("add before");
                //let newDiv = functions.createCard("Card "+cardCounter);
                // let container = document.getElementById("idContainer");
                // container.appendChild(newDiv);
                functions.addBefore(e.target.parentElement, "Card " + cardCounter) 
                cardCounter++
            break;
        case "Add After":
            console.log("add after");
            //    let newDiv2 = functions.createCard("Card "+cardCounter);
            //    let container2 = document.getElementById("idContainer");
            //    container2.appendChild(newDiv2);
                functions.addAfter(e.target.parentElement, "Card " + cardCounter); 
                cardCounter++
            break;
        case "Delete":
            console.log("Delete");
    }


    // console.log(e.target.id);
    // let newDiv = functions.createCard("hi ");
    // let container = document.getElementById("idContainer");
    // console.log(container);
    // container.appendChild(newDiv);
}));