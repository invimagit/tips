<?php 
	$grupo_footer	= get_field('grupo_footer', 'option');
?>

<div class="site-info-data container-fluid">
	<div class="footer-logo px-lg-1 py-2">
		<div class="row">
	    	<div class="col-lg-1">
	  			<div class="logo-footer-izq">
		      		<img src="<?php echo $grupo_footer['logo_footer']; ?>" class="img-fluid">
		      	</div>
	    	</div>

	    	<div class="col-lg-9">
	  			<div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 px-md-2 py-2">
					<?php
						// check if the flexible content field has rows of data
						if( have_rows('bloque_de_datos', 'option') ):
						 	// loop through the rows of data
						    while ( have_rows('bloque_de_datos', 'option') ) : the_row();
								// check current row layout
						        if( get_row_layout() == 'bloque_informacion' ):
						        	?>
						  				<div class="col">
											<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
											<div class="bloque_datos">
							  					<?php
										        	// check if the nested repeater field has rows of data
										        	if( have_rows('descripciones', 'option') ):
													 	// loop through the rows of data
													    while ( have_rows('descripciones', 'option') ) : the_row();
													    	?>
													    		<span class="descripcion_bloque_datos"><?php echo get_sub_field('descripcion'); ?></span>
													    	<?php
														endwhile;
													endif;
												?>
											</div>
										</div>
									<?php
										elseif( get_row_layout() == 'bloque_paginas' ):
						        	?>
						  				<div class="col">
											<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
												<div class="bloque_datos">
								  					<?php
														$paginas = get_sub_field('paginas');

											        	if( $paginas ):
														 	// loop through the rows of data
															foreach( $paginas as $pagina ): 
														    	?>
														    		<span class="descripcion_bloque_datos">
														    			<a href="<?php echo get_permalink($pagina); ?>"><?php echo get_the_title($pagina); ?></a>
														    		</span>
														    	<?php
															endforeach;
														endif;
													?>
												</div>
										</div>
									<?php
										elseif( get_row_layout() == 'bloque_redes_sociales' ):
						        	?>
						  				<div class="col">
											<span class="titulo_bloque_datos"><?php echo get_sub_field('titulo'); ?></span>
												<div class="bloque_datos">
								  					<?php
											        	if( have_rows('redes') ):
														    while ( have_rows('redes') ) : the_row();
													    	?>
													    	<span class="icono_redes_bloque_datos col-md-3">
																<a href="<?php echo get_sub_field('link');?>">
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
						        endif;				      	

						    endwhile;
						else :
						    // no layouts found
						endif;
					?>
		      	</div>
	    	</div>

	    	<div class="col-lg-2">
	  			<div class="logo-footer-der">
		      		<img src="<?php echo $grupo_footer['logo_alcaldia']; ?>" class="img-fluid">
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
		      		<img src="<?php echo $grupo_footer['logo_gobierno']; ?>" class="img-fluid">
		      	</div>
	    	</div>
	    </div>
	</div>
</div><!-- .site-info-logo -->
