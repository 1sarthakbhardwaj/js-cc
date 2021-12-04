let cont = document. querySelector('.container');
// console.log( cont.children);  

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
let nodeValue = cont.childNodes[1].nodeValue;   

// console.log(nodeName);
// console.log(nodeType);
// console.log(nodeValue);

// Node Types
// 1 = element
// 2 = attribute
// 3 = text
// 8 = comment
// 9 = document
// 10 = doctype

let container = document.querySelector('div.container');

console.log(container.children[1].children[0].childNodes);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
