            <?php
                foreach($temp->posts as $herramienta):
            ?>
                    <div class="col-12 col-md-6 mb-4 mt-1 herramientaItem">
                        <div class="d-flex">
                            <span class="iconInfo me-2"></span>
                            <h3 class="tipo-herramientas"><?php echo $herramienta->taxName; ?></h3>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <h3 class="titulo-herramientas px-3"><?php echo $herramienta->title; ?></h3>
                                <div class="descripcion-herramientas px-3"><?php echo $herramienta->descripcion; ?>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mt-md-2 mt-4 d-block mx-auto">
                                <div class="download-file">
                                    <img src="<?php echo $herramienta->imagen; ?>" class="img-fluid d-block mx-auto">
                                </div>
                            </div>
                        </div>
                    </div>
            <?php
                endforeach;
            ?>

            <ul id="pagination-herramientas" class="pagination" data-pages="<?php echo $temp->max_num_pages; ?>" data-url="<?php echo $urlInitial; ?>"></ul>