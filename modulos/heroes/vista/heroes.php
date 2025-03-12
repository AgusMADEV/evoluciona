<?php
/*
Este archivo representa la vista del módulo de héroes. Se encarga de mostrar una sección destacada 
en la parte superior del sitio web, generalmente con un mensaje llamativo, una imagen de fondo y 
posibles botones de llamada a la acción.
*/
?>
<style>
    <?php include "heroes.css" ?>
</style>
<section id="heroes">
    <template id="plantillaheroe">
        <article class="heroe">
            <div id="bloqueheroe">
                <h3>Nombre del Producto</h3>
                <h4>Frase de Marketing</h4>
                <div id="botones">
                    <a href="" id="enlace1">
                        <button id="boton1">Call to action 1</button>
                    </a>
                    <a href="" id="enlace2">
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Learn More</span>
                        </button>
                    </a>
                </div>
            </div>
        </article>
    </template>
</section>
<script>
    <?php include "./modulos/heroes/control/heroes.js" ?>
</script>
