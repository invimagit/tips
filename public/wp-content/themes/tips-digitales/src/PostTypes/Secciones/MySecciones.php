<?php

if (!defined('ABSPATH')) { exit; }

class MySecciones
{
    private $name       = 'Secciones';
    private $slug       = 'secciones';
    private $post_type  = 'secciones';

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

    public function load_styles()
    {
    }

    public function load_scripts()
    {
    }

    public function add_post_type()
    {
        $labels = array(
            'name'                  => $this->name,
            'singular_name'         => __('Secciones', APP_TEXTDOMAIN),
            'menu_name'             => __('Secciones', APP_TEXTDOMAIN),
            'name_admin_bar'        => __('Secciones', APP_TEXTDOMAIN),
            'archives'              => __('Secciones archive', APP_TEXTDOMAIN),
            'attributes'            => __('Secciones attributes', APP_TEXTDOMAIN),
            'parent_item_colon'     => __('Parent Sección:', APP_TEXTDOMAIN),
            'all_items'             => __('All Secciones', APP_TEXTDOMAIN),
            'add_new_item'          => __('Add new Sección', APP_TEXTDOMAIN),
            'add_new'               => __('Add New', APP_TEXTDOMAIN),
            'new_item'              => __('New Sección', APP_TEXTDOMAIN),
            'edit_item'             => __('Edit Sección', APP_TEXTDOMAIN),
            'update_item'           => __('Update Sección', APP_TEXTDOMAIN),
            'view_item'             => __('View Sección', APP_TEXTDOMAIN),
            'view_items'            => __('View Sección', APP_TEXTDOMAIN),
            'search_items'          => __('Search Sección', APP_TEXTDOMAIN),
            'not_found'             => __('No Sección found', APP_TEXTDOMAIN),
            'not_found_in_trash'    => __('No Sección found in trash', APP_TEXTDOMAIN),
            'featured_image'        => __('Featured image', APP_TEXTDOMAIN),
            'set_featured_image'    => __('Set featured image', APP_TEXTDOMAIN),
            'remove_featured_image' => __('Remove featured image', APP_TEXTDOMAIN),
            'use_featured_image'    => __('Use as featured image', APP_TEXTDOMAIN),
            'insert_into_item'      => __('Insert into Sección', APP_TEXTDOMAIN),
            'uploaded_to_this_item' => __('Upload to this Sección', APP_TEXTDOMAIN),
            'items_list'            => __('Sección list', APP_TEXTDOMAIN),
            'items_list_navigation' => __('Sección list navigation', APP_TEXTDOMAIN),
            'filter_items_list'     => __('Filter Sección list', APP_TEXTDOMAIN),
        );
        $args = array(
            'label'                 => $this->name,
            'description'           => $this->name,
            'labels'                => $labels,
            'supports'              => array('title', 'page-attributes'),
            'hierarchical'          => true,
            'public'                => true,
            'show_ui'               => true,
            'show_in_rest'          => true,
            'rest_base'             => "",
            'rest_controller_class' => "WP_REST_Posts_Controller",
            'rest_namespace'        => "wp/v2",
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'menu_icon'             => 'dashicons-portfolio',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'delete_with_user'      => false,
            'can_export'            => true,
            'query_var'             => true,
            'has_archive'           => false,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'show_in_rest'          => false,
            'rewrite'               => array('slug' => $this->slug, 'with_front' => true),
            'capability_type'       => 'page',
            'map_meta_cap'          => true,
            'show_in_graphql' => false,
        );

        register_post_type($this->post_type, $args);
    }

    public function acf_fields()
    {
        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_638e6fd6d72fc',
            'title' => 'Secciones',
            'fields' => array(
                array(
                    'key' => 'field_638e6fe63d852',
                    'label' => 'Contenido',
                    'name' => '',
                    'type' => 'accordion',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'open' => 0,
                    'multi_expand' => 0,
                    'endpoint' => 0,
                ),
                array(
                    'key' => 'field_638e6ffc3d853',
                    'label' => 'Descripción',
                    'name' => 'descripcion',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'tabs' => 'visual',
                    'toolbar' => 'full',
                    'media_upload' => 0,
                    'delay' => 0,
                ),
                array(
                    'key' => 'field_638e702a3d854',
                    'label' => 'Contenedor Botones',
                    'name' => 'contenedor_botones',
                    'type' => 'flexible_content',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'layouts' => array(
                        'layout_638e703ba16cb' => array(
                            'key' => 'layout_638e703ba16cb',
                            'name' => 'boton_izquierda',
                            'label' => 'Botón Izquierda',
                            'display' => 'block',
                            'sub_fields' => array(
                                array(
                                    'key' => 'field_638e704c3d855',
                                    'label' => 'Titulo Botón',
                                    'name' => 'titulo_boton',
                                    'type' => 'text',
                                    'instructions' => '',
                                    'required' => 1,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'default_value' => '',
                                    'placeholder' => '',
                                    'prepend' => '',
                                    'append' => '',
                                    'maxlength' => '',
                                ),
                                array(
                                    'key' => 'field_638e70843d856',
                                    'label' => 'Página destino',
                                    'name' => 'pagina_destino',
                                    'type' => 'page_link',
                                    'instructions' => '',
                                    'required' => 1,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'post_type' => array(
                                        0 => 'secciones',
                                        1 => 'cursos',
                                        2 => 'page',
                                    ),
                                    'taxonomy' => '',
                                    'allow_null' => 0,
                                    'allow_archives' => 0,
                                    'multiple' => 0,
                                ),
                                array(
                                    'key' => 'field_638e70843d857',
                                    'label' => 'Clase adicional',
                                    'name' => 'clase_adicional',
                                    'type' => 'text',
                                    'instructions' => '',
                                    'required' => 0,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'default_value' => '',
                                    'placeholder' => '',
                                    'prepend' => '',
                                    'append' => '',
                                    'maxlength' => '',
                                ),
                            ),
                            'min' => '',
                            'max' => '',
                        ),
                        'layout_638e70d03d85a' => array(
                            'key' => 'layout_638e70d03d85a',
                            'name' => 'boton_derecha',
                            'label' => 'Botón derecha',
                            'display' => 'block',
                            'sub_fields' => array(
                                array(
                                    'key' => 'field_638e70d03d85b',
                                    'label' => 'Titulo Botón',
                                    'name' => 'titulo_boton',
                                    'type' => 'text',
                                    'instructions' => '',
                                    'required' => 1,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'default_value' => '',
                                    'placeholder' => '',
                                    'prepend' => '',
                                    'append' => '',
                                    'maxlength' => '',
                                ),
                                array(
                                    'key' => 'field_638e70d03d85c',
                                    'label' => 'Página destino',
                                    'name' => 'pagina_destino',
                                    'type' => 'page_link',
                                    'instructions' => '',
                                    'required' => 1,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'post_type' => array(
                                        0 => 'secciones',
                                        1 => 'cursos',
                                        2 => 'page',
                                    ),
                                    'taxonomy' => '',
                                    'allow_null' => 0,
                                    'allow_archives' => 0,
                                    'multiple' => 0,
                                ),
                                array(
                                    'key' => 'field_638e70d03d85d',
                                    'label' => 'Clase adicional',
                                    'name' => 'clase_adicional',
                                    'type' => 'text',
                                    'instructions' => '',
                                    'required' => 0,
                                    'conditional_logic' => 0,
                                    'wrapper' => array(
                                        'width' => '',
                                        'class' => '',
                                        'id' => '',
                                    ),
                                    'default_value' => '',
                                    'placeholder' => '',
                                    'prepend' => '',
                                    'append' => '',
                                    'maxlength' => '',
                                ),
                            ),
                            'min' => '',
                            'max' => '',
                        ),
                    ),
                    'button_label' => 'Agregar Botón',
                    'min' => '',
                    'max' => 2,
                ),
                array(
                    'key' => 'field_638e666b64579',
                    'label' => 'Video',
                    'name' => '',
                    'type' => 'accordion',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'open' => 0,
                    'multi_expand' => 0,
                    'endpoint' => 0,
                ),
                array(
                    'key' => 'field_638e1f8264575',
                    'label' => 'Agregar video?',
                    'name' => 'agregar_video',
                    'type' => 'button_group',
                    'instructions' => 'Seleccione "Si" para agregar un video',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'si' => 'Si',
                        'no' => 'No',
                    ),
                    'allow_null' => 0,
                    'default_value' => 'no',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_638e47a845851',
                    'label' => 'Insertar video de Youtube?',
                    'name' => 'insertar_video_de_youtube',
                    'type' => 'button_group',
                    'instructions' => 'Selecciona "Si" para insertar un video de Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e1f8264575',
                                'operator' => '==',
                                'value' => 'si',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'si' => 'Si',
                        'no' => 'No',
                    ),
                    'allow_null' => 0,
                    'default_value' => 'no',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_638e481345852',
                    'label' => 'Video Youtube',
                    'name' => 'video_youtube',
                    'type' => 'oembed',
                    'instructions' => 'Inserta la URL del video de Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e47a845851',
                                'operator' => '==',
                                'value' => 'si',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'width' => '',
                    'height' => '',
                ),
                array(
                    'key' => 'field_638e48d445853',
                    'label' => 'Subir video',
                    'name' => 'subir_video',
                    'type' => 'file',
                    'instructions' => 'Seleccione el video a subir',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e47a845851',
                                'operator' => '==',
                                'value' => 'no',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'url',
                    'library' => 'all',
                    'min_size' => '',
                    'max_size' => '',
                    'mime_types' => 'mp4,mpeg4,mpeg,mpg',
                ),
                array(
                    'key' => 'field_638e205b64579',
                    'label' => 'Imágenes',
                    'name' => '',
                    'type' => 'accordion',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'open' => 0,
                    'multi_expand' => 0,
                    'endpoint' => 0,
                ),
                array(
                    'key' => 'field_638e1f8264686',
                    'label' => 'Agregar imágenes?',
                    'name' => 'agregar_imagenes',
                    'type' => 'button_group',
                    'instructions' => 'Seleccione "Si" para agregar imágenes',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'si' => 'Si',
                        'no' => 'No',
                    ),
                    'allow_null' => 0,
                    'default_value' => 'no',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_638e1fb264687',
                    'label' => 'Tipo de imágenes',
                    'name' => 'tipo_imagenes',
                    'type' => 'button_group',
                    'instructions' => 'Selecciona si quieres agregar una imagen estática para la sección o las imágenes de los cursos',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e1f8264686',
                                'operator' => '==',
                                'value' => 'si',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'imagen_seccion' => 'Imagen estática',
                        'imagen_cursos' => 'Imágenes cursos',
                    ),
                    'allow_null' => 0,
                    'default_value' => 'imagen_seccion',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_638e2174e264A',
                    'label' => 'Imagen Estática',
                    'name' => 'imagen_estatica',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e1fb264687',
                                'operator' => '==',
                                'value' => 'imagen_seccion',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'url',
                    'preview_size' => 'medium',
                    'library' => 'uploadedTo',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_638e2084f5b87',
                    'label' => 'Imágenes de los cursos',
                    'name' => 'imagenes',
                    'type' => 'repeater',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e1fb264687',
                                'operator' => '==',
                                'value' => 'imagen_cursos',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'collapsed' => '',
                    'min' => 0,
                    'max' => 0,
                    'layout' => 'block',
                    'button_label' => 'Agregar imagen',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_638e2174e253f',
                            'label' => 'Imagen',
                            'name' => 'imagen',
                            'type' => 'image',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'return_format' => 'url',
                            'preview_size' => 'medium',
                            'library' => 'uploadedTo',
                            'min_width' => '',
                            'min_height' => '',
                            'min_size' => '',
                            'max_width' => '',
                            'max_height' => '',
                            'max_size' => '',
                            'mime_types' => '',
                        ),
                        array(
                            'key' => 'field_638e2197e2540',
                            'label' => 'Página curso',
                            'name' => 'pagina_curso',
                            'type' => 'page_link',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'post_type' => array(
                                0 => 'secciones',
                                1 => 'cursos',
                            ),
                            'taxonomy' => '',
                            'allow_null' => 1,
                            'allow_archives' => 0,
                            'multiple' => 0,
                        ),
                        array(
                            'key' => 'field_638e2197e2550',
                            'label' => 'Clase adicional',
                            'name' => 'clase_adicional',
                            'type' => 'text',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'placeholder' => '',
                            'prepend' => '',
                            'append' => '',
                            'maxlength' => '',
                        ),
                    ),
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'secciones',
                    ),
                    array(
                        'param' => 'page_type',
                        'operator' => '!=',
                        'value' => 'parent',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => array(
                1 => 'the_content',
                2 => 'excerpt',
                3 => 'discussion',
                4 => 'comments',
                5 => 'revisions',
                6 => 'slug',
                7 => 'author',
                8 => 'format',
                10 => 'featured_image',
                11 => 'categories',
                12 => 'tags',
                13 => 'send-trackbacks',
            ),            'active' => true,
            'description' => '',
        ));

        endif;
    }
}