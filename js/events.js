console.log("working bitch");

document.getElementById('Heading').addEventListener('click', function(e){
    console.log("I'm working");
    vari = e.target;
    vari = e.offsetX;
    console.log(vari);
});

let btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
   e.preventDefault();
   console.log("I'm working",e);
});

document.getElementById('container').addEventListener('mouseover', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
});

// mouseenter mouseleave mousemove
