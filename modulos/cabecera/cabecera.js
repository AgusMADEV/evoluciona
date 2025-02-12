function procesaCabecera() {
    fetch("../back/?tabla=categorias")
        .then(response => response.json())
        .then(datos => {
            let cabecera = document.querySelector("header nav ul");
            let plantilla = document.querySelector("#elementomenu");
			if (!plantilla) {
        console.warn("No se encontró la plantilla #elementomenu");
        return;
    }

            datos.forEach(dato => {
                let instancia = plantilla.content.cloneNode(true);
                let enlace = instancia.querySelector("a");

                enlace.textContent = dato.nombre;
                enlace.setAttribute("href", "categoria.php?cat=" + dato.Identificador);
                enlace.setAttribute("cat", dato.Identificador);
                instancia.querySelector("li").classList.add("categoria");

                enlace.addEventListener("mouseenter", function () {
                    let tituloseccion = this.textContent;
                    fetch("../back/?busca=productos&campo=categorias_nombre&dato=" + this.getAttribute("cat"))
                        .then(response => response.json())
                        .then(datos => {
                            document.querySelector("#categoria").textContent = tituloseccion;
                            let productos = document.querySelector("#productos");
                            productos.innerHTML = "";
                            datos.forEach(dato => {
                                productos.innerHTML += `<li><a href='producto.php?prod=${dato.Identificador}'>${dato.titulo}</a></li>`;
                            });

                            let cabecera = document.querySelector("header");
                            difumina(cabecera);
                            cabecera.classList.add("menu-activo"); // Agrega una clase al header cuando el menú está activo
                        });
                });

                cabecera.prepend(instancia);
            });

            // Cierra el menú si el cursor se mueve fuera del header
            let header = document.querySelector("header");
            header.addEventListener("mouseleave", function () {
                cerrarSupermenu();
            });

            // Cierra el menú si el cursor entra en el logo, Blog o Contacto
            let logo = document.querySelector("#logo");
            let menu = document.querySelector("#segundomenu");

            [logo, menu].forEach(el => {
                el.addEventListener("mouseenter", function () {
                    cerrarSupermenu();
                });
            });
        })
        .catch(error => {
            console.warn("Error al cargar las categorías:", error);
            document.querySelector("#contienemodal").style.display = "block";
        });
}

function difumina(cabecera) {
    console.log("Has entrado");
    document.querySelector("main").classList.add("difuminado");
    document.querySelector("header").classList.add("grande");
}

// Función para cerrar el supermenú
function cerrarSupermenu() {
    console.log("Cerrando supermenú");
    document.querySelector("main").classList.remove("difuminado");
    document.querySelector("header").classList.remove("grande", "menu-activo");
}

document.addEventListener("DOMContentLoaded", function () {
    procesaCabecera();
});

