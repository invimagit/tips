<?php
if (!defined('ABSPATH')) { exit; }

class MyAcf
{
    public function __construct()
    {
    }

    public function init()
    {
        $this->init_actions();
        $this->acf_fields_header();
        $this->acf_fields_footer();
    }

    public function init_actions()
    {
        if ( function_exists( 'acf_add_options_page' ) ) 
        {
            acf_add_options_page(array(
                'page_title'    => 'Theme General Settings',
                'menu_title'    => 'Theme Settings',
                'menu_slug'     => 'theme-general-settings',
                'capability'    => 'edit_posts',
                'redirect'      => false
            ));
            
            acf_add_options_sub_page(array(
                'page_title'    => 'Theme Header Settings',
                'menu_title'    => 'Header',
                'parent_slug'   => 'theme-general-settings',
            ));
            
            acf_add_options_sub_page(array(
                'page_title'    => 'Theme Footer Settings',
                'menu_title'    => 'Footer',
                'parent_slug'   => 'theme-general-settings',
            ));
        }
    }

    public function acf_fields_header()
    {
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_6377ef17d7c0eaa',
                'title' => 'Header',
                'fields' => array(
                    array(
                        'key' => 'field_6377f1bbc8bf8',
                        'label' => '',
                        'name' => 'grupo_header',
                        'type' => 'group',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'layout' => 'row',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_6377f1ecc8bf9',
                                'label' => 'Logo Gobierno',
                                'name' => 'logo_gobierno',
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
                                'preview_size' => 'thumbnail',
                                'library' => 'uploadedTo',
                                'min_width' => 140,
                                'min_height' => 20,
                                'min_size' => '',
                                'max_width' => 200,
                                'max_height' => 40,
                                'max_size' => '',
                                'mime_types' => '',
                            ),
                            array(
                                'key' => 'field_6377f1ecc1234',
                                'label' => 'Link Gobierno',
                                'name' => 'link_gobierno',
                                'type' => 'url',
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
                            ),
                            array(
                                'key' => 'field_6377f239ba7b9',
                                'label' => 'Logo TIPS',
                                'name' => 'logo_tips',
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
                                'key' => 'field_637bc4ede1c14',
                                'label' => 'Logo Escudos',
                                'name' => 'logo_escudos',
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
                                'key' => 'field_63851b58cbcef',
                                'label' => 'P??gina Quiero Participar',
                                'name' => 'pagina_quiero_participar',
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
                                    0 => 'page',
                                ),
                                'taxonomy' => '',
                                'allow_null' => 0,
                                'allow_archives' => 0,
                                'multiple' => 0,
                            ),

                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'options_page',
                            'operator' => '==',
                            'value' => 'acf-options-header',
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

    public function acf_fields_footer()
    {
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_637d4bb984548',
                'title' => 'Footer',
                'fields' => array(
                    array(
                        'key' => 'field_6377f1bbc8ccc',
                        'label' => '',
                        'name' => 'grupo_footer',
                        'type' => 'group',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'layout' => 'row',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_637d4bea02d01',
                                'label' => 'Logo Footer',
                                'name' => 'logo_footer',
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
                                'preview_size' => 'thumbnail',
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
                                'key' => 'field_637e35c7495bf',
                                'label' => 'Logo Alcaldia',
                                'name' => 'logo_alcaldia',
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
                                'preview_size' => 'thumbnail',
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
                                'key' => 'field_637e35df495c0',
                                'label' => 'Logo Gobierno',
                                'name' => 'logo_gobierno',
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
                                'preview_size' => 'thumbnail',
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
                                'key' => 'field_637e35df41234',
                                'label' => 'Link Gobierno',
                                'name' => 'link_gobierno',
                                'type' => 'url',
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
                            ),
                        ),
                    ),
                    array(
                        'key' => 'field_637d4c4102d02',
                        'label' => 'Bloque de datos',
                        'name' => 'bloque_de_datos',
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
                            'layout_637d4c4ddbe4e' => array(
                                'key' => 'layout_637d4c4ddbe4e',
                                'name' => 'bloque_informacion',
                                'label' => 'Bloque Informaci??n',
                                'display' => 'row',
                                'sub_fields' => array(
                                    array(
                                        'key' => 'field_637d4c5102d03',
                                        'label' => 'Titulo del bloque',
                                        'name' => 'titulo',
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
                                    array(
                                        'key' => 'field_637d4ea7b3e16',
                                        'label' => 'Descripciones',
                                        'name' => 'descripciones',
                                        'type' => 'repeater',
                                        'instructions' => '',
                                        'required' => 0,
                                        'conditional_logic' => 0,
                                        'wrapper' => array(
                                            'width' => '',
                                            'class' => '',
                                            'id' => '',
                                        ),
                                        'collapsed' => 'field_637d4ff784aff',
                                        'min' => 0,
                                        'max' => 6,
                                        'layout' => 'block',
                                        'button_label' => '',
                                        'sub_fields' => array(
                                            array(
                                                'key' => 'field_637d4ff784aff',
                                                'label' => 'Descripci??n',
                                                'name' => 'descripcion',
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
                                        ),
                                    ),
                                ),
                                'min' => '',
                                'max' => '',
                            ),
                            'layout_637d4d62b3e15' => array(
                                'key' => 'layout_637d4d62b3e15',
                                'name' => 'bloque_paginas',
                                'label' => 'Bloque P??ginas',
                                'display' => 'row',
                                'sub_fields' => array(
                                    array(
                                        'key' => 'field_637d51ba65be0',
                                        'label' => 'Titulo del bloque',
                                        'name' => 'titulo',
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
                                    array(
                                        'key' => 'field_638df8d08e7c5',
                                        'label' => 'P??ginas',
                                        'name' => 'paginas',
                                        'type' => 'repeater',
                                        'instructions' => 'Selecciona las p??ginas que aparecer??n en el listado',
                                        'required' => 0,
                                        'conditional_logic' => 0,
                                        'wrapper' => array(
                                            'width' => '',
                                            'class' => '',
                                            'id' => '',
                                        ),
                                        'collapsed' => '',
                                        'min' => 0,
                                        'max' => 0,
                                        'layout' => 'block',
                                        'button_label' => '',
                                        'sub_fields' => array(
                                            array(
                                                'key' => 'field_638df8d0d4079',
                                                'label' => 'Titulo de la p??gina',
                                                'name' => 'titulo',
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
                                                'key' => 'field_638df8d0d40c1',
                                                'label' => 'P??gina externa?',
                                                'name' => 'pagina_externa',
                                                'type' => 'button_group',
                                                'instructions' => 'Selecciona "Si" para insertar un link a una p??gina externa al sitio.',
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
                                                'key' => 'field_638df8d0d4106',
                                                'label' => 'Link',
                                                'name' => 'link',
                                                'type' => 'url',
                                                'instructions' => '',
                                                'required' => 1,
                                                'conditional_logic' => array(
                                                    array(
                                                        array(
                                                            'field' => 'field_638df8d0d40c1',
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
                                                'default_value' => '',
                                                'placeholder' => '',
                                            ),
                                            array(
                                                'key' => 'field_638df8d0d414d',
                                                'label' => 'P??gina',
                                                'name' => 'pagina',
                                                'type' => 'page_link',
                                                'instructions' => '',
                                                'required' => 1,
                                                'conditional_logic' => array(
                                                    array(
                                                        array(
                                                            'field' => 'field_638df8d0d40c1',
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
                                                'post_type' => array(
                                                    0 => 'page',
                                                    1 => 'cursos',
                                                    2 => 'secciones',
                                                ),
                                                'taxonomy' => '',
                                                'allow_null' => 0,
                                                'allow_archives' => 0,
                                                'multiple' => 0,
                                            ),
                                        ),
                                    ),
                                ),
                                'min' => '',
                                'max' => '',
                            ),
                            'layout_637d521d65be1' => array(
                                'key' => 'layout_637d521d65be1',
                                'name' => 'bloque_redes_sociales',
                                'label' => 'Bloque redes sociales',
                                'display' => 'row',
                                'sub_fields' => array(
                                    array(
                                        'key' => 'field_637d522c65be2',
                                        'label' => 'Titulo del bloque',
                                        'name' => 'titulo',
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
                                    array(
                                        'key' => 'field_637d523165be3',
                                        'label' => 'Redes',
                                        'name' => 'redes',
                                        'type' => 'repeater',
                                        'instructions' => '',
                                        'required' => 0,
                                        'conditional_logic' => 0,
                                        'wrapper' => array(
                                            'width' => '',
                                            'class' => '',
                                            'id' => '',
                                        ),
                                        'collapsed' => 'field_637d52f44705e',
                                        'min' => 0,
                                        'max' => 0,
                                        'layout' => 'block',
                                        'button_label' => 'Agregar red',
                                        'sub_fields' => array(
                                            array(
                                                'key' => 'field_637d52f44705e',
                                                'label' => 'Icono',
                                                'name' => 'icono',
                                                'type' => 'font-awesome',
                                                'instructions' => '',
                                                'required' => 1,
                                                'conditional_logic' => 0,
                                                'wrapper' => array(
                                                    'width' => '',
                                                    'class' => '',
                                                    'id' => '',
                                                ),
                                                'icon_sets' => array(
                                                    0 => 'brands',
                                                ),
                                                'custom_icon_set' => '',
                                                'default_label' => '',
                                                'default_value' => '',
                                                'save_format' => 'element',
                                                'allow_null' => 0,
                                                'show_preview' => 1,
                                                'enqueue_fa' => 0,
                                                'fa_live_preview' => '',
                                                'choices' => array(
                                                ),
                                            ),
                                            array(
                                                'key' => 'field_637d525665be5',
                                                'label' => 'Link',
                                                'name' => 'link',
                                                'type' => 'url',
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
                                            ),
                                        ),
                                    ),
                                ),
                                'min' => '',
                                'max' => '',
                            ),
                        ),
                        'button_label' => 'Agregar Bloque',
                        'min' => '',
                        'max' => '',
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'options_page',
                            'operator' => '==',
                            'value' => 'acf-options-footer',
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