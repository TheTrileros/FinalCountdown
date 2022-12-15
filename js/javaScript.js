/* BOTON AUMENTAR O DISMINUIR CANTIDAD */

var inicio = 1; // Se inicia una variable en 1.

function aumentar(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar.

var cantidad = document.getElementById('cantidad').value = ++inicio; // Se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir.

var cantidad = document.getElementById('cantidad').value = --inicio; // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

/* BOTÓN AÑADIR AL CARRITO */

