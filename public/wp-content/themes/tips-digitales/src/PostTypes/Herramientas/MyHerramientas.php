<?php

if (!defined('ABSPATH')) { exit; }

class MyHerramientas
{
    private $name       = 'Herramientas';
    private $slug       = 'herramientas';
    private $post_type  = 'herramientas';

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
        add_action( 'init', [$this, 'acf_fields'] );
        add_action( 'init', [$this, 'add_post_type'] );
    }

    public function init_filters()
    {
    }

    public function add_post_type()
    {
        $labels = array(
            'name'                  => $this->name,
            'singular_name'         => __('Herramientas', APP_TEXTDOMAIN),
            'menu_name'             => __('Herramientas', APP_TEXTDOMAIN),
            'name_admin_bar'        => __('Herramientas', APP_TEXTDOMAIN),
            'archives'              => __('Herramientas archive', APP_TEXTDOMAIN),
            'attributes'            => __('Herramientas attributes', APP_TEXTDOMAIN),
            'parent_item_colon'     => __('Parent Herramientas:', APP_TEXTDOMAIN),
            'all_items'             => __('All Herramientas', APP_TEXTDOMAIN),
            'add_new_item'          => __('Add new Herramientas', APP_TEXTDOMAIN),
            'add_new'               => __('Add New', APP_TEXTDOMAIN),
            'new_item'              => __('New Herramienta', APP_TEXTDOMAIN),
            'edit_item'             => __('Edit Herramienta', APP_TEXTDOMAIN),
            'update_item'           => __('Update Herramienta', APP_TEXTDOMAIN),
            'view_item'             => __('View Herramienta', APP_TEXTDOMAIN),
            'view_items'            => __('View Herramientas', APP_TEXTDOMAIN),
            'search_items'          => __('Search Herramientas', APP_TEXTDOMAIN),
            'not_found'             => __('No Herramientas found', APP_TEXTDOMAIN),
            'not_found_in_trash'    => __('No Herramientas found in trash', APP_TEXTDOMAIN),
            'featured_image'        => __('Featured image', APP_TEXTDOMAIN),
            'set_featured_image'    => __('Set featured image', APP_TEXTDOMAIN),
            'remove_featured_image' => __('Remove featured image', APP_TEXTDOMAIN),
            'use_featured_image'    => __('Use as featured image', APP_TEXTDOMAIN),
            'insert_into_item'      => __('Insert into Herramientas', APP_TEXTDOMAIN),
            'uploaded_to_this_item' => __('Upload to this Herramienta', APP_TEXTDOMAIN),
            'items_list'            => __('Herramientas list', APP_TEXTDOMAIN),
            'items_list_navigation' => __('Herramientas list navigation', APP_TEXTDOMAIN),
            'filter_items_list'     => __('Filter Herramientas list', APP_TEXTDOMAIN),
        );
        $args = array(
            'label'                 => $this->name,
            'description'           => $this->name,
            'labels'                => $labels,
            'supports'              => array('title', 'editor', 'custom-fields'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'menu_icon'             => 'dashicons-admin-tools',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'query_var'             => true,
            "has_archive"           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => false,
            'show_in_rest'          => false,
            'rewrite'               => array('slug' => $this->slug, 'with_front' => true),
            'capability_type'       => 'post',
        );

        register_post_type($this->post_type, $args);
    }

    public function acf_fields()
    {

    }
}