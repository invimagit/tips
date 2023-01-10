<div class="col">
	<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
	<div class="bloque_datos">
		<?php
			$paginas = get_sub_field('paginas');
        	if( $paginas ):
				foreach( $paginas as $pagina ): 
					
					if($pagina["pagina_externa"] == "si")
						$urlPage = $pagina["link"];
					else
						$urlPage = $pagina["pagina"];
		?>
			    	<span class="descripcion_bloque_datos">
			    		<a href="<?php echo $urlPage; ?>"><?php echo $pagina["titulo"]; ?></a>
			    	</span>
		<?php
				endforeach;
			endif;
		?>
	</div>
</div>
