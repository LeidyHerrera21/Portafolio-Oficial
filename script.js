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

const contenedor = document.getElementById("particulas");

for(let i=0;i<50;i++){

let p = document.createElement("div");
p.classList.add("particula");

p.style.left = Math.random()*100 + "%";
p.style.bottom = Math.random()*50 + "px";

p.style.animationDuration = (5 + Math.random()*10) + "s";

contenedor.appendChild(p);

}
