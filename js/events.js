console.log("working bitch");

document.getElementById('Heading').addEventListener('click', function(e){
    console.log("I'm working");
    vari = e.target;
    vari = e.offsetX;
    console.log(vari);
});