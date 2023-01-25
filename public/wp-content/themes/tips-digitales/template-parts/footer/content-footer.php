<?php 
	$grupo_footer	= get_field('grupo_footer', 'option');
?>

<div class="site-info-data container-fluid">
	<div class="footer-logo px-lg-1 py-2">
		<div class="row">
	    	<div class="col-lg-1">
	  			<div class="logo-footer-izq">
		      		<img src="<?php echo $grupo_footer['logo_footer']; ?>" class="img-fluid" alt="Logo Salud A Mi Barrio">
		      	</div>
	    	</div>

	    	<div class="col-lg-9">
	  			<div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 px-md-2 py-2">
					<?php
						if( have_rows('bloque_de_datos', 'option') ):
						    while ( have_rows('bloque_de_datos', 'option') ) : the_row();
						    	$layouts = get_row_layout();
						    	$transientName = $layouts . '_' . get_row_index();

								get_template_part('template-parts/footer/views/content', $layouts, $transientName);
						    endwhile;
						else :
						    // no layouts found
						endif;
					?>
		      	</div>
	    	</div>

	    	<div class="col-lg-2">
	  			<div class="logo-footer-der">
		      		<img src="<?php echo $grupo_footer['logo_alcaldia']; ?>" class="img-fluid" alt="Logo Alcaldia de Bogotá">
		      	</div>
	    	</div>
	    </div>
	</div>
</div><!-- .site-info-data -->

<div class="site-info-logo container-fluid">
	<div class="footer-logo px-lg-3 py-1">
		<div class="row">
	    	<div class="col-lg-2">
	  			<div class="logo-footer-gov">
		  			<a href="<?php echo $grupo_footer['link_gobierno']; ?>" target="_blank">
		      			<img src="<?php echo $grupo_footer['logo_gobierno']; ?>" class="img-fluid" alt="Logo Gobierno de Colombia">
			      	</a>
		      	</div>
	    	</div>
	    </div>
	</div>
</div><!-- .site-info-logo -->
