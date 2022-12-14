//Variables globales
let numCosasEnCarrito=0;
let clickCarrito;
let clickMenu;

CantidadCarrito(); //Esconder el circulito con el numero de elementos en carrito

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

//Funcion para cambiar el numero dentro de #numArticulosEnCarrito
function CantidadCarrito(){
    let capaCarrito=document.getElementById("numArticulosEnCarrito");    
    
    if(numCosasEnCarrito==0){
        capaCarrito.style.opacity=0;
    }
    else{
        capaCarrito.style.opacity=1;
        capaCarrito.textContent=numCosasEnCarrito;
    }
}

//Funcion para abrir el menu lateral a partir de la hamburguesa
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

let donuts={
    imagen: (new Image()).src="imagenes/donuts.jpg",
    producto: "Donuts",
    precio: 1.99,
    alt:"Unos donuts",
    cantidad: 1    
}

let muffins={
    imagen: "imagenes/muffins.jpg",
    producto: "Muffins",
    precio: 5.99,
    alt: "Muffins",
    cantidad: 3    
}

let tarta={
    imagen: "imagenes/tartaSueca.jpg",
    producto: "Tarta de chocolate",
    precio: 15.99,
    alt: "una tarta",
    cantidad: 2    
}

let galeriaObjetos=[donuts, tarta]

let carritoCompra=[tarta, donuts, muffins]
numCosasEnCarrito=carritoCompra.length;

mostrarCarrito()

function mostrarCarrito(){    

    for(let i=0; i<numCosasEnCarrito; i++){

        /*
        let imagenProducto=document.createElement("img");
        imagenProducto.setAttribute("class", "fotoProducto");
        imagenProducto.setAttribute("src", carritoCompra[i].imagen);
        imagenProducto.setAttribute("alt", carritoCompra[i].alt);

        divContenedor.appendChild(imagenProducto);

        let elNombreProducto=document.createElement("div");
        elNombreProducto.setAttribute("class", "nombreProducto");
        elNombreProducto.innerText=carritoCompra[i].producto;

        divContenedor.appendChild(elNombreProducto);
        
        let laCantidadProducto=document.createElement("div");
        laCantidadProducto.setAttribute("class", "cantidadProducto");
        laCantidadProducto.innerText="x"+carritoCompra[i].cantidad;

        divContenedor.appendChild(laCantidadProducto);

        let elPrecioProducto=document.createElement("div");
        elPrecioProducto.setAttribute("class", "precioProducto");
        elPrecioProducto.innerText=carritoCompra[i].precio+"€";

        divContenedor.appendChild(elPrecioProducto);

        let elPrecioProductoTotal=document.createElement("div");
        elPrecioProductoTotal.setAttribute("class", "precioProductoTotal");
        elPrecioProductoTotal.innerText=carritoCompra[i].precio*carritoCompra[i].cantidad+"€";

        divContenedor.appendChild(elPrecioProductoTotal);

        let imagenPapelera=document.createElement("img");
        imagenPapelera.setAttribute("class", "iconoPapelera");
        imagenPapelera.setAttribute("src", "imagenes/papelera-de-reciclaje.png");
        imagenPapelera.setAttribute("alt", "Borrar");

        divContenedor.appendChild(imagenPapelera);

        document.getElementById("carrito").appendChild(divContenedor);
        */
        divContenedor=document.createElement("div");
        divContenedor.setAttribute("class", "unProducto");       

        divContenedor.innerHTML=
        '<img class="fotoProducto" src="'+carritoCompra[i].imagen+'" />'+
        '<div class="nombreProducto">'+carritoCompra[i].producto+'</div>'+
        '<div class="cantidadProducto">x'+carritoCompra[i].cantidad+'</div>'+
        '<div class="precioProducto">'+carritoCompra[i].precio+'€</div>'+
        '<div class="precioProductoTotal">'+carritoCompra[i].precio*carritoCompra[i].cantidad+'</div>'+
        '<img class="iconoPapelera" src="imagenes/papelera-de-reciclaje.png">';

        document.getElementById("carrito").appendChild(divContenedor);
    }
}


console.log(numCosasEnCarrito)




