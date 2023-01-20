<?php 

?>
    <div class="container-fluid">
        <div class="row mx-3 my-5">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <div class="title-secciones-icon px-md-4 px-2">
                    <span class="iconWaterBlue"></span>
                    <span class="iconWater"></span>
                </div>

                <h1 class="title-secciones px-md-4 px-2"><?php echo get_the_title(); ?></h1>
                <div class="descripcion-secciones pt-3 px-md-4 px-2">
                    <?php echo get_field('descripcion', get_the_ID()); ?>
                </div>
                <div class="row px-md-4 px-2 mt-5">
                    <?php
                        // check if the flexible content field has rows of data
                        if( have_rows('contenedor_botones', get_the_ID()) ):
                            // loop through the rows of data
                            $numrows = count( get_field( 'contenedor_botones' ) );

                            if($numrows == 1)
                                $buttonCols = 'col-lg-8 col-md-12';
                            elseif($numrows == 2)
                                $buttonCols = 'col-lg-6 col-md-12';

                            $cont = 0;
                            while ( have_rows('contenedor_botones', get_the_ID()) ) : the_row();
                                // check current row layout
                                $cont++;
                                if( get_row_layout() == 'boton_izquierda' ):
                                    $buttonClass = "btn btn-primary p-1 my-1 boton_pagination_cursos";

                                    $aditionalClass = get_sub_field('clase_adicional', get_the_ID());

                                    if($aditionalClass != '')
                                        $buttonClass .= ' ' . $aditionalClass;
                    ?>
                                    <div class="<?php echo $buttonCols; ?>">
                                        <a class="<?php echo $buttonClass; ?>" href="<?php echo get_sub_field('pagina_destino', get_the_ID()); ?>">
                                            <i class="fa fa-chevron-left icono-btn-cursos-izq"></i>
                                            <span class="separator-btn-cursos-izq"></span>
                                            <?php echo get_sub_field('titulo_boton', get_the_ID()); ?>
                                        </a>
                                    </div>
                    <?php
                                elseif( get_row_layout() == 'boton_derecha' ):
                                    $buttonClass = "btn btn-primary p-1 my-1 boton_pagination_cursos";

                                    $aditionalClass = get_sub_field('clase_adicional', get_the_ID());

                                    if($aditionalClass != '')
                                        $buttonClass .= ' ' . $aditionalClass;
                    ?>
                                    <div class="<?php echo $buttonCols; ?>">
                                        <a class="<?php echo $buttonClass; ?>" aria-disabled="true" href="<?php echo get_sub_field('pagina_destino', get_the_ID()); ?>">
                                            <?php echo get_sub_field('titulo_boton', get_the_ID()); ?>
                                            <i class="fa fa-chevron-right icono-btn-cursos-der"></i>
                                            <span class="separator-btn-cursos-der"></span>
                                        </a>
                                    </div>
                    <?php
                                endif;
                            endwhile;
                        endif;
                    ?>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <?php
                    if(get_field('agregar_video', get_the_ID()) == "si"):
                ?>
                        <div class="row px-md-4 px-lg-2 px-2">

                            <div class="secciones-video col-md-12 col-sm-12">
                                <?php
                                    if(get_field('insertar_video_de_youtube', get_the_ID()) == "si"):
                                        echo get_field('video_youtube', get_the_ID());
                                    else:
                                ?>
                                        <video width="w-100" style="border-radius: 15px;" controls preload controls>
                                            <source src="<?php echo get_field('subir_video', get_the_ID()); ?>" type="video/mp4">
                                        </video>
                                <?php
                                    endif;
                                ?>
                            </div>
                        </div>
                <?php
                    endif;
                ?>

                <?php
                    if(get_field('agregar_imagenes_cursos', get_the_ID()) == "si"):
                ?>
                        <div class="row px-md-4 px-lg-2 px-2">
                            <?php
                                // check if the flexible content field has rows of data
                                if( have_rows('imagenes', get_the_ID()) ):
                                    // loop through the rows of data
                                    while ( have_rows('imagenes', get_the_ID()) ) : the_row();
                                        $buttonClass = 'col-md-6 col-sm-12 secciones-imagenes';

                                        $aditionalClass = get_sub_field('clase_adicional', get_the_ID());

                                        if($aditionalClass != '')
                                            $buttonClass .= ' ' . $aditionalClass;
                            ?>
                                <div class="<?php echo $buttonClass; ?>">
                                    <a href="<?php echo get_sub_field('pagina_curso', get_the_ID()); ?>">
                                        <img src="<?php echo get_sub_field('imagen', get_the_ID()); ?>" class="secciones-imagenes-image img-fluid rounded"/>
                                        <div class="secciones-imagenes-middle">
                                            <div class="secciones-imagenes-text">Ver más</div>
                                        </div>
                                    </a>
                                </div>

                            <?php
                                    endwhile;
                                endif;
                            ?>
                        </div>
                <?php
                    endif;
                ?>
            </div>
        </div>
    </div>

<?php
    if(get_field('agregar_equipo', get_the_ID()) == 'si')
        get_template_part('src/PostTypes/Secciones/views/content', 'equipo-participacion');

    if(get_field('agregar_timeline', get_the_ID()) == 'si')
    {
        require_once(SRC_PATH . 'BlocksContainer/MyBlocksContainer.php');
        $container = new MyBlocksContainer();

        $container->views_blocks_container('ContenedorTimeline');
    }

    if(get_field('agregar_calendario', get_the_ID()) == 'si')
    {
        require_once(SRC_PATH . 'BlocksContainer/MyBlocksContainer.php');
        $container = new MyBlocksContainer();

        $container->views_blocks_container('ContenedorCalendario');
    }
?>