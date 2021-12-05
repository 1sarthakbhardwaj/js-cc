console.log("this is wroking man");

// let ul = document.createElement('ul');
let list = document.createElement('li');
list.className = "childul"; 
// list.mylist.style.color = 'red'
list.innerHTML = '<B>this is child nodeeee</B>';

// ul.className = 'ullist';
// ul.appendChild(list);


let elem = document.querySelector('ul.this');
elem.appendChild(list);

let list2 = document.createElement('h2');
list2.className = 'list2';
let textnode = document.createTextNode('this is h2');
list2.appendChild(textnode);
list.replaceWith(list2);

let myul = document.getElementById('myul');
myul.replaceChild(list2, document.getElementById('fdi'));
myul.removeChild(document.getElementById('rm'));
console.log(myul.children);


let mass = document.querySelector('ul.this');
let ass = document.createElement('h2');
ass.className = 'ass';
// ass.innerHTML = '<B>this is ass</B>';
let tlink2 = document.createElement('a');
tlink2.className = 'tlink2';
let n = document.createTextNode('my dev id');
tlink2.appendChild(n);
tlink2.href = 'https://dev.to/thenomadevel';
mass.appendChild(ass);
ass.appendChild(tlink2);
