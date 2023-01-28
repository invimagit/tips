<?php

if (!defined('ABSPATH')) { exit; }

class MyYoParticipoEnSalud
{
    private $name       = 'YoParticipoEnSalud';
    private $slug       = 'yoparticipoensalud';
    private $post_type  = 'yoparticipoensalud';

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
            'singular_name'         => __('YoParticipoEnSalud', APP_TEXTDOMAIN),
            'menu_name'             => __('YoParticipoEnSalud', APP_TEXTDOMAIN),
            'name_admin_bar'        => __('YoParticipoEnSalud', APP_TEXTDOMAIN),
            'archives'              => __('YoParticipoEnSalud archive', APP_TEXTDOMAIN),
            'attributes'            => __('YoParticipoEnSalud attributes', APP_TEXTDOMAIN),
            'parent_item_colon'     => __('Parent YoParticipoEnSalud:', APP_TEXTDOMAIN),
            'all_items'             => __('All YoParticipoEnSalud', APP_TEXTDOMAIN),
            'add_new_item'          => __('Add new YoParticipoEnSalud', APP_TEXTDOMAIN),
            'add_new'               => __('Add New', APP_TEXTDOMAIN),
            'new_item'              => __('New YoParticipoEnSalud', APP_TEXTDOMAIN),
            'edit_item'             => __('Edit YoParticipoEnSalud', APP_TEXTDOMAIN),
            'update_item'           => __('Update YoParticipoEnSalud', APP_TEXTDOMAIN),
            'view_item'             => __('View YoParticipoEnSalud', APP_TEXTDOMAIN),
            'view_items'            => __('View YoParticipoEnSalud', APP_TEXTDOMAIN),
            'search_items'          => __('Search YoParticipoEnSalud', APP_TEXTDOMAIN),
            'not_found'             => __('No YoParticipoEnSalud found', APP_TEXTDOMAIN),
            'not_found_in_trash'    => __('No YoParticipoEnSalud found in trash', APP_TEXTDOMAIN),
            'featured_image'        => __('Featured image', APP_TEXTDOMAIN),
            'set_featured_image'    => __('Set featured image', APP_TEXTDOMAIN),
            'remove_featured_image' => __('Remove featured image', APP_TEXTDOMAIN),
            'use_featured_image'    => __('Use as featured image', APP_TEXTDOMAIN),
            'insert_into_item'      => __('Insert into YoParticipoEnSalud', APP_TEXTDOMAIN),
            'uploaded_to_this_item' => __('Upload to this YoParticipoEnSalud', APP_TEXTDOMAIN),
            'items_list'            => __('YoParticipoEnSalud list', APP_TEXTDOMAIN),
            'items_list_navigation' => __('YoParticipoEnSalud list navigation', APP_TEXTDOMAIN),
            'filter_items_list'     => __('Filter YoParticipoEnSalud list', APP_TEXTDOMAIN),
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
            'menu_icon'             => 'dashicons-media-interactive',
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
            'taxonomies'            => array( 'seccion' ),
        );

        register_post_type($this->post_type, $args);
    }

    public function acf_fields()
    {
    }
}