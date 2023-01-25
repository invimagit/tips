<?php
	$transientName = 'footer_' . $args . '_temporal';

	$data = get_transient($transientName);

    if (false === $data):
		ob_start();
?>
		<div class="col">
			<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
			<div class="bloque_datos">
				<?php
					$paginas = get_sub_field('paginas');
		        	if( $paginas ):
						foreach( $paginas as $pagina ): 
							
							if($pagina["pagina_externa"] == "si")
							{
								$urlPage = $pagina["link"];
								$target = 'target="_blank"';
							}
							else
							{
								$urlPage = $pagina["pagina"];
								$target = '';
							}
				?>
					    	<span class="descripcion_bloque_datos">
					    		<a href="<?php echo $urlPage; ?>" <?php echo $target; ?>><?php echo $pagina["titulo"]; ?></a>
					    	</span>
				<?php
						endforeach;
					endif;
				?>
			</div>
		</div>
<?php
		$data = ob_get_clean();
		echo $data;

        try
        {
            set_transient($transientName, $data, 86400 );
        }
        catch (Exception $e)
        {
            $data = false;
        }
    else:
    	echo $data;
	endif;
?>