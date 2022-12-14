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



