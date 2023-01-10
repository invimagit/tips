          <div class="col-md-4 col-12 accordion px-md-5 px-2" id="accordion_<?php echo $args['ID']; ?>">
            <div class="accordion-item p-0">
              <div class="accordion-header datos-curso-accordion" id="">
                <button class="accordion-button-participantes accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo $args['ID']; ?>" aria-expanded="false" aria-controls="collapse<?php echo $args['ID']; ?>">
                  <?php echo get_sub_field('titulo'); ?>
                </button>
              </div>
              <div class="accordion-collapse-cursos">
                <div id="collapse<?php echo $args['ID']; ?>" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion_<?php echo $args['ID']; ?>" style="">
                  <div class="accordion-body accordion-descripcion-cursos mt-3 mb-2 px-2">
					<?php
					    if( have_rows('participantes') ):
							while ( have_rows('participantes') ) : the_row();
					?>
			                    <button type="button" class="list-group-item list-group-item-action">
			                    	<?php echo get_sub_field('nombre'); ?>
			                    </button>
				    <?php
							endwhile;
						endif;
					?>
                  </div>
                </div>
              </div>
            </div>
          </div>