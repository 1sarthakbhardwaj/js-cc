// console.log("welocme to dom");

let a = document;
// a = document.body;
// // a = document.forms;
// a = document.all;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links;

Array.from(a).forEach(function(element){
    console.log(element);
})

// console.log(a);