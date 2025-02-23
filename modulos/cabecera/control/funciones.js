/*
Este archivo contiene funciones auxiliares utilizadas en el módulo de cabecera. 
Incluye utilidades para manipular el DOM, gestionar efectos visuales y manejar 
eventos relacionados con la navegación.
*/
function difumina(cabecera){                                                // Cuando entro
    console.log("Has entrado")
    document.querySelector("main").classList.add("difuminado")                    // Le añado una clase css
    document.querySelector("header").classList.add("grande")
}