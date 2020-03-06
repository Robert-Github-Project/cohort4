import functions from './script.js'

test('Check the something', () => {
    expect(functions.something(2)).toBe(4); 
 
});

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
console.log(ol.textContent)
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
console.log(ol.textContent)
expect(ol.children.length).toBe(2);
expect(ol.children[ol.children.length-1].textContent).toBe("item 3");
});