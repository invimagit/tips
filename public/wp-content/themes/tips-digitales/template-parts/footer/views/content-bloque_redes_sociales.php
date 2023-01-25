<?php
	$transientName = 'footer_' . $args;

	$data = get_transient($transientName);

    if (false === $data):
		ob_start();
?>
		<div class="col">
			<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
			<div class="bloque_datos">
				<?php
		        	if( have_rows('redes') ):
					    while ( have_rows('redes') ) : the_row();
				?>
				    	<span class="icono_redes_bloque_datos col-md-3">
							<a href="<?php echo get_sub_field('link');?>" target="_blank">
								<?php echo get_sub_field('icono');?>
							</a>
				    	</span>
				<?php
						endwhile;
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