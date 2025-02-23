/*
Este archivo maneja la lógica del módulo de destacados en el frontend. Controla la interacción 
del usuario con los elementos destacados, la carga dinámica de contenido y la gestión de eventos 
para mejorar la experiencia del usuario.
*/
fetch(ruta_back+"?tabla=destacados")                             // Cargo un endpoint en el back                               
.then(function(response){                               // Cuando obtenga respuesta                                    
    return response.json()                              // La convierto en Json
})  
.then(function(datos){                                  // Y cuando reciba datos
    console.log(datos)
    let contenedordestacados = document.querySelector("#destacados")
    let plantilladestacado = document.querySelector("#plantilladestacado")
    datos.forEach(function(dato){
        let instancia = plantilladestacado.content.cloneNode(true);
        instancia.querySelector("h3").textContent = dato.titulo
        instancia.querySelector("h4").textContent = dato.texto
        instancia.querySelector("article").style.background = "url(static/"+dato.imagen+")"
        contenedordestacados.appendChild(instancia)
    })
})