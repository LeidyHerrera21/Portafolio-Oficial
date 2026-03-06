function mensaje(){

alert("Has despertado al vampiro del código... Bienvenido a mi portafolio oscuro.");

}

/*animacion de habilidades*/

window.addEventListener("load", function(){

const barras = document.querySelectorAll(".progreso");

barras.forEach(barra=>{
let ancho = getComputedStyle(barra).width;
barra.style.width = "0";

setTimeout(()=>{
barra.style.width = ancho;
},300);

});

});


