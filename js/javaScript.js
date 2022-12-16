//Variables globales
let numCosasEnCarrito=3;
let clickCarrito;
let clickMenu;

//Al hacer click en el carrito del navegador, se hace visible el div carrito con la compra
clickCarrito=document.getElementById("divCarrito");
clickCarrito.addEventListener("click", function(){abrirCarrito()});


//Abre el carrito
function abrirCarrito(){
    let capaCarrito=document.getElementById("carrito");
    if(capaCarrito.classList.contains("invisible")){
        capaCarrito.classList.remove("invisible");
    }
    else capaCarrito.classList.add("invisible");    
}

CantidadCarrito()

//Funcion para cambiar el numero dentro de #numArticulosEnCarrito
function CantidadCarrito(){
    let capaCarrito=document.getElementById("numArticulosEnCarrito");    
    console.log('hola');
    console.log('hola que tal');
    if(numCosasEnCarrito==0){
        capaCarrito.style.opacity=0;
    }
    else{
        capaCarrito.style.opacity=1;
        capaCarrito.textContent=numCosasEnCarrito;
    }
}

clickMenu=document.getElementById("imagenMenuHamburguesa");
clickMenu.addEventListener("click", function(){abrirMenuLateral()});

function abrirMenuLateral(){
    let capaMenu=document.getElementById("menuNavFlotante");
    if(capaMenu.style.zIndex>0){
        capaMenu.style.zIndex=-1;
        capaMenu.style.opacity=0
    }
    else{
        capaMenu.style.zIndex=1;
        capaMenu.style.opacity=1;
    }
}


/*let imag=document.getElementById("imagenMenuHamburguesa");
imag.src="/imagenes/carrito-de-compras.png";*/



/* BOTON AUMENTAR O DISMINUIR CANTIDAD */

var inicio = 1; // Se inicia una variable en 1.

function aumentar(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar.

var cantidad = document.getElementById('cantidad').value = ++inicio; // Se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir.

var cantidad = document.getElementById('cantidad').value = --inicio; // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

/* BOTÓN AÑADIR AL CARRITO */

