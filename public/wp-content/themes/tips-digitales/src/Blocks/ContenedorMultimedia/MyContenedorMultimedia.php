<?php
if (!defined('ABSPATH')) { exit; }

class MyContenedorMultimedia
{
    public function __construct()
    {
    }

    public function init()
    {
        $this->init_actions();
        $this->acf_fields_theme();
    }

    private function init_actions()
    {
    }

    public function enqueue_block_style()
    {
    }

    private function enqueue_block_scripts()
    {
    }

    public function getView()
    {
        get_template_part( 'src/ContenedorMultimedia/views/content', 'ContenedorMultimedia' );
    }

    public function acf_fields_theme()
    {
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_6384b7c8eeee8',
                'title' => 'Contenedor Múltimedia',
                'fields' => array(
                    array(
                        'key' => 'field_6384b970525b0',
                        'label' => '',
                        'name' => 'grupo_multimedia',
                        'type' => 'group',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'layout' => 'block',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_6384b7d2ca028',
                                'label' => 'Mostrar contenedor',
                                'name' => 'mostrar_contenedor',
                                'type' => 'button_group',
                                'instructions' => '',
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
                                'default_value' => '',
                                'layout' => 'horizontal',
                                'return_format' => 'value',
                            ),
                            array(
                                'key' => 'field_6384bd19f55ae',
                                'label' => 'Titulo',
                                'name' => 'titulo',
                                'type' => 'text',
                                'instructions' => '',
                                'required' => 1,
                                'conditional_logic' => array(
                                    array(
                                        array(
                                            'field' => 'field_6384b7d2ca028',
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
                                'prepend' => '',
                                'append' => '',
                                'maxlength' => '',
                            ),
                            array(
                                'key' => 'field_6384bd2ef55af',
                                'label' => 'Descripción',
                                'name' => 'descripcion',
                                'type' => 'text',
                                'instructions' => '',
                                'required' => 1,
                                'conditional_logic' => array(
                                    array(
                                        array(
                                            'field' => 'field_6384b7d2ca028',
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
                                'prepend' => '',
                                'append' => '',
                                'maxlength' => '',
                            ),
                            array(
                                'key' => 'field_6384ba598ef09',
                                'label' => 'URL Video de Youtube',
                                'name' => 'contenedor_youtube',
                                'type' => 'oembed',
                                'instructions' => 'Ingresa la URL del video de Youtube',
                                'required' => 1,
                                'conditional_logic' => array(
                                    array(
                                        array(
                                            'field' => 'field_6384b7d2ca028',
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
                                'height' => 300,
                            ),
                        ),
                    ),
                    array(
                        'key' => 'field_6384bdbcf55b1',
                        'label' => 'Contenedor botones',
                        'name' => 'contenedor_botones',
                        'type' => 'flexible_content',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => array(
                            array(
                                array(
                                    'field' => 'field_6384b7d2ca028',
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
                        'layouts' => array(
                            'layout_6384bdceb8ae5' => array(
                                'key' => 'layout_6384bdceb8ae5',
                                'name' => 'boton_si',
                                'label' => 'Botón SI',
                                'display' => 'block',
                                'sub_fields' => array(
                                    array(
                                        'key' => 'field_6384bdf4f55b2',
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
                                        'key' => 'field_6384be02f55b3',
                                        'label' => 'Acción',
                                        'name' => 'accion',
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
                            'layout_6384be9a653de' => array(
                                'key' => 'layout_6384be9a653de',
                                'name' => 'boton_no',
                                'label' => 'Botón No',
                                'display' => 'block',
                                'sub_fields' => array(
                                    array(
                                        'key' => 'field_6384be9a653df',
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
                                        'key' => 'field_6384be9a653e0',
                                        'label' => 'Acción',
                                        'name' => 'accion',
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
                        'min' => 0,
                        'max' => 2,
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'options_page',
                            'operator' => '==',
                            'value' => 'theme-general-settings',
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