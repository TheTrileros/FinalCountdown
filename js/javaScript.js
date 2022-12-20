//Variables globales
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

let carritoCompra=[tarta, donuts, muffins, donuts, muffins, muffins,donuts, donuts, donuts]

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
        '<img class="fotoProducto" src="'+carritoCompra[i].imagen+'" />'+
        '<div class="nombreProducto">'+carritoCompra[i].producto+'</div>'+
        '<div class="cantidadProducto">x'+carritoCompra[i].cantidad+'</div>'+
        '<div class="precioProducto">'+carritoCompra[i].precio+'€</div>'+
        '<div class="precioProductoTotal">'+carritoCompra[i].precio*carritoCompra[i].cantidad+'</div>'+
        '<img class="iconoPapelera" src="imagenes/papelera-de-reciclaje.png" '+
        'onClick="borrarElementoDelCarrito('+i+')">';

        document.getElementById("carrito").appendChild(divContenedor);
    }
    
    sumarPrecios(carritoCompra);
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
}


let donuts1  = {
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


