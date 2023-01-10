<?php
  $contBloques = 1;
?>
<div class="container-fluid">
  <div class="row m-2">
    <div class="col-12">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
        <div class="col-12 mb-3 px-2">
          <?php
            if( have_rows('equipos', get_the_ID()) ):
              $cont = 1;
              while ( have_rows('equipos', get_the_ID()) ) : the_row();
                get_template_part('src/PostTypes/Secciones/views/content', 'accordeon',array('ID' => $cont) );
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
</div>
<?php

?>