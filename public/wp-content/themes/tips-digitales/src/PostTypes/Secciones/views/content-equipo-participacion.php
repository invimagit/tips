<?php
  require_once(SRC_PATH . 'BlocksContainer/MyBlocksContainer.php');
  $container = new MyBlocksContainer();
?>
<div class="container-fluid">
  <div class="row mx-3 my-2">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
      <div class="row mb-3 px-md-4 px-4 pb-3">
        <?php
          if( have_rows('equipos', get_the_ID()) ):
            $cont = 1;
            while ( have_rows('equipos', get_the_ID()) ) : the_row();
              $container->views_blocks_container('ContenedorDependencias', array('ID' => $cont));
              $cont++;
            endwhile;
          else :
              // no layouts found
          endif;
        ?>
      </div>
    </div>
  </div>
</div>
<?php

?>