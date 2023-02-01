<?php

if (!defined('ABSPATH')) { exit; }

class MyContenedorBiblioteca
{
    private $name       = 'ContenedorBiblioteca';
    private $slug       = 'ContenedorBiblioteca';
    private $post_type  = 'ContenedorBiblioteca';

    public function __construct()
    {
    }

    public function init()
    {
        $this->init_actions();
        $this->init_filters();
    }

    public function get_name()
    {
        return $this->name;
    }

    public function get_slug()
    {
        return $this->slug;
    }

    public function get_post_type()
    {
        return $this->post_type;
    }

    public function init_actions()
    {
        add_rewrite_rule('^secciones/acerca-de-tips/biblioteca-tips/pagina/([0-9]+)/?', 'index.php?/?secciones=acerca-de-tips/biblioteca-tips&paged=$matches[1]', 'top');

        add_rewrite_rule('^secciones/acerca-de-tips/biblioteca-tips/pagina/([0-9]+)/?/search/(.+)/?', 'index.php?/?secciones=acerca-de-tips/biblioteca-tips&paged=$matches[1]&search=$matches[2]', 'top');

        add_rewrite_rule('^secciones/acerca-de-tips/biblioteca-tips/pagina/([0-9]+)/?/search/(.+)/?/filtros/(.+)/?', 'index.php?/?secciones=acerca-de-tips/biblioteca-tips&paged=$matches[1]&search=$matches[2]&filters=$matches[3]', 'top');

        add_action( 'init', [$this, 'acf_contenedor_biblioteca_field'] );
    }

    public function init_filters()
    {
    }

    public function load_styles()
    {
    }

    public function load_scripts()
    {
    }

    public function get_url_filtros($tax, $page, $keyword, $filtros='')
    {
        if($keyword != '')
            $slugKeyword = '&keyword=' . $keyword;
        else
            $slugKeyword = '';

        if($filtros != '')
            $slugFiltro = '&filters=' . $filtros;
        else
            $slugFiltro = '';

        $url = get_site_url() . '/filtros/' . $tax . '?pagina=' . $page . $slugKeyword . $slugFiltro;

        return $url;
    }

    public function get_all_filters($tax)
    {
        $TermsID = get_term_by('slug', $tax, 'filtros')->term_id;

        $args = array
        (
            'taxonomy'  => 'filtros',
            'hide_empty'=> true,
            'parent'    => $TermsID
        );

        $taxTerms = get_terms( $args );
        $terms = array();

        foreach($taxTerms as $term)
        {
            $terms[] = $term->name;
        }

        return $terms;
    }
    public function get_url_pagination($actualURL, $page, $keyword, $filtros)
    {
        if($keyword != '')
            $slugKeyword = '/search/' . $keyword;
        else
            $slugKeyword = '';

        if($filtros != '')
            $slugFiltro = '/filtros/' . $filtros;
        else
            $slugFiltro = '';

        $url = $actualURL . 'pagina/' . $page . $slugKeyword . $slugFiltro;

        return $url;
    }
    public function get_biblioteca($tax, $page, $keyword, $filtros='')
    {
        $url = $this->get_url_filtros($tax, $page, $keyword, $filtros);

        $json = file_get_contents($url);

        $obj = json_decode($json);
        return $obj;
    }

    public function acf_contenedor_biblioteca_field()
    {
        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_63d93b716e344',
            'title' => 'Contenedor Biblioteca Tips',
            'fields' => array(
                array(
                    'key' => 'field_63d93b9ccc80f',
                    'label' => 'Agregar Biblioteca Tips',
                    'name' => 'agregar_biblioteca_tips',
                    'type' => 'button_group',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'relevanssi_exclude' => 0,
                    'choices' => array(
                        'si' => 'Si',
                        'no' => 'No',
                    ),
                    'allow_null' => 0,
                    'default_value' => 'no',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'secciones',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        ));

        endif;
    }

}