<style>
<?php include "cabecera.css" ?>
</style>
<header>
    <div class="contenedor">
        <nav class="menu">
            <ul>
                <template id="elementomenu">
                    <li>
                        <a href=""><h3></h3></a>
                    </li>
                </template>
            </ul>
        </nav>
        <a href="index.php" id="logo"><img src="img/evoluciona.svg"></a>
        <nav id="segundomenu">
            <ul>
                <li>
                    <a href="blog.php">Blog</a>
                </li>
                <li>
                    <a href="contacto.php">Contacto</a>
                </li>
                <li>
                    <?php
                        include "modulos/tienda/artilugio.php";
                    ?>
                </li>
            </ul>
        </nav>
        <div id="supermenu">
            <div class="columna">
                <h3 id="categoria">Cabecera</h3>
                <ul id="productos">
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                </ul>
            </div>
            <div class="columna">
                <h3>Cabecera</h3>
                <ul>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                </ul>
            </div>
            <div class="columna">
                <h3>Cabecera</h3>
                <ul>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                    <li>Elemento</li>
                </ul>
            </div>
        </div>
    </div>
</header>
<script>
<?php include "funciones.js" ?>
</script>
<script>
<?php include "cabecera.js" ?>
</script>