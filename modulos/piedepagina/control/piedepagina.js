/*
Este archivo maneja la lógica del módulo de piedepagina en el frontend. Controla la interacción del usuario con piedepagina, 
la carga dinámica de contenido y la gestión de eventos.
*/
function pieDePagina(){
    fetch(ruta_back+"?tabla=redessociales")                             // Cargo un endpoint en el back                               
    .then(function(response){                               // Cuando obtenga respuesta                                    
        return response.json()                              // La convierto en Json
    })  
    .then(function(datos){                                  // Y cuando reciba datos
        console.log(datos)
        let contenedor = document.querySelector("#redes")
        datos.forEach(function(dato){
            contenedor.innerHTML += `
                <li>
                    <a href="`+dato.enlace+`">
                        <img src="`+dato.icono+`">`+dato.nombre+`
                    </a>
                </li>
            `;
        })
	})
	
}
pieDePagina();