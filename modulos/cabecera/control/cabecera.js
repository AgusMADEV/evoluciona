/*
    Este código obtiene dinámicamente categorías desde un backend, construye un menú principal con enlaces a cada categoría,
    muestra los productos asociados al pasar el cursor sobre cada categoría, y gestiona la apertura/cierre de un "supermenú" 
    con efectos visuales de difuminado.
 */
function procesaCabecera() {
    // Se realiza una petición fetch al backend, solicitando la tabla de categorías
    fetch(ruta_back+"?tabla=categorias")
        // Cuando llega la respuesta, se convierte a JSON
        .then(response => response.json())
        .then(datos => {
            // Se selecciona el contenedor donde se agregará el menú (header nav ul)
            let cabecera = document.querySelector("header nav ul");
            // Se selecciona la plantilla que se usará para cada elemento del menú
            let plantilla = document.querySelector("#elementomenu");

            // Si no existe la plantilla, se muestra un aviso en la consola y se interrumpe la función
            if (!plantilla) {
                console.warn("No se encontró la plantilla #elementomenu");
                return;
            }

            // Se recorre el array de categorías recibido del backend
            datos.forEach(dato => {
                // Se clona el contenido de la plantilla
                let instancia = plantilla.content.cloneNode(true);
                // Se selecciona el enlace dentro de la clonación
                let enlace = instancia.querySelector("a");

                // Se asignan el nombre de la categoría y el enlace correspondiente con su identificador
                enlace.textContent = dato.nombre;
                enlace.setAttribute("href", "categoria.php?cat=" + dato.Identificador);
                enlace.setAttribute("cat", dato.Identificador);

                // Se le agrega la clase "categoria" al elemento li
                instancia.querySelector("li").classList.add("categoria");

                // Se agrega un evento al pasar el cursor sobre la categoría
                enlace.addEventListener("mouseenter", function () {
                    // Guardamos el título de la sección (nombre de la categoría)
                    let tituloseccion = this.textContent;

                    // Se hace una nueva petición para obtener los productos de esta categoría
                    fetch(ruta_back+"?busca=productos&campo=categorias_nombre&dato=" + this.getAttribute("cat"))
                        .then(response => response.json())
                        .then(datos => {
                            // Se muestra el nombre de la categoría en #categoria
                            document.querySelector("#categoria").textContent = tituloseccion;
                            // Se selecciona la lista donde se mostrarán los productos
                            let productos = document.querySelector("#productos");
                            // Se limpia la lista de productos antes de llenarla con la información
                            productos.innerHTML = "";

                            // Se recorre el array de productos y se generan los enlaces correspondientes
                            datos.forEach(dato => {
                                productos.innerHTML += `<li><a href='producto.php?prod=${dato.Identificador}'>${dato.titulo}</a></li>`;
                            });

                            // Se selecciona el header para aplicarle difuminado y una clase que indica que el menú está activo
                            let cabecera = document.querySelector("header");
                            difumina(cabecera);
                            cabecera.classList.add("menu-activo");
                        });
                });

                // Se agrega el elemento clonado al inicio de la lista (prepend)
                cabecera.prepend(instancia);
            });

            // Evento para cerrar el menú si el cursor sale del header
            let header = document.querySelector("header");
            header.addEventListener("mouseleave", function () {
                cerrarSupermenu();
            });

            // Cierra el menú si el cursor entra en #logo o en #segundomenu
            let logo = document.querySelector("#logo");
            let menu = document.querySelector("#segundomenu");

            [logo, menu].forEach(el => {
                el.addEventListener("mouseenter", function () {
                    cerrarSupermenu();
                });
            });
        })
        // Si ocurre algún error en la petición, se muestra una advertencia y se muestra un modal de error
        .catch(error => {
            console.warn("Error al cargar las categorías:", error);
            document.querySelector("#contienemodal").style.display = "block";
        });
}

// Función para difuminar el contenido principal y agrandar el header
function difumina(cabecera) {
    console.log("Has entrado");
    document.querySelector("main").classList.add("difuminado");
    document.querySelector("header").classList.add("grande");
}

// Función para cerrar el supermenú y quitar los estilos de difuminado y agrandado del header
function cerrarSupermenu() {
    console.log("Cerrando supermenú");
    document.querySelector("main").classList.remove("difuminado");
    document.querySelector("header").classList.remove("grande", "menu-activo");
}

// Evento que se ejecuta cuando se carga el DOM y llama a la función procesaCabecera
document.addEventListener("DOMContentLoaded", function () {
    procesaCabecera();
});
