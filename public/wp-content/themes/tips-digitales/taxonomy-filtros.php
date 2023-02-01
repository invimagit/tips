<?php
	$term = get_queried_object();
	$paged = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;
	$posts_per_page = 4;

	if(isset($_GET['keyword']))
	{
		$args = array
		(
			'post_type' 	=> 'biblioteca-tips',
			's' 			=> $_GET['keyword'],
			'relevanssi' 	=> true,
			'order'     	=> 'DESC',
	        'posts_per_page'=> $posts_per_page, 
    	    'paged' 		=> $paged, 
			'fields'        => 'ids',
			'post_status'   => 'publish',
		);
	}
	else
	{
		$args = array
		(
			'post_type' 	=> 'biblioteca-tips',
			'tax_query' 	=> array
			(
				array
				(
				    'taxonomy'	=> 'filtros',
				    'field'		=> 'slug',
				    'terms' 	=> $term->slug,
				    'operator' => 'NOT IN',
				)
			),

			'order'     	=> 'DESC',
	        'posts_per_page'=> $posts_per_page, 
    	    'paged' 		=> $paged, 
			'fields'        => 'ids',
			'post_status'   => 'publish',
		);
	}

    $myPosts = new WP_Query($args);
    
	if(function_exists('relevanssi_do_query'))
		relevanssi_do_query( $myPosts );


	$objectPosts = new stdClass();

	if ( $myPosts->have_posts() )
	{
		$objectPosts->found_posts 	= $myPosts->found_posts;
		$objectPosts->posts_per_page= $posts_per_page;

		$cont = 0;
		$objectPosts->posts = array();

		while ( $myPosts->have_posts() )
		{
			$myPosts->the_post();

			$myPost = get_the_ID();

			$taxonomy = get_the_terms($myPost, 'filtros');

            if($taxonomy)
                $taxName = $taxonomy[0]->name;
            else
                $taxName = 'Biblioteca';

            $objectPosts->posts[$cont]['ID'] = $myPost;
            $objectPosts->posts[$cont]['title'] = get_the_title($myPost);
            $objectPosts->posts[$cont]['descripcion'] = get_field('descripcion', $myPost);
            $objectPosts->posts[$cont]['icono'] = get_field('icono', $myPost);

            $tipoArchivo = get_field('tipo_de_archivo', $myPost);

            $objectPosts->posts[$cont]['tipoArchivo'] = $tipoArchivo;
            switch($tipoArchivo)
            {
            	case 'pdf':
            				$objectPosts->posts[$cont]['archivo'] = get_field('pdf', $myPost);
            				break;

            	case 'video':
            				$objectPosts->posts[$cont]['archivo'] = get_field('video', $myPost);
            				break;

            	case 'audio':
            				$objectPosts->posts[$cont]['caratula'] = get_field('caratula', $myPost);

            				$objectPosts->posts[$cont]['archivo'] = get_field('audio', $myPost);
            				break;

            	case 'imagen':
            				$objectPosts->posts[$cont]['archivo'] = get_field('imagen', $myPost);
            				break;
            }

			$objectPosts->posts[$cont]['taxName'] = $taxName;

			$cont++;
		}
	}
    else
    {
    	$objectPosts->found_posts 	= 0;
		$objectPosts->posts_per_page= 0;

    	$objectPosts->posts 		= false;
    }

	wp_reset_postdata();

    echo json_encode($objectPosts);
?>