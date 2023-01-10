<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package TIPS_Digitales
 */

get_header();
?>

<main id="main" role="main">
    <div class="container-fluid">
        <div class="row">
        	<div class="col-md-12">
	            <?php 
	                if (have_posts()) : 
	                    while (have_posts()) : the_post();
	                        get_template_part( 'template-parts/content', 'page-index' );
	                    endwhile; 
	                endif; 
	            ?>
	        </div>
        </div>
    </div>
</main>
<?php get_footer();
