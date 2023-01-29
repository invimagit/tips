<div class="container-vista-inmersiva-multimedia">
	<div class="video">
	  	<?php
	  		$videoYoutube = get_sub_field('insertar_video_de_youtube', $args['ID']);

	    	if($videoYoutube == "si"):
	    		echo get_sub_field('contenedor_youtube', $args['ID']);
	      	else:
	  	?>
	         	<video width="100%" height="400px" style="border-radius: 15px;" preload controls>
	            	<source src="<?php echo get_sub_field('subir_video', $args['ID']); ?>" type="video/mp4">
	          	</video>
	  	<?php
	      	endif;
	  	?>
	</div>
</div>