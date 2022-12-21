//Variables globales
/*let donuts={
    imagen: (new Image()).src="imagenes/donuts.jpg",
    producto: "Donuts",
    precio: 1.99,
    alt:"Unos donuts",
    cantidad: 1    
}
//Variables globales
/*let donuts={
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
let muffins={
    imagen: "imagenes/muffins.jpg",
    producto: "Muffins",
    precio: 5.99,
    alt: "Muffins",
    cantidad: 3    
}
    cantidad: 2    
let tarta={
    imagen: "imagenes/tartaSueca.jpg",
    producto: "Tarta de chocolate",
    precio: 15.99,
    alt: "una tarta",
    cantidad: 2    
}
}
let donuts11  = {
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
}*/

class postre{
    constructor(nombre, imagen1, imagen2, imagen3, descripcion, precio, cantidad, paramAlt){
        this.nombre=nombre;
        this.imagen1=imagen1;
        this.imagen2=imagen2;
        this.imagen3=imagen3;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=cantidad;
        this.paramAlt=paramAlt;
    }
}

let postreTartaSueca=new postre("TartaSueca", "imagenes/tartaSueca1.jpg", "imagenes/tartaSueca2.jpg", "imagenes/tartaSueca3.jpg", "Una tarta sueca", 15.90, 1, 'TartaSueca');
let postredonuts=new postre("Donuts","imagenes/donuts.jpg", "imagenes/donuts.jpg", "imagenes/donuts.jpg", "Unos donuts", 11.99, 1, "Unos donuts");
let postreMuffins=new postre("Muffins","imagenes/muffins.jpg", null, null, "Muffins", 12.99, 1, "Muffins");
let tartaBrigada=new postre("Tarta Brigada","imagenes/tartaBrigada.jpg", null, null, "Tarta Brigada", 13.99, 1, "Tarta Brigada");
let tartaKikat=new postre("Tarta Kit Kat","imagenes/tartaKitKat.jpg", null, null, "Tarta Kit Kat", 13.99, 1, "Tarta Kit Kat");
let cruasanes=new postre("Cruasanes","imagenes/cruasanes.jpg", null, null, "Cruasanes", 13.99, 1, "Crusanes");
let todosPostres=[postreTartaSueca,postredonuts,postreMuffins,tartaBrigada,tartaKikat,cruasanes];

let carritoCompra=[postreTartaSueca, postredonuts]

let numCosasEnCarrito=carritoCompra.length;
let clickCarrito;
let clickMenu;
let pepeleraPulsada;

mostrarCarrito();
CantidadCarrito(); //Esconder el circulito con el numero de elementos en carrito


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

//Al hacer click en el carrito del navegador, se hace visible el div carrito con la compra
clickCarrito=document.getElementById("divCarrito");

let noEscondasEsto=[document.getElementById("carrito"),document.getElementById("totalCarrito")]
clickCarrito.addEventListener("click", function(){escondeTodo(noEscondasEsto)});


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

//Abre el menu desplegable de la hamburguesa
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

//obtener input del login
const txt1 = document.getElementById("UserIntro");
const psw1 = document.getElementById("PasswordIntro");
const btn1 = document.getElementById("botonUser");
//btn1.addEventListener("click", fun1())
const userconst = "Trilleros";
const pswconst = "Contraseña";
const wb = document.getElementById("whiteboard");
var out1;
var out2;
const Login = document.getElementById("Login")
function fun1(){
    out1 = txt1.value;
    out2 = psw1.value;
    if (out1 == userconst && out2 == pswconst){
        console.log("Iniciaste Sesion");
        Login.classList.add("invisible");
        wb.classList.add("invisible")
    } else{
        txt1.value = "";
        psw1.value = "";
        alert("Contraseña o Usuario incorrecto");
    }
}

//Suma los precios de los articulos del carrito
function sumarPrecios(vectorCarrito){
    sumaPrecio=0;
    vectorCarrito.forEach( articuloCarrito=>{
        sumaPrecio=sumaPrecio+(articuloCarrito.precio*articuloCarrito.cantidad);
    })    
   document.querySelector("#totalCarrito p:nth-child( 2 )").innerHTML=sumaPrecio.toFixed(2)+"€";
}

//Borra los elementos del carrito al pulsar la papelera
function borrarElementoDelCarrito(indiceDelVectorCarrito){
    carritoCompra.splice(indiceDelVectorCarrito,1);
    numCosasEnCarrito=carritoCompra.length;
    CantidadCarrito();
    mostrarCarrito();            
}

//Muetra cada articulo incluido en el carrito
//Implementa los metodos de modificacion y borrado de cada producto del carrito
function mostrarCarrito(){    
   
    //Sistema un tanto turbio de actualizar el carrito, borrando todo y volviendo a crear
    let listahijos=document.querySelectorAll("#carrito > .unProducto")
        listahijos.forEach(nodoProducto => document.getElementById("carrito").removeChild(nodoProducto) )

    for(let i=0; i<carritoCompra.length; i++){      

        let divContenedor=document.createElement("div");        
        divContenedor.setAttribute("class", "unProducto");       
        
        divContenedor.innerHTML=
        '<img class="fotoProducto" src="'+carritoCompra[i].imagen1+'" />'+
        '<div class="nombreProducto">'+carritoCompra[i].nombre+'</div>'+
        '<div class="cantidadProducto"><p class="textoCantidad">x'+carritoCompra[i].cantidad+'</p>'+
            '<img src="imagenes/flecha-arriba.png" alt="Flecha arriba" class="flechaCantidadArriba" onClick="aumentarCantidad('+i+')">'+
            '<img src="imagenes/flecha-abajo.png" alt="Flecha abajo" class="flechaCantidadAbajo" onClick="reducirCantidad('+i+')"></div>'+
        '<div class="precioProducto">'+carritoCompra[i].precio.toFixed(2)+'€</div>'+
        '<div class="precioProductoTotal">'+(carritoCompra[i].precio*carritoCompra[i].cantidad).toFixed(2)+'€</div>'+
        '<img class="iconoPapelera" src="imagenes/papelera-de-reciclaje.png" '+
        'onClick="borrarElementoDelCarrito('+i+')">';

        document.getElementById("carrito").appendChild(divContenedor);
    }
    
    sumarPrecios(carritoCompra);
    CantidadCarrito();
}

//Esconde todas las divs principales, y muestra las que se pasen como parametro (en forma de vector)
//No modifica el div de menuNavFlotante.
function escondeTodo(noEscondasEsto){    
    
    if(!(noEscondasEsto[0].classList.contains("invisible"))){
        let todoDivPrincipal=document.querySelectorAll("#Principal>div");
    todoDivPrincipal.forEach(capa =>
        capa.classList.remove("invisible")
        
    )
    noEscondasEsto.forEach(capa =>        
        capa.classList.add("invisible")
    ) 

    }
    else{
        let todoDivPrincipal=document.querySelectorAll("#Principal>div");
    todoDivPrincipal.forEach(capa =>
        capa.classList.add("invisible")
    )
    noEscondasEsto.forEach(capa =>        
        capa.classList.remove("invisible")
    ) 
    }
    document.getElementById("menuNavFlotante").classList.remove("invisible")
    
    let capasPopUp = document.querySelectorAll("#Principal div.popUpsDelFooter");
    capasPopUp.forEach(capa=>capa.classList.add("invisible"));
}


//let productos = [donuts,cruasanes,tartaKitKat,tartaBrigada,tartaSueca];
let cuerpoFotos = document.getElementById("cuerpoFotos");


/* BOTON AUMENTAR O DISMINUIR CANTIDAD */
var inicio = 1; // Se inicia una variable en 1.

function aumentar(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar.
var cantidad = document.getElementById('cantidad').value = ++inicio; // Se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(number){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir.
var cantidad = document.getElementById('cantidad').value = --inicio; // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

/* BOTÓN AÑADIR AL CARRITO */

//Función para mostrar los productos.

function mostrarTarjetas(){
    for(let i=0; i<todosPostres.length; i++){      

        let divTarjeta=document.createElement("div");        
        divTarjeta.setAttribute("class", "col");
        divTarjeta.setAttribute("onClick",'mostrarProducto('+i+')');
        divTarjeta.innerHTML=        
        '<div clas="h-100">'+
            '<img src="'+todosPostres[i].imagen1+'" class="card-img-top" alt = "'+todosPostres[i].nombre+'"/>'+
            '<div class="card-body tarjeta">'+
                '<p class="card-title">'+todosPostres[i].nombre+'</p>'+
                '<p class="card-text">'+todosPostres[i].descripcion+'</p>'+
            '</div>'
        '</div>'             
        document.getElementById("tarjetas").appendChild(divTarjeta);

    
    }
/* BOTON AUMENTAR O DISMINUIR CANTIDAD */
var inicio = 1; // Se inicia una variable en 1.

function aumentar(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar.
var cantidad = document.getElementById('cantidad').value = ++inicio; // Se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(number){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir.
var cantidad = document.getElementById('cantidad').value = --inicio; // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}

/* BOTÓN AÑADIR AL CARRITO */




//AÑADIR DIV AL PULSAR P DEL FOOTER 

//QUIENES SOMOS
let clickQuienes=document.getElementById("PiePagina").querySelectorAll("p");
let capasPopUpGuille=document.querySelectorAll("#Principal div.popUpsDelFooter")
clickQuienes[0].addEventListener("click", function (){

if(document.getElementById("QuienesSomos").classList.contains("invisible")){
    
    capasPopUpGuille.forEach(cadaUnaDeLasCapas=> cadaUnaDeLasCapas.classList.add("invisible"));
    document.getElementById("QuienesSomos").classList.remove("invisible");
}
else{
    document.getElementById("QuienesSomos").classList.add("invisible");
}
})

//CONTACTO
let clickContacto=document.getElementById("PiePagina").querySelectorAll("p");
clickContacto[1].addEventListener("click", function (){

if(document.getElementById("contactanos").classList.contains("invisible")){
    capasPopUpGuille.forEach(cadaUnaDeLasCapas=> cadaUnaDeLasCapas.classList.add("invisible"));
    document.getElementById("contactanos").classList.remove("invisible");

}
else{
    document.getElementById("contactanos").classList.add("invisible");
}
})

//FAQS
let clickFAQ=document.getElementById("PiePagina").querySelectorAll("p");
clickFAQ[2].addEventListener("click", function (){

if(document.getElementById("FAQS").classList.contains("invisible")){
    capasPopUpGuille.forEach(cadaUnaDeLasCapas=> cadaUnaDeLasCapas.classList.add("invisible"));
    document.getElementById("FAQS").classList.remove("invisible");

}
else{
    document.getElementById("FAQS").classList.add("invisible");
}
})

/*-----------
* Muestra las capas relacionadas con el menu de navegacion
* (Dani)
-------------*/

let opcionMenuEmergente=document.querySelectorAll("#menuNavFlotante li");
let capasPopUp = document.querySelectorAll("#Principal div.popUpsDelFooter");
console.log(document.querySelectorAll("#Principal div.popUpsDelFooter"));
console.log(capasPopUp);

for(let i=0;i<opcionMenuEmergente.length-1;i++){
    opcionMenuEmergente[i].addEventListener("click", function(){    
        muestraPopUpsMenu(capasPopUp[i])
    });
}

opcionMenuEmergente[4].addEventListener("click", function(){    
    console.log("Salir")
});


function muestraPopUpsMenu(CapaParaMostrar){

    if(CapaParaMostrar.classList.contains("invisible")){        
        capasPopUp.forEach(capa=>capa.classList.add("invisible"))
        CapaParaMostrar.classList.remove("invisible")
    }
    else{
        CapaParaMostrar.classList.add("invisible")
    }    
}

//--------------------------------------------------------------------

/*-----------
* Aumenta y disminuye el atributo "cantidad" de un objeto
* Si se reduce por debajo de 0, se borra.
* (Dani)
-------------*/

function aumentarCantidad(unObjetoTarta){
    carritoCompra[unObjetoTarta].cantidad+=1;
    mostrarCarrito();
}

function reducirCantidad(unObjetoTarta){
    carritoCompra[unObjetoTarta].cantidad-=1;
    if(carritoCompra[unObjetoTarta].cantidad<0){
        borrarElementoDelCarrito(unObjetoTarta)
    }
    mostrarCarrito();
}
//------------------------------------------------------
    

    //sumarPrecios(carritoCompra);
}

window.addEventListener("load", mostrarTarjetas());

function mostrarProducto(ordenProducto)
{    
    let tarjetas = document.getElementById("tarjetas");
    tarjetas.classList.add("invisible");
    let producto = document.getElementById("carouselExampleCaptions");
    producto.classList.remove("invisible");
    let detalleProducto = document.getElementById("detalleProducto");
    detalleProducto.classList.remove("invisible");
    let imagenDiv1=document.getElementById("imagen1");
    let imagenDiv2=document.getElementById("imagen2");
    let imagenDiv3=document.getElementById("imagen3");    
    imagenDiv1.src=todosPostres[ordenProducto].imagen1;
    imagenDiv2.src=todosPostres[ordenProducto].imagen2;
    imagenDiv3.src=todosPostres[ordenProducto].imagen3;
    let nombre=document.getElementById("nombre");
    let precio=document.getElementById("precio");
    nombre.textContent=todosPostres[ordenProducto].nombre;
    precio.textContent=todosPostres[ordenProducto].precio;
}