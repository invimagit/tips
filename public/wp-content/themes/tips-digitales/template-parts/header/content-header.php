<?php 
	$grupo_header	= get_field('grupo_header', 'option');
?>

<!-- .site-branding -->
<div class="site-branding container-fluid">
	<div class="header-logos px-lg-2 py-2">
		<div class="row">
	    	<div class="col-lg-3">
	  			<div class="logo">
		      		<img src="<?php echo $grupo_header['logo_gobierno']; ?>" class="">
		      	</div>
	    	</div>
	    </div>
	</div>
</div><!-- .site-branding -->

<!-- Navigation -->
<nav class="navbar navbar-expand-lg site-navbar container-fluid">
  	<div class="header-navbar px-lg-2">
	    <div class="row">
			<button class="navbar-toggler navbar-toggler-fixed collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas1" aria-controls="offcanvas1" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'your-theme-slug' ); ?>">
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			</button>

			<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas1" aria-labelledby="offcanvasExampleLabel">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
					<button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
				    <div class="col-md-12">
				    	<?php
							wp_nav_menu( array(
								'theme_location'  => 'primary',
								'depth'	          => 1, // 1 = no dropdowns, 2 = with dropdowns.
								'menu_class'      => 'navbar-nav menu-header px-md-3',
								'before'		  => '<i class="fa fa-circle" aria-hidden="true"></i>',
								'fallback_cb'     => 'MyNavwalker::fallback',
								'walker'          => new MyNavwalker(),
							) );

							wp_nav_menu( array(
								'theme_location'  => 'cursos',
								'menu_id'		  => 'menu-cursos-mobile',
								'depth'	          => 2, // 1 = no dropdowns, 2 = with dropdowns.
								'menu_class'      => 'navbar-nav menu-header px-md-3 py-md-2 d-lg-none',
								'fallback_cb'     => 'MyNavwalker::fallback',
								'walker'          => new MyNavwalker(),
							) );

							wp_nav_menu( array(
								'theme_location'  => 'secondary',
								'depth'	          => 1, // 1 = no dropdowns, 2 = with dropdowns.
								'menu_class'      => 'navbar-nav menu-header px-md-3 py-md-2 d-lg-none',
								'fallback_cb'     => 'MyNavwalker::fallback',
								'walker'          => new MyNavwalker(),
							) );
						?>
						<div class="menu-menu-header-participae-container">
							<ul id="menu-menu-header-participae" class="navbar-nav menu-header px-md-3 py-md-2 d-lg-none">
								<li id="menu-item-participae" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-104 nav-item menu-derecha-item-circle text-lg-end">
									<a itemprop="url" href="<?php echo $grupo_header['pagina_quiero_participar']; ?>" class="nav-link">
										<span itemprop="name">Quiero Participar</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
	            </div>
	        </div>
	    </div>
 	</div>
</nav>
<!-- Navigation -->

<!-- .site-branding -->
<div class="site-branding-tips container-fluid">
	<div class="header-logos px-lg-2">
		<div class="row">
	    	<div class="col-md-5">
	  			<div class="logo">
		      		<img src="<?php echo $grupo_header['logo_tips']; ?>" class="img-fluid">
		      	</div>
	    	</div>

	    	<div class="col-md-7">
    			<div class="row">
		  			<div class="col-md-12 logo-escudos">
			      		<img src="<?php echo $grupo_header['logo_escudos']; ?>" class="img-fluid">
			      	</div>

				    <div class="menu-derecha-header col-md-12 d-none d-lg-block">
				    	<?php
							wp_nav_menu( array(
								'theme_location'  => 'secondary',
								'depth'	          => 1, // 1 = no dropdowns, 2 = with dropdowns.
								'menu_class'      => 'navbar-nav menu-header float-end',
								'after'			  => '<i class="fa fa-circle" aria-hidden="true"></i>',
								'fallback_cb'     => 'MyNavwalker::fallback',
								'walker'          => new MyNavwalker(),
							) );
						?>
					</div>
	    		</div>
	    	</div>
	    </div>
	</div>
</div>
<!-- .site-branding -->

<!-- Navigation cursos-->
<nav class="site-navbar-cursos container-fluid justify-content-between d-none d-lg-block">
  <div class="header-navbar-cursos px-lg-2">
    <div id="navbar-collapse-2" class="row">
		<div class="col-md-10">
			<div class="row">
				<div class="col-md-9">
				    <?php
						wp_nav_menu( array(
								'theme_location'  => 'cursos',
								'depth'	          => 2, // 1 = no dropdowns, 2 = with dropdowns.
								'menu_id'		  => 'menu-cursos-web',
								'menu_class'      => 'menu-header-cursos py-2 list-unstyled',
								'fallback_cb'     => 'MyNavwalker::fallback',
								'walker'          => new MyNavwalker(),
						) );
					?>
				</div>
			    <div class="col-md-3">
			        <form method="get" class="search-form" id="searchForm" onsubmit="wpSearch(event);">
						<div class="input-group">
							<div class="form-outline col-md-11">
								<input class="form-control border-end-0 border rounded-pill searchElement" id="search" type="search" name="s" placeholder="Buscar..." value="<?php the_search_query(); ?>"/>
							</div>
							<div class="form-outline col-md-1">
								<button type="button" class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill searchElement">
						  			<i class="fa fa-search"></i>
						  		</button>
						  	</div>
						</div>
          			</form>
	      		</div>
		  	</div>
	  	</div>

	    <div class="col-md-2">
	    	<div class="btn-quiero-participar float-end">
	    		<a href="<?php echo $grupo_header['pagina_quiero_participar']; ?>">
		    		<img src="<?php echo $grupo_header['img_quiero_participar']; ?>" class="img-fluid">
		    	</a>
	    	</div>
	    </div>
    </div>
  </div>
</nav>
