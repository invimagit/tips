<?php
    require_once(SRC_PATH . 'Blocks/ContenedorCajaHerramientas/MyContenedorCajaHerramientas.php');

    $herramientas = new MyContenedorCajaHerramientas();

    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $keyword = (get_query_var('search')) ? get_query_var('search') : '';

    $temp = $herramientas->get_herramientas('herramientas', $paged, $keyword);
?>
    <div class="container-fluid px-md-5" id="herramientasContainer" data-search="<?php echo ($keyword == '') ? 'false' : 'true'; ?>">
        <div class="row">
            <div class="col-md-5">
                <form method="get" action="<?php echo get_the_permalink(); ?>" class="search-form py-2" id="searchFormHerramientas">
                    <div class="input-group pb-3">
                        <div class="form-outline col-md-11">
                            <input class="form-control border-end-0 border rounded-pill searchElement" id="searchHerramientas" type="search" name="search" placeholder="Buscar..." value="<?php echo esc_attr(get_search_query()); ?>">
                        </div>
                        <div class="form-outline col-md-1">
                            <button type="submit" class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill searchElement">
                            <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>

                                <div class="alert alert-danger alert-search form-outline col-md-12 fade show" data-visible="false" role="alert">
                                  Ingrese mínimo tres caracteres para realizar la búsqueda
                                </div>

                </form>
            </div>
            <div class="col-md-5">
            </div>
            <div class="col-md-2">
                <?php
                    $hasBoton =get_field('agregar_boton_biblioteca_tips');

                    if($hasBoton == 'si'):
                        $buttonClass = 'btn btn-primary p-1 my-1 boton_pagination_cursos';

                        $aditionalClass = get_field('clase_adicional_biblioteca_tips');

                        if($aditionalClass != ''):
                            $buttonClass .= ' ' . $aditionalClass;
                        endif;
                ?>
                        <div class="col-md-12">
                            <a class="<?php echo $buttonClass; ?>" aria-disabled="true" href="<?php echo get_field('pagina_destino_biblioteca_tips', get_the_ID()); ?>">
                                <?php echo get_field('titulo_boton_biblioteca_tips', get_the_ID()); ?>
                                <i class="fa fa-chevron-right icono-btn-cursos-der"></i>
                                <span class="separator-btn-cursos-der"></span>
                            </a>
                        </div>
                <?php
                    endif;
                ?>
            </div>
        </div>

        <div class="row">
            <?php
                if($keyword == '')
                    $keyword = 'false';

                if($temp->found_posts > 0):
                    if($keyword != 'false'):
            ?>
                        <div class="col-md-12 mb-4 mt-1">
                            <div class="">
                                <span class="title-secciones">Hemos encontrado (<?php echo $temp->found_posts; ?>) resultados para </span><span class="title-secciones highlightSearch">"<?php echo $keyword; ?>"</span>
                            </div>
                        </div>
            <?php
                    endif;

                    foreach($temp->posts as $herramienta):
            ?>
                        <div class="col-12 col-md-6 mb-4 mt-1 herramientaItem">
                            <div class="d-flex">
                                <span class="iconInfo me-2"></span>
                                <h3 class="tipo-herramientas"><?php echo $herramienta->taxName; ?></h3>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-9 col-md-8">
                                    <h3 class="titulo-herramientas px-3"><?php echo $herramienta->title; ?></h3>
                                    <div class="descripcion-herramientas px-3"><?php echo $herramienta->descripcion; ?>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 col-md-4 mt-md-2 mt-4 d-block mx-auto">
                                    <div class="download-file">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-herramientas-<?php echo $herramienta->ID; ?>" data-file="<?php echo $herramienta->archivo; ?>">
                                            <img src="<?php echo $herramienta->icono; ?>" class="img-fluid d-block mx-auto">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            <?php
                    endforeach;
                else:
            ?>
                <div class="col-md-12 mb-4 mt-1">
                    <div class="px-md-4 px-2">
                        <span class="title-secciones">Lo sentimos, no encontramos resultados para </span><span class="title-secciones highlightSearch"><?php echo $keyword; ?></span>
                    </div>
                </div>
            <?php
                endif;
            ?>
        </div>

        <div class="modales">
          <?php
            if($temp->found_posts > 0):
              foreach ($temp->posts as $herramienta):
          ?>
                <div class="modal modal-herramientas" id="modal-herramientas-<?php echo $herramienta->ID; ?>" aria-labelledby="modal-herramientas-<?php echo $herramienta->ID; ?>Label" tabindex="-1">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header py-1">
                        <div class="container-fluid">
                          <div class="col-md-12 pb-0">
                            <button type="button" class="btn-close buttonClose-modal-herramientas" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="col-md-12 pt-4">
                            <div class="row">
                              <div class="col-lg-9 col-12">
                                <div class="d-flex">
                                  <span class="iconInfo me-2"></span>
                                  <h3 class="tipo-herramientas">
                                    <?php echo $herramienta->taxName; ?>
                                  </h3>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-8">
                                        <h3 class="titulo-herramientas px-3"><?php echo $herramienta->title; ?></h3>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="modal-body modal-body-herramienta py-2">
                        <div class="container-vista-inmersiva-herramienta">
                            <?php
                                if($herramienta->tipoArchivo == 'audio')
                                    $caratula = $herramienta->caratula;
                                else
                                    $caratula = '';

                                get_template_part('src/Blocks/ContenedorCajaHerramientas/views/content', $herramienta->tipoArchivo . '-inmersivo', array('file' => $herramienta->archivo, 'caratula' => $caratula));
                            ?>
                        </div>
                      </div>

                      <div class="modal-footer py-1">
                        <div class="col-md-12">
                            <a href="<?php echo $herramienta->archivo; ?>" class="d-block mx-auto wpcf7-form-control button-tips btn btn-primary p-1 m-1 col-md-4" download>Descargar</a>
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

        <div class="row">
            <?php
                if($temp->found_posts > $temp->posts_per_page):
                    $paginas = $temp->found_posts / $temp->posts_per_page;
                    $paginas = ceil($paginas);

                    $actualURL = get_the_permalink();

                    if($paged > 1)
                        $beforePage = $actualURL . 'pagina/' . ($paged - 1) . '/search/' . $keyword . '/';
                    else
                        $beforePage = $actualURL;

                    if($paged < $paginas)
                        $nextPage = $actualURL . 'pagina/' . ($paged + 1) . '/search/' . $keyword . '/';
                    else
                        $nextPage = $actualURL;
            ?>
                    <div class="col-md-12 pt-5">
                        <ul class="pagination pagination-lg justify-content-center">
                            <li class="page-item <?php echo ($paged > 1) ? '' : 'disabled'; ?>"><a class="page-link" href="<?php echo $beforePage; ?>"><</a></li>
                                <?php
                                    for($i=1; $i<=$paginas; $i++):
                                        $nextURL = $actualURL . 'pagina/' . $i . '/search/' . $keyword . '/';
                                ?>
                                        <li class="page-item <?php echo ($paged == $i) ? 'active' : ''; ?>"><a class="page-link" href="<?php echo $nextURL ; ?>"><?php echo $i; ?></a></li>
                                <?php
                                    endfor;
                                ?>
                            <li class="page-item <?php echo ($paged < $paginas) ? '' : 'disabled'; ?>"><a class="page-link" href="<?php echo $nextPage; ?>">></a></li>
                        </ul>
                    </div>
            <?php
                endif;
            ?>
        </div>
    </div>