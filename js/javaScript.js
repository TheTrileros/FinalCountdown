//Clase Postre para instanciar
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

//Variables globales
let clickCarrito;
let clickMenu;
let pepeleraPulsada;

//Objetos Pre-Creados
let postreTartaSueca=new postre("TartaSueca", "imagenes/tartaSueca1.jpg", "imagenes/tartaSueca2.jpg", "imagenes/tartaSueca3.jpg", "Una tarta sueca", 15.90, 0, 'TartaSueca');
let postredonuts=new postre("Donuts","imagenes/donuts1.jpg", "imagenes/donuts2.jpg", "imagenes/donuts3.jpg", "Rosquillas con sabores variados", 11.99, 0, "Unos donuts");
let postreMuffins=new postre("Muffins","imagenes/muffins1.jpg", "imagenes/muffins2.jpg", "imagenes/muffins3.jpg", "Esponjosos y de gran sabor", 12.99, 0, "Muffins");
let tartaBrigada=new postre("Tarta Brigada","imagenes/tartaBrigada1.jpg", "imagenes/tartaBrigada2.jpg", "imagenes/tartaBrigada3.jpg", "Bizcocho remojado con corazón de fresa, bañada en chocolate y decorada con fresas y frutos rojos", 13.99, 0, "Tarta Brigada");
let tartaKikat=new postre("Tarta Kit Kat","imagenes/tartaKitKat1.jpg", "imagenes/tartaKitKat2.jpg", "imagenes/tartaKitKat3.jpg", "Bizcocho de Chocolate, húmedo y esponjoso relleno con dulce de leche", 13.99, 0, "Tarta Kit Kat");
let cruasanes=new postre("Cruasanes","imagenes/cruasanes1.jpg", "imagenes/cruasanes2.jpg", "imagenes/cruasanes3.jpg", "La masa de brioche de nuestro croissant envuelve un suave relleno de crema al caco con avellanas", 13.99, 0, "Crusanes");

//Vector con todos los objetos
let todosPostres=[postreTartaSueca,postredonuts,postreMuffins,tartaBrigada,tartaKikat,cruasanes];

//Vector con los objetos que hay en el carrito
let carritoCompra=[]

//Funciones que necesitan inicializacion
mostrarCarrito();

/*---------------------------------------------------------------
* Al hacer click en el carrito del navegador, se hace visible el div carrito con la compra
* Dani
------------------------------------------------------------------*/
clickCarrito=document.getElementById("divCarrito");
let noEscondasEsto=[document.getElementById("carrito"),document.getElementById("totalCarrito")]
clickCarrito.addEventListener("click", function(){escondeTodo(noEscondasEsto)});
//------------------------------------------------------------------

/*---------------------------------------------------------------
* Funcion para cambiar el numero dentro de #numArticulosEnCarrito
* Dani
------------------------------------------------------------------*/
function CantidadCarrito(){
    let capaCarrito=document.getElementById("numArticulosEnCarrito");
    if(carritoCompra.length==0){
        capaCarrito.style.opacity=0;
    }
    else{
        capaCarrito.style.opacity=1;
        capaCarrito.textContent=carritoCompra.length;
    }
}
//----------------------------------------------------------------

/*---------------------------------------------------------------
* Abre el menu desplegable de la hamburguesa
* Dani
------------------------------------------------------------------*/
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
//----------------------------------------------------------------

/*---------------------------------------------------------------
* obtener input del login
* Diego
------------------------------------------------------------------*/
//obtener input del login
const txt1 = document.getElementById("UserIntro");
const psw1 = document.getElementById("PasswordIntro");
const btn1 = document.getElementById("botonfondo");
/*
const userconst = "Trilleros";
const pswconst = "Contraseña";
const wb = document.getElementById("whiteboard");
var out1;
var out2;
const Login = document.getElementById("Login")

btn1.addEventListener("click", () =>{
    out1 = txt1.value;
    out2 = psw1.value;
    if (out1 == userconst && out2 == pswconst){
        console.log("Iniciaste Sesion");
        Login.classList.add("invisible");
        wb.classList.add("invisible")
        console.log("iniciastesesion")
    } else{
        txt1.value = "";
        psw1.value = "";
        alert("Contraseña o Usuario incorrecto");
    }
})
*/
//---------------------------------------------------------------

/*---------------------------------------------------------------
* Pasar al carrito al hacer click
* Diego
* Revisado Jesus
* Revisado Dani
*   Cambiados todas las cantidades de creacion de los objetos a cero, para que 
*   funcione la inicializacion cuando el objeto no esta en el carrito previamente.
*   Ahora entra en el carrito con la cantidad que se marca en #cantidad
------------------------------------------------------------------*/

let clickAnaCarrito = document.getElementById("imgCarrito");

clickAnaCarrito.addEventListener("click", () =>{
    nombre=document.getElementById("nombre");    
    let indiceCarrito = carritoCompra.findIndex(i => i.nombre === nombre.textContent);    
    if(indiceCarrito === -1){         
        carritoCompra.push(todosPostres.find(i => i.nombre === nombre.textContent));
        let cantidadSolicitada=document.getElementById("cantidad").value;
        carritoCompra[carritoCompra.length-1].cantidad+=parseInt(cantidadSolicitada);                        
    }
    else{
        let cantidadSolicitada=document.getElementById("cantidad").value;        
        carritoCompra[indiceCarrito].cantidad += parseInt(cantidadSolicitada);
    }
    mostrarCarrito();    
})
//-------------------------------------------------------------------

/*---------------------------------------------------------------
* Suma los precios de los articulos del carrito
* Dani
------------------------------------------------------------------*/
function sumarPrecios(vectorCarrito){
    sumaPrecio=0;
    vectorCarrito.forEach( articuloCarrito=>{
        sumaPrecio=sumaPrecio+(articuloCarrito.precio*articuloCarrito.cantidad);
    })    
   document.querySelector("#totalCarrito p:nth-child( 2 )").innerHTML=sumaPrecio.toFixed(2)+"€";
}
//---------------------------------------------------------------

/*---------------------------------------------------------------
* Borra los elementos del carrito al pulsar la papelera
* Dani
------------------------------------------------------------------*/
function borrarElementoDelCarrito(indiceDelVectorCarrito){
    carritoCompra.splice(indiceDelVectorCarrito,1);
    numCosasEnCarrito=carritoCompra.length;
    CantidadCarrito();
    mostrarCarrito();            
}
//--------------------------------------------------------------

/*---------------------------------------------------------------
* Muestra cada articulo incluido en el carrito
* Implementa los metodos de modificacion y borrado de cada producto del carrito
* Dani
------------------------------------------------------------------*/
function mostrarCarrito(){       
    
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
//----------------------------------------------------------------------------------

/*---------------------------------------------------------------
* Esconde todas las divs principales, y muestra las que se pasen como parametro (en forma de vector)
* No modifica el div de menuNavFlotante.
* Dani
------------------------------------------------------------------*/
function escondeTodo(noEscondasEsto){      
    
    if(!(noEscondasEsto[0].classList.contains("invisible"))){   

        let noVengoDeTarjetas=document.getElementById("tarjetas").classList.contains("invisible");
        noEscondasEsto.forEach(capa => capa.classList.add("invisible"))

        if(!noVengoDeTarjetas){            
            document.getElementById("CuerpoFotos").classList.remove("invisible");
            document.getElementById("tarjetas").classList.remove("invisible");
        }
        else{
            document.getElementById("botonVolver").classList.remove("invisible");
            document.getElementById("CantidadCompra").classList.remove("invisible");
            document.getElementById("CuerpoFotos").classList.remove("invisible");
            mostrarProducto(productoEnCarrusel);
        }        
    }
    else{
        let todoDivPrincipal=document.querySelectorAll("#Principal>div");
    todoDivPrincipal.forEach(capa => capa.classList.add("invisible"))
    noEscondasEsto.forEach(capa => capa.classList.remove("invisible")) 
    }
    document.getElementById("menuNavFlotante").classList.remove("invisible")
    
    let capasPopUp = document.querySelectorAll("#Principal div.popUpsDelFooter");
    capasPopUp.forEach(capa=>capa.classList.add("invisible"));
}
//----------------------------------------------------------------------

//let cuerpoFotos = document.getElementById("cuerpoFotos");

/*---------------------------------------------------------------
* BOTON AUMENTAR O DISMINUIR CANTIDAD
* Kevin
* Modificado Diego
* Modificado Dani:
*   El numero no puede ser menor que 1.
------------------------------------------------------------------*/
var inicio = 1; // Se inicia una variable en 1.

function aumentar(){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar.
    document.getElementById('cantidad').value = ++inicio; // Se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(number){ // Se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir.
    var cantidad = document.getElementById('cantidad').value = --inicio; // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    
    if(cantidad<=0){
        document.getElementById('cantidad').value = 1;
        inicio=1;
    }
}
//---------------------------------------------------------------

/*---------------------------------------------------------------
* BOTÓN AÑADIR AL CARRITO
* Kevin
------------------------------------------------------------------*/

/*---------------------------------------------------------------
* Función para mostrar los productos. Se ejecuta al cargar la pagina
* Jesus
------------------------------------------------------------------*/
function mostrarTarjetas(){
    for(let i=0; i<todosPostres.length; i++){      

        let divTarjeta=document.createElement("div");        
        divTarjeta.setAttribute("class", "col");
        divTarjeta.setAttribute("onClick",'mostrarProducto('+i+')');
        divTarjeta.innerHTML=        
        '<div class="h-100">'+
            '<img src="'+todosPostres[i].imagen1+'" class="card-img-top" alt = "'+todosPostres[i].nombre+'"/>'+
            '<div class="card-body tarjetas">'+
                '<p class="card-title">'+todosPostres[i].nombre+'</p>'+
                '<p class="card-text">'+todosPostres[i].descripcion+'</p>'+
            '</div>'
        '</div>'             
        document.getElementById("tarjetas").appendChild(divTarjeta);    
    }
}
window.addEventListener("load", mostrarTarjetas());
//------------------------------------------------------------------

/*---------------------------------------------------------------
* AÑADIR DIV AL PULSAR P DEL FOOTER
* Guille
------------------------------------------------------------------*/
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
//---------------------------------------------------------------------------

/*-----------
* Muestra las capas relacionadas con el menu de navegacion
* (Dani)
-------------*/

let opcionMenuEmergente=document.querySelectorAll("#menuNavFlotante li");
let capasPopUp = document.querySelectorAll("#Principal div.popUpsDelFooter");

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

/*--------------------------------------------------------------------
* Aumenta y disminuye el atributo "cantidad" de un objeto
* Si se reduce por debajo de 0, se borra.
* (Dani)
--------------------------------------------------------------------*/

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
//-----------------------------------------------------------------

/*------------------------------------------------------------
* Muestra el producto que se clica, en grande
* Jesus 
* Dani: Añado Añado opciones para ajustar el div CuerpoFotos en modo carrusel
*       
-------------------------------------------------------------*/
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
    precio.textContent=todosPostres[ordenProducto].precio.toFixed(2)+'€';
    let cajaCantidad = document.getElementById("CantidadCompra");
    cajaCantidad.classList.remove("invisible");
    let btnVuelta = document.getElementById("botonVolver");
    btnVuelta.classList.remove("invisible");

    document.getElementById('cantidad').value = 1;
    inicio=document.getElementById('cantidad').value;

    document.getElementById("CuerpoFotos").style.height= "55vh";
    document.getElementById("CuerpoFotos").style.top= "auto";
    document.getElementById("CuerpoFotos").style.position= "relative"; 
    
    productoEnCarrusel=ordenProducto;
}
//-----------------------------------------------------------------

/*------------------------------------------------------------
* Al pulsar el boton Volver, oculta de nuevo las capas para que se vean solo las 
* tarjetas
* Jesus
* Dani: Añado opciones para agrandar el div CuerpoFotos en modo Tarjeta
--------------------------------------------------------------*/
function volverATarjetas(){
    document.getElementById("tarjetas").classList.remove("invisible");    
    document.getElementById("carouselExampleCaptions").classList.add("invisible");    
    document.getElementById("CantidadCompra").classList.add("invisible");    
    document.getElementById("botonVolver").classList.add("invisible");        
    document.getElementById("detalleProducto").classList.add("invisible");

    document.getElementById("CuerpoFotos").style.height= "78vh";
    document.getElementById("CuerpoFotos").style.position= "absolute";
    document.getElementById("CuerpoFotos").style.top= "13vh";
} 
//-----------------------------------------------------------------