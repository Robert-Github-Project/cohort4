import functions from './script.js'


test('Check the childLoop', () => {
    expect(functions.childLoop([1,2,3])).toBe("undefined<br>undefined<br>undefined<br>"); 
 
});

test('Check addList', () => {
    document.body.innerHTML =        
    `<ol class ='olClass' id=idOl>
        <li id="item1">item 1</li>
        <li id="item2">item 2</li>
        <li id="item3">item 3</li>
    </ol>`;
    const ol=document.getElementById("idOl")
    functions.addList(idOl)
 
expect(ol.children.length).toBe(4);
expect(ol.children[1].textContent).toBe("item 2");
expect(ol.children[3].textContent).toBe("New item");
});

test('Check deleteList', () => {
    document.body.innerHTML =        
    `<ol class ='olClass' id=idOl>
        <li id="item1">item 1</li>
        <li id="item2">item 2</li>
        <li id="item3">item 3</li>
    </ol>`;
    const ol=document.getElementById("idOl")
    functions.deleteLast()
// console.log(ol.textContent)
expect(ol.children.length).toBe(2);
expect(ol.children[ol.children.length-1].textContent).toBe("item 2");
});

test('Check deleteFirst', () => {
    document.body.innerHTML =        
    `<ol class ='olClass' id=idOl>
        <li id="item1">item 1</li>
        <li id="item2">item 2</li>
        <li id="item3">item 3</li>
    </ol>`;
    const ol=document.getElementById("idOl")
    functions.deleteFirst()
// console.log(ol.textContent)
expect(ol.children.length).toBe(2);
expect(ol.children[ol.children.length-1].textContent).toBe("item 3");
});

// test('Check Add before button', () => {
//     document.body.innerHTML =        
//     `    <div class="w3-row-padding">
//     <div class="w3-col s5">
//         <h1>Working with Cards!!</h1>
//         <div class="container">
//             <div class="card">
          
//                 <h4><b>Card 1</b></h4> 
//                 <button id="idAddBefore1">Add before</button>
//                 <button id="idAddAfter1">Add After</button><br>
//                 <button id="idDelete1">Delete</button> 
//             </div>

//             <div class="card">
//                 <h4><b>Card 2</b></h4> 
//                 <button id="idAddBefore2">Add before</button>
//                 <button id="idAddAfter2">Add After</button><br>
//                 <button id="idDelete2">Delete</button> 
//             </div>    

//             <div class="card">
//                 <h4><b>Card 3</b></h4> 
//                 <button id="idAddBefore3">Add before</button>
//                 <button id="idAddAfter3">Add After</button><br>
//                 <button id="idDelete3">Delete</button> 
//         </div>
//         </div>
//     </div>`;
//     const card=document.getElementsByClassName("card")
//     functions.addBefore()
// console.log(card.length)
// expect(card.length).toBe(4);
//expect(ol.children[ol.children.length-1].textContent).toBe("item 3");
// });

test('Does the createCard function work?', () => {
    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);
    //console.log("We are in the tests");
    const group = document.createElement("div");
    const element = functions.createCard("hi");
    group.appendChild(element);
    expect(element).toBeTruthy();
   // console.log(group.textContent);
    expect(group.textContent).toBe("hiAdd BeforeAdd After");
    //console.log(group.children[0].children.length);
   // console.log(group.children[0].children[0].textContent);
    expect(group.children[0].children[1].textContent).toBe("Add Before");
   // expect(group.child[0].textnode).toBe("hi");
   // expect(element.child[0].textnode).toBe("hi");
});

test('Check the addBefore', () => {
    const group = document.createElement("div");
    const element = functions.createCard("hi");
   
    group.appendChild(element)
    expect(group.children.length).toBe(1);

    functions.addBefore(element,"Hey");
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent).toBe("HeyAdd BeforeAdd After");

  //  expect(group.textContent).toBe("heyAdd BeforeAdd After");
   // expect(group.children[0].children[0].textContent).toBe("hi"); 
 
});

test('Check the addBefore', () => {
    const group = document.createElement("div");
    const element = functions.createCard("hi");
   
    group.appendChild(element)
    expect(group.children.length).toBe(1);

    functions.addAfter(element,"Hey");
    expect(group.children.length).toBe(2);
    expect(group.children[1].textContent).toBe("HeyAdd BeforeAdd After");

});