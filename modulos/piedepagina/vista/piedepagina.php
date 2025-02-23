/*
Este archivo representa la vista del módulo de piedepagina. Se encarga de mostrar el contenido relacionado con piedepagina 
dentro del sitio web, permitiendo estructurar la información de manera visual y dinámica.
*/
<style>
    <?php include "piedepagina.css" ?>
</style>
<footer>
    <div class="contenedor">
        <div class="columna">
            <h3>Redes Sociales</h3>
            <ul id="redes">
			</ul>
		</div>
		<div class="columna">
			<h3>Legal</h3>
			<ul>
				<li><a href="pagina.php?pagina=3">Aviso legal</a></li>
				<li><a href="pagina.php?pagina=1">Términos de uso</a></li>
				<li><a href="pagina.php?pagina=2">Política de cookies</a></li>
			</ul>
		</div>
	</div>
</footer>
<script>
    <?php include "./modulos/piedepagina/control/piedepagina.js" ?>
</script>
