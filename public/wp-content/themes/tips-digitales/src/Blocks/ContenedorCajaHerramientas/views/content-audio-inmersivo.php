<div class="container-vista-inmersiva-multimedia">
	<div class="caratula-audio py-3">
		<img src="<?php echo $args['caratula']; ?>" class="secciones-imagenes-image d-block mx-auto rounded" />
	</div>

	<div class="audio">
		<audio preload="none" controls="">
			<source src="<?php echo $args['file']; ?>" type="audio/mpeg">
		</audio>
	</div>
</div>