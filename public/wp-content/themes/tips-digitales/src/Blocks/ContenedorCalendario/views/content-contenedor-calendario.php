<?php
    $ancho = get_field('ancho_contenedor_calendario');

    $hasFilters = get_field('utiliza_filtros_contenedor_calendario');

    if($hasFilters == 'si')
    {
        $tipoFilters = get_field('tipos_de_filtros_contenedor_calendario');

        $tax = get_field('filtros_contenedor_calendario');

        $filtros = json_encode($tax);
    }
    else
    {
        $filtros = false;
    }

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
                if($hasFilters == 'si' && $tipoFilters == "selector"):
            ?>
                    <div class="selector-filtros">
                    </div>
            <?php
                endif;
            ?>
            <div class="container-calendario px-3 pt-2 pb-5" id='calendar' data-filters="<?php echo $filtros; ?>"></div>

            <span class="container-calendario-info">Haz click sobre la fecha para tener toda la información</span>
        </div>
    </div>

    <div class="modal modal-calendario" id="modalEvents" data-toggle="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content modal-content-calendario">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body modal-body-calendario px-4 py-4">
                    <div class="events-container">
                        <h3 class="modal-title-calendario title py-2"></h3>

                        <h6 class="accent modal-subtitle-calendario mb-0">
                            Descripción
                        </h6>

                        <p class="accent modal-descripcion-calendario my-1"></p>

                        <h6 class="accent modal-subtitle-calendario mb-0">
                            Dirección
                        </h6>
                        <p class="accent modal-direccion-calendario my-1">
                        </p>

                        <div class="row borderBottom">
                            <div class="col-7">
                                <h6 class="accent modal-subtitle-calendario mb-0">
                                    Fecha
                                </h6>
                                <p class="accent modal-fecha-calendario my-1">
                                </p>

                            </div>
                            <div class="col-5 col-5 my-auto">
                              <input class="wpcf7-form-control button-tips btn btn-primary p-1 m-1 col-12 col-sm-12 col-md-12" type="button" value="Quiero asistir" onclick="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>