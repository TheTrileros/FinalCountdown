//Evento temporal hasta implementar click
window.addEventListener("load", function(event) {

    //Este objeto es temporal para pruebas
    let donuts = {
        imagen1 : 'imagenes/donuts1.jpg',
        imagen2 : 'imagenes/donuts2.jpg',
        imagen3 : 'imagenes/donuts3.jpg',
        nombre :  'Donuts',
        precio :  '25€',
        cantidad : 1 
    }
    mostrarProducto(donuts); //Lamada a función para pruebas

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
}
);
