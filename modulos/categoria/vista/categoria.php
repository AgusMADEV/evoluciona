<?php
/*
Este archivo representa la vista del módulo de categorías. Se encarga de mostrar la lista 
de categorías y sus respectivos productos en la interfaz de usuario. Utiliza plantillas HTML 
para estructurar los elementos dinámicamente.
*/
?>
<main>
    <?php
    include "modulos/bloque/vista/bloque.php";									// Incluyo los bloques
    
    include "config.php"; 															// Conexión a la base de datos
	
		$peticion = "
		SELECT * 
		FROM bloquescategorias
		WHERE categorias_nombre = ".$_GET['cat']."
		;";																					// Creo una petición
		//echo $peticion;
		$resultado = mysqli_query($conexion, $peticion);									// Ejecuto la petición contra el servidor

		while($fila = mysqli_fetch_array($resultado, MYSQLI_ASSOC)){						// Para cada uno de los resultados
			if($fila['tipobloque_tipo'] == "1"){											// Si el bloque es de tipo 1
				$bloque = new BloqueCompleto(
					$fila['titulo'], 
					$fila['subtitulo']
				);																			// Creo una nueva instancia
    		echo $bloque->getBloque();														// Lanzo el html del bloque
			}else if($fila['tipobloque_tipo'] == "2"){										// Si el bloque es de tipo 2
				$bloque = new BloqueCaja(
					$fila['titulo'], 
					$fila['subtitulo']
				);																			// Creo una nueva instancia
    		echo $bloque->getBloque();														// Lanzo el html del bloque
			}else if($fila['tipobloque_tipo'] == "3"){										// Si el bloque es de tipo 3
				$bloque = new BloqueMosaico(
					$fila['titulo'], 
					$fila['subtitulo'],
					$fila['texto'],
					"",
					"",
					["uno","dos","tres","cuatro"]
					);																		// Creo una nueva instancia
    		echo $bloque->getBloque();														// Lanzo el html del bloque
			}
		}
    ?>
</main>
<script>
    <?php include "./modulos/categoria/control/categoria.js"; ?>
</script>
<style>
    <?php 
    	include "categoria.css"; 
    	?>
</style>