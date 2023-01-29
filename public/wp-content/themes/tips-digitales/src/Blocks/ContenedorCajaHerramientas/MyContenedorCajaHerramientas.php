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

    public function acf_caja_herramientas_field()
    {
    }

}