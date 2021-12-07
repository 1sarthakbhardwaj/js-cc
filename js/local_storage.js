console.log("sadas");

arrayy = ['anda','pyaz','kachori'];
localStorage.setItem("sunny","bhai");
localStorage.setItem("class","12");
localStorage.setItem("arr",JSON.stringify(arrayy));
//  localStorage.clear(); //clear all
localStorage.removeItem("class");



console.log(localStorage.getItem("class"));
console.log(JSON.parse(localStorage.getItem("arr")));