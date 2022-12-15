clickfooter=document.getElementById("PiePagina");
clickfooter.addEventListener("click", function(){abrirfooter()});
function abrirfooter(){
    let capafooter=document.getElementById("footer");
    if(capafooter.classList.contains("invisible")){
        capafooter.classList.remove("invisible");
    }
    else capafooter.classList.add("invisible");}
