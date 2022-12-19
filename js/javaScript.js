


    //Función mostrar las fotos y la descripción del producto.
    function mostrarProducto(donuts){
        let imagen1=this.document.getElementById("imagen1");
        let imagen2=this.document.getElementById("imagen2");
        let imagen3=this.document.getElementById("imagen3");
        let nombre=this.document.getElementById("nombre");
        let precio=this.document.getElementById("precio");
        imagen1.src=donuts.imagen1;
        imagen2.src=donuts.imagen2;
        imagen3.src=donuts.imagen3;
        nombre.innerHTML=donuts.nombre;
        precio.innerHTML=donuts.precio;
    }

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




let donuts  = {
    imagen: 'd',
    nombre: 'imagenes\donuts1.jpg',
    descripción: '',
}

let cruasanes  = {
    imagen: 'c',
    nombre: 'imagenes/cruasanes.jpg',
    descripción: '',
}

let tartaKitKat  = {
    imagen: 'imagenes\tartaKitKat.jpg',
    nombre: 'tartaKitKat',
    descripción: '',
}

let tartaBrigada  = {
    imagen: 'imagenes\tartaBrigada.jpg',
    nombre: 'tartaSueca',
    descripción: '',
}

let tartaSueca  = {
    imagen: 'imagenes\tartaSueca.jpg',
    nombre: 'tartaSueca',
    descripción: '',
}

let productos = [donuts,cruasanes,tartaKitKat,tartaBrigada,tartaSueca];
let cuerpoFotos = document.getElementById("cuerpoFotos");


