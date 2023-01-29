<?php
    require_once(SRC_PATH . 'Blocks/ContenedorCajaHerramientas/MyContenedorCajaHerramientas.php');

    $herramientas = new MyContenedorCajaHerramientas();

    $temp = $herramientas->get_herramientas('herramientas');
    $url = get_site_url() . '/tipo-herramientas/herramientas';
?>
    <div class="container-fluid">
        <div class="row">
            <form method="get" class="search-form py-2" id="searchFormHerramientas">
                <div class="input-group pb-5">
                    <div class="form-outline col-md-4">
                        <input class="form-control border-end-0 border rounded-pill searchElement" id="searchHerramientas" type="search" name="s" placeholder="Buscar..." value="<?php echo esc_attr(get_search_query()); ?>">
                    </div>
                    <div class="form-outline col-md-1">
                        <button type="submit" class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill searchElement">
                        <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
            </form>
        </div>

        <div class="row" id="herramientasContainer"
        data-url="<?php echo $url; ?>" data-items="<?php echo $temp->found_posts; ?>">
            <div class="data-container row"></div>
            <div class="col-md-12 px-md-5 px-2" id="paginationHerramientas"></div>
        </div>
    </div>