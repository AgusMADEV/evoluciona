let botones = document.querySelectorAll(".controlador button")
botones.forEach(function(boton){
    boton.onclick = function(){
        seleccionaFoto(boton.value)
    }
})

function seleccionaFoto(boton){
    console.log("Venga va pesao")
    let valor = boton
    console.log(valor)
    document.querySelector(".contenedorpasafotos").style.left = ((0-(valor-1))*800)+"px"
}