<?php
    $ancho = get_field('ancho_contenedor_timeline');

    if($ancho == '100')
      $ancho = 'col-md-12 col-12';
    else if($ancho == '90')
      $ancho = 'col-lg-10 col-md-12 col-12';
    else if($ancho == '80')
      $ancho = 'col-lg-9 col-md-12 col-12';
    else if($ancho == '70')
      $ancho = 'col-lg-8 col-md-12 col-12';
    else if($ancho == '60')
      $ancho = 'col-lg-7 col-md-12 col-12';
    else if($ancho == '50')
      $ancho = 'col-lg-6 col-md-12 col-12';
    else if($ancho == '40')
      $ancho = 'col-lg-5 col-md-12 col-12';
    else if($ancho == '30')
      $ancho = 'col-lg-4 col-md-12 col-12';
    else if($ancho == '20')
      $ancho = 'col-lg-3 col-md-12 col-12';
    else if($ancho == '10')
      $ancho = 'col-lg-2 col-md-12 col-12';

?>
    <div class="<?php echo $ancho; ?>">
      <div class="my-2 mb-3 mx-1 px-md-4 pb-3">

        <?php
          if( have_rows('timeline', get_the_ID()) ):
        ?>
            <div class="col container-timeline pt-5">
                <div class="box-timeline">
                    <ul class='timeline'>
                        <?php
                            while ( have_rows('timeline', get_the_ID()) ) : the_row();
                                $dateTemp = get_sub_field('fecha_evento');
                                $fecha = explode(' ', $dateTemp);
                        ?>
                                <li>
                                    <div class="fecha-timeline d-flex">
                                        <div class="titleIcon">
                                            <span class="iconWaterBlue"></span>
                                            <span class="iconWater"></span>
                                        </div>
                                        <div class="fecha-text-timeline">
                                            <h3 class="mb-0"><?php echo $fecha[0]; ?></h3>
                                            <h3 class="mb-0"><?php echo $fecha[1]; ?></h3>
                                        </div>
                                    </div>

                                    <div class="titulo-timeline">
                                        <?php echo get_sub_field('titulo_evento'); ?>
                                    </div>

                                    <div class="descripcion-timeline">
                                        <?php echo get_sub_field('descripcion_evento'); ?>
                                    </div>
                                </li>
                        <?php
                            endwhile;
                        ?>
                    </ul>
                </div>
            </div>
        <?php
            else :
                // no layouts found
            endif;
        ?>
      </div>
    </div>
<?php

?>