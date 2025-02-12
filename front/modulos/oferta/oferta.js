fetch("../back/?tabla=oferta") // Cargo un endpoint en el back
.then(response => response.json()) // Convierto la respuesta en JSON
.then(datos => {
    if (datos.length > 0) { // Si hay datos en la respuesta
        let ofertaModulo = document.querySelector("#oferta");
        let texto = ofertaModulo.querySelector("p");
        texto.innerHTML = datos[0].texto + " - <a href=''>Saber más</a>";
        ofertaModulo.style.display = "block"; // Aseguro que esté visible
    } else {
        document.querySelector("#oferta").style.display = "none"; // Oculto el módulo si no hay ofertas
    }
})
.catch(error => console.error("Error al cargar las ofertas:", error));
