<?php
/*
Este archivo representa la vista del módulo de destacados. Se encarga de mostrar contenido 
destacado dentro del sitio web, como productos, artículos o secciones importantes. Utiliza 
plantillas HTML para estructurar los elementos dinámicamente.
*/
?>
<style>
    <?php include "destacados.css" ?>
</style>
<section id="destacados">
    <template id="plantilladestacado">
        <article>
            <h3>Título</h3>
            <h4>Frase de Marketing</h4>
            <button>Call to action 1</button>
            <button>Call to action 2</button>
        </article>
    </template>
</section>
<script>
    <?php include "./modulos/destacados/control/destacados.js" ?>
</script>