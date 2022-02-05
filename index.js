const displayValorAnterior= document.getElementById("valor-anterior");
const displayValorActual= document.getElementById("valor-actual");
const botonesNumeros= document.querySelectorAll(".boton-numerico");
const botonesOperadores= document.querySelectorAll(".operador");

var display= new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

