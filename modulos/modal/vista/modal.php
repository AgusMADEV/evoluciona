<?php
/*
Este archivo representa la vista del módulo de modal. Se encarga de mostrar ventanas emergentes 
dentro del sitio web, utilizadas para notificaciones, formularios o información adicional sin 
necesidad de redirigir al usuario a otra página.
*/
?>
<style>
<?php include "modal.css" ?>
</style>
<div id="contienemodal">
    <div id="modal">
        <img src="img/warning.png">
        <p>Web en mantenimiento - Estaremos con usted de nueve en breve</p> 
    </div>
</div>
<script>
<?php include "./modulos/modal/control/modal.js" ?>
</script>