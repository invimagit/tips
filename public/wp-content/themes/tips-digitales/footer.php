<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TIPS_Digitales
 */
?>

	<footer id="colophon" class="site-footer">
		<?php get_template_part('template-parts/footer/content', 'footer'); ?>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<?php
    require_once(SRC_PATH . 'BlocksContainer/MyBlocksContainer.php');

    $container = new MyBlocksContainer();

    if(is_home() || is_front_page())
        $container->views_blocks_container('ContenedorMultimedia');

    if(is_singular('cursos'))
        $container->views_blocks_container('ContenedorFormulario');

    if(is_page('iniciar-sesion'))
    {
        $container->views_blocks_container('Register');
        $container->views_blocks_container('RecoverPass');
    }
?>

</body>
</html>
