console.log('I am working');

const greet = function myfun(name, age) {
    console.log(`I am travelling in ${name} coach he is ${age}`);

    return "hi hi";
}

name = 'sarthak';
let res = greet(name, 12);
console.log(res);


let myObj = {
    name: 'sarthak',
    age: 25,
    game: function() {
        return 'cricket';
    }
}

console.log(myObj.game());

 arr = ['fruit', 'vegetable', 'meat', 'milk'];

 arr.forEach(function(item, index, array) {
     console.log(item, index, array);
 });