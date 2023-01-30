<?php

if (!defined('ABSPATH')) { exit; }

class MyContenedorCajaHerramientas
{
    private $name       = 'CajaHerramientas';
    private $slug       = 'CajaHerramientas';
    private $post_type  = 'CajaHerramientas';

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
        add_rewrite_rule('^secciones/representantes-de-la-ciudadania/caja-de-herramientas/pagina/([0-9]+)/?/search/(.+)/?', 'index.php?/?secciones=representantes-de-la-ciudadania/caja-de-herramientas&search=$matches[2]&paged=$matches[1]', 'top');

        add_action( 'init', [$this, 'acf_caja_herramientas_field'] );
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

    public function get_herramientas($tax, $page, $keyword)
    {
        if($keyword != 'false')
            $url = get_site_url() . '/tipo-herramientas/' . $tax . '/page/' . $page . '?keyword=' . $keyword;
        else
            $url = get_site_url() . '/tipo-herramientas/' . $tax . '/page/' . $page;

        $json = file_get_contents($url);

        $obj = json_decode($json);
        return $obj;
    }

    public function acf_caja_herramientas_field()
    {
    }

}