console.log("working");

let element = document.getElementById('myf  irst');
console.log(element);

let selector = document.querySelector('.child');
console.log(selector);

let elems = document.getElementsByClassName('child');    


Array.from(elems).forEach(function(item){
    item.style.color = 'red';
});