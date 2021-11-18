console.log('Hello World');
document.querySelector('#itinerario').addEventListener('click', function(){
    document.querySelector("main").classList.toggle("hidden");
    document.querySelector("#itinerario-container").classList.toggle("hidden");
});  
