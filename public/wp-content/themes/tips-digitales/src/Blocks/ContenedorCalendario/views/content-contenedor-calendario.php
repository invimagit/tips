<?php
?>
    <div class="container-fluid">

        <div class="row">
            <div class="col-8">
                <div id='calendar'></div>
            </div>
        </div>


        <div class="modal" id="modalEvents" data-toggle="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <div class="modal-body">
                        <h5 class="modal-title title"><b> Nombre</b> del evento</h5>
                        <button type="button" class="close closeModal btnIconClose" onclick="closeModal()"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <br>

                        <h6 class="accent mb-0">
                            Descripción
                        </h6>
                        <p>
                            Pedagogía sobre derecho con niños, niñas y adolescentes en el barrio X y Z, máximo dos
                            lineas de texto este parrafo.
                        </p>
                        <h6 class="accent mb-0">
                            Dirección
                        </h6>
                        <p>
                            Calle 1 2#-3 abc , barrio Santa Teresita
                        </p>
                        <div class="row">
                            <div class="col-8">
                                <h6 class="accent mb-0">
                                    Fecha
                                </h6>
                                <p>
                                    25 de agosto de 2001 9:00 a.m.
                                </p>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-primary mt-2">Quiero asistir</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
