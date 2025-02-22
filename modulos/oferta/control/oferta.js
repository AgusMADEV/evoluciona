/*
    Este archivo se encarga de cargar las ofertas desde el backend y mostrarlas en la página.
    Si hay ofertas disponibles, las muestra en el módulo correspondiente; si no, lo oculta.
 */

// Realiza una petición al backend para obtener datos de la tabla "oferta"
fetch(ruta_back + "?tabla=oferta") 
    .then(response => response.json()) // Convierte la respuesta del backend en formato JSON
    .then(datos => {
        // Verifica si la respuesta contiene datos (es decir, hay al menos una oferta)
        if (datos.length > 0) {
            // Obtiene el elemento HTML donde se mostrará la oferta
            let ofertaModulo = document.querySelector("#oferta"); 
            let texto = ofertaModulo.querySelector("p"); 

            // Inserta el texto de la primera oferta en el elemento <p>, agregando un enlace de "Saber más"
            texto.innerHTML = datos[0].texto + " - <a href=''>Saber más</a>";

            // Muestra el módulo de oferta si estaba oculto
            ofertaModulo.style.display = "block"; 
        } else {
            // Si no hay ofertas disponibles, oculta el módulo
            document.querySelector("#oferta").style.display = "none"; 
        }
    })
    // Captura cualquier error que ocurra durante la petición y lo muestra en la consola
    .catch(error => console.error("Error al cargar las ofertas:", error));
