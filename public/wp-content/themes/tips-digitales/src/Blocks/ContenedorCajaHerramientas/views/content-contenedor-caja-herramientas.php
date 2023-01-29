<?php
  $args = array
  (
      'post_type' => 'herramientas',
      'order'     => 'ASC',
      'numberposts'   => 4,
      'fields'        => 'ids',
      'post_status'   => 'publish',
  );

  $myPosts = get_posts($args);

?>
    <div class="container-fluid">
        <?php
            if($myPosts):
                foreach ($myPosts as $myPost):
        ?>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-4 mt-1">
                            <div class="d-flex">
                                <span class="iconInfo me-2"></span>
                                <h3 class="tipo-herramientas">TAXONOMIA AQUI<?php echo get_the_title($myPost); ?></h3>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <h3 class="titulo-herramientas px-3">
                                        <?php echo get_the_title($myPost); ?>
                                    </h3>
                                    <div class="descripcion-herramientas px-3">
                                        <?php echo get_field('descripcion',$myPost); ?>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 mt-md-2 mt-4 d-block mx-auto">
                                    <div class="download-file">
                                        <img src="<?php echo get_field('imagen', $myPost); ?>" class="img-fluid d-block mx-auto"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <?php
                endforeach;
            endif;
        ?>
    </div>