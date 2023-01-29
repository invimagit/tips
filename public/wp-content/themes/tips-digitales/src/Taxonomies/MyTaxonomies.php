<?php

if (!defined('ABSPATH')) { exit; }

class MyTaxonomies
{
	public function __construct()
	{
	}

	public function init()
	{
        $this->init_actions();
	}

    public function init_actions()
	{
        add_action('init', array($this, 'build_taxonomies'));
    }

    public function init_filters()
    {

    }

    public function build_taxonomies()
    {
        $this->add_secciones_taxonomy();
        $this->add_herramientas_taxonomy();
    }

    public function add_secciones_taxonomy()
    {
        $labels = array(
            'name'              => 'Secciones',
            'singular_name'     => 'Sección',
            'search_items'      => 'Sección',
            'popular_items'     => '',
            'all_items'         => 'Todos',
            'parent_item'       => 'superior',
            'parent_item_colon' => 'superior',
            'edit_item'         => '',
            'update_item'       => '',
            'add_new_item'      => 'Nuevo',
            'new_item_name'     => 'Nuevo',
        );

        $args = array(
            'hierarchical'      	=> true,
            'labels'            	=> $labels,
			"public" 				=> false,
			"publicly_queryable"	=> false,
			"hierarchical" 			=> true,
			"show_ui" 				=> true,
			"show_in_menu" 			=> true,
			"show_in_nav_menus" 	=> false,
			"query_var" 			=> true,
			"rewrite" 				=> [ 'slug' => 'seccion', 'with_front' => true,  'hierarchical' => true, ],
			"show_admin_column" 	=> true,
			"show_in_rest" 			=> true,
			"show_tagcloud" 		=> false,
			"rest_base" 			=> "seccion",
			"rest_controller_class" => "WP_REST_Terms_Controller",
			"rest_namespace" 		=> "wp/v2",
			"show_in_quick_edit" 	=> false,
			"sort" 					=> false,
			"show_in_graphql" 		=> false,
        );

		register_taxonomy( "seccion", [ "cursos" ], $args );
    }

    public function add_herramientas_taxonomy()
    {
        $labels = array(
            'name'              => 'Tipo de Herramientas',
            'singular_name'     => 'Tipo de Herramienta',
            'search_items'      => 'Tipo de Herramienta',
            'popular_items'     => '',
            'all_items'         => 'Todos',
            'parent_item'       => 'superior',
            'parent_item_colon' => 'superior',
            'edit_item'         => '',
            'update_item'       => '',
            'add_new_item'      => 'Nuevo',
            'new_item_name'     => 'Nuevo',
        );

        $args = array(
            'hierarchical'      	=> true,
            'labels'            	=> $labels,
			"public" 				=> true,
			"publicly_queryable"	=> true,
			"hierarchical" 			=> true,
			"show_ui" 				=> true,
			"show_in_menu" 			=> true,
			"show_in_nav_menus" 	=> false,
			"query_var" 			=> true,
			"rewrite" 				=> [ 'slug' => 'tipo-herramientas', 'with_front' => true,  'hierarchical' => false, ],
			"show_admin_column" 	=> true,
			"show_in_rest" 			=> true,
			"show_tagcloud" 		=> false,
			"rest_base" 			=> "tipo-herramienta",
			"rest_controller_class" => "WP_REST_Terms_Controller",
			"rest_namespace" 		=> "wp/v2",
			"show_in_quick_edit" 	=> false,
			"sort" 					=> false,
			"show_in_graphql" 		=> false,
        );

		register_taxonomy( "tipo-herramientas", [ "herramientas" ], $args );
    }

}
