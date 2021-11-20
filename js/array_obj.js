console.log('i am wokring, array pr charcha')

const marks = [12,13,14,14,22,1,2,3,4,5];
const fruits = ['orange', 'Apple', 'fruit'];
const mixed = ['orange', 'Apple', 'fruit', 12, 13, 14, 14, 22];

// marks.pop(); //from last
// marks.shift() //from start
marks.splice(1,3) //start from 1 remove 3 elements
console.log(marks); 
console.log(fruits);
console.log(mixed);
console.log(typeof(fruits));
 
let myObj = {
    name : 'things',
    class : 12,
    boole : true
}

console.log(myObj.boole);