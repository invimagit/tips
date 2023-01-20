<?php
?>
    <div class="container-fluid">

        <div class="row">
            <div class="col-6 mx-auto mb-5">
                <div id='calendar'></div>
            </div>
        </div>


        <div class="modal modal-calendario" id="modalEvents" data-toggle="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content modal-content-calendario">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body modal-body-calendario px-4 py-4">
                        <h3 class="modal-title-calendario title pb-1">Nombre del evento</h3>

                        <h6 class="accent modal-subtitle-calendario mb-0">
                            Descripción
                        </h6>
                        <p class="accent modal-descripcion-calendario my-1">
                            Pedagogía sobre derecho con niños, niñas y adolescentes en el barrio X y Z, máximo dos
                            lineas de texto este parrafo.
                        </p>
                        <h6 class="accent modal-subtitle-calendario mb-0">
                            Dirección
                        </h6>
                        <p class="accent modal-descripcion-calendario my-1">
                            Calle 1 2#-3 abc , barrio Santa Teresita
                        </p>

                        <div class="row borderBottom">
                            <div class="col-7">
                                <h6 class="accent modal-subtitle-calendario mb-0">
                                    Fecha
                                </h6>
                                <p class="accent modal-descripcion-calendario my-1">
                                    25 de agosto de 2001 9:00 a.m.
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
