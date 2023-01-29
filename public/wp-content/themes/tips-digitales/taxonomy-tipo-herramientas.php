<?php
	$term = get_queried_object();
	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

	if(isset($_GET['keyword']))
	{
		$args = array
		(
			'post_type' 	=> 'herramientas',
			's' 			=> $_GET['keyword'],
			'relevanssi' 	=> true,
			'order'     	=> 'ASC',
			'posts_per_page'=> -1,
			'fields'        => 'ids',
			'post_status'   => 'publish',
		);
	}
	else
	{
		$args = array
		(
			'post_type' 	=> 'herramientas',
			'tax_query' 	=> array
			(
				array
				(
				    'taxonomy'	=> 'tipo-herramientas',
				    'field'		=> 'slug',
				    'terms' 	=> $term->slug,
				)
			),

			'order'     	=> 'ASC',
			'posts_per_page'=> -1,
			'fields'        => 'ids',
			'post_status'   => 'publish',
		);
	}

    $myPosts = new WP_Query( $args );

	$objectPosts = new stdClass();

	if ( $myPosts->have_posts() )
	{
		$objectPosts->found_posts 	= $myPosts->found_posts;
		
		$cont = 0;
		$objectPosts->posts = array();

		while ( $myPosts->have_posts() )
		{
			$myPosts->the_post();

			$myPost = get_the_ID();

			$taxonomy = get_the_terms($myPost, 'tipo-herramientas');

            if($taxonomy)
                $taxName = $taxonomy[0]->name;
            else
                $taxName = 'Herramienta';

            $objectPosts->posts[$cont]['ID'] = $myPost;
            $objectPosts->posts[$cont]['title'] = get_the_title($myPost);
            $objectPosts->posts[$cont]['descripcion'] = get_field('descripcion', $myPost);
            $objectPosts->posts[$cont]['imagen'] = get_field('imagen', $myPost);
            $objectPosts->posts[$cont]['archivo'] = get_field('archivo', $myPost);			
			$objectPosts->posts[$cont]['taxName'] = $taxName;

			$cont++;
		}
		wp_reset_postdata();
	}
    else
    {
    	$objectPosts->found_posts 	= 0;
    	$objectPosts->posts 		= false;
    }

    echo json_encode($objectPosts);
?>