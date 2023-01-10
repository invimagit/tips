<?php 
  $grupo_multimedia = get_field('grupo_multimedia', 'option');

  if($grupo_multimedia['mostrar_contenedor'] == 'si'):
?>
      <!-- Modal -->
      <div class="modal fade modal-multimedia" id="modalMultimedia" tabindex="-1" role="dialog" aria-labelledby="modalMultimediaLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div id="yt-player" class="modal-body border-0">
              <div class="video">
                  <?php

                      if($grupo_multimedia['insertar_video_de_youtube'] == "si"):
                        echo $grupo_multimedia['contenedor_youtube'];
                      else:
                  ?>
                          <video width="w-100" style="border-radius: 15px;" id="modalMultimediaVideo" preload controls>
                              <source src="<?php echo $grupo_multimedia['subir_video']; ?>" type="video/mp4">
                          </video>
                  <?php
                      endif;
                  ?>
              </div>

              <div class="titulo">
                <span><?php echo $grupo_multimedia['titulo']; ?></span>
              </div>
              <div class="descripcion">
                <span><?php echo $grupo_multimedia['descripcion']; ?></span>
              </div>
            </div>
            <div class="modal-botones border-0 row">
              <?php
                if( have_rows('contenedor_botones', 'option') ):
                  while ( have_rows('contenedor_botones', 'option') ) : the_row();
                    if( get_row_layout() == 'boton_si' ):
                      ?>
                        <div class="col-md-12 col-lg-6">
                          <button type="button" class="btn btn-multimedia btn-multimedia-si btn-sm" id="btn-multimedia-si"><?php echo get_sub_field('titulo_boton'); ?></button>
                        </div>
                      <?php
                    elseif( get_row_layout() == 'boton_no' ):
                      ?>
                        <div class="col-md-12 col-lg-6">
                          <button type="button" class="btn btn-multimedia btn-multimedia-no btn-sm" data-bs-dismiss="modal"><?php echo get_sub_field('titulo_boton'); ?></button>
                        </div>

                      <?php
                    endif;
                  endwhile;
                endif;
              ?>
            </div>
          </div>
        </div>
      </div>
<?php
  endif;
?>
<script>
  var showModalMultimedia = '<?php echo $grupo_multimedia['mostrar_contenedor']; ?>';
</script>