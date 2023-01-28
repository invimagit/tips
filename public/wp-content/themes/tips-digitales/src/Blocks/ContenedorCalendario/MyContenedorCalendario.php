<?php

if (!defined('ABSPATH')) { exit; }

class MyContenedorCalendario
{
    private $name       = 'Calendario';
    private $slug       = 'Calendario';
    private $post_type  = 'Calendario';

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
        add_action( 'init', [$this, 'acf_calendario_field'] );

        add_action('wp_ajax_ajax_calendar_events', array($this, 'ajax_calendar_events'));
        add_action('wp_ajax_nopriv_ajax_calendar_events', array($this, 'ajax_calendar_events'));

        add_action('wp_ajax_ajax_calendar_asistir', array($this, 'ajax_calendar_asistir'));
        add_action('wp_ajax_nopriv_ajax_calendar_asistir', array($this, 'ajax_calendar_asistir'));

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

    public function ajax_calendar_events()
    {
        $start      = esc_attr($_POST["start"]);
        $end        = esc_attr($_POST["end"]);
        $taxonomies = esc_attr($_POST["taxonomies"]);

        $taxonomies = json_decode($taxonomies);

        if($taxonomies != false)
            $transientName = 'calendar_events_' . $start . '_' . $end . "_" . implode('_', $taxonomies);
        else
            $transientName = 'calendar_events_' . $start . '_' . $end . "_no_filters";

        $result     = get_transient($transientName);

        if (false === $result)
        {
            try
            {
                if($taxonomies == false)
                {
                    $args = array
                    (
                        'post_type' => 'eventos',
                        'order' => 'ASC',
                        'numberposts'   => -1,
                        'fields'        => 'ids',
                        'post_status'   => 'publish',
                        'meta_query' => array
                        (
                            'relation'      => 'AND',
                            array(
                                'key'       => 'fecha',
                                'compare'   => '>=',
                                'value'     => $start,
                            ),
                            array(
                                'key'       => 'fecha',
                                'compare'   => '<=',
                                'value'     => $end,
                            )
                        )
                    );
                }
                else
                {
                    $args = array
                    (
                        'post_type' => 'eventos',
                        'order' => 'ASC',
                        'numberposts'   => -1,
                        'fields'        => 'ids',
                        'post_status'   => 'publish',
                        'meta_query' => array
                        (
                            'relation'      => 'AND',
                            array(
                                'key'       => 'fecha',
                                'compare'   => '>=',
                                'value'     => $start,
                            ),
                            array(
                                'key'       => 'fecha',
                                'compare'   => '<=',
                                'value'     => $end,
                            )
                        ),
                        'tax_query' => array
                        (
                            array(
                              'taxonomy' => 'seccion',
                              'field' => 'term_id', 
                              'terms' => $taxonomies,
                              'include_children' => false
                            )
                        )
                    );
                }

                $eventosID = get_posts($args);

                if($eventosID)
                {
                    $cont = 0;

                    $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

                    foreach ($eventosID as $eventoID)
                    {
                        $fechaTemp = get_field('fecha', $eventoID);
                        $fechaCalendario = explode(" ", $fechaTemp);

                        $eventos[$cont]['ID'] = $eventoID;
                        $eventos[$cont]['categoria'] = get_the_title($eventoID);
                        $eventos[$cont]['titulo'] = get_the_title($eventoID);
                        $eventos[$cont]['descripcion'] = get_field('descripcion', $eventoID);
                        $eventos[$cont]['direccion'] = get_field('direccion', $eventoID);
                        $eventos[$cont]['fechaCalendario'] = $fechaCalendario[0];


                        $strTime   = strtotime($fechaTemp);
                        $day    = date('j', $strTime);
                        $month  = $meses[date('n', $strTime) - 1];
                        $year   = date('Y', $strTime);
                        $hour   = date('g:i a', $strTime);

                        $eventos[$cont]['fechaMostrar'] = $day . ' de ' . $month . ' de ' . $year . ' ' . $hour;

                        $cont++;
                    }

                    $result['type'] = 'success';
                    $result['result'] = $eventos;
                }
                else
                    $result['type'] = 'no-events';

                set_transient($transientName, $result, 86400 );
            }
            catch (Exception $e)
            {
                $result['type'] = 'no-events';
            }
        }

        $result = json_encode($result);
        echo $result;
        wp_die();
    }

    public function ajax_calendar_asistir()
    {
        $eventID      = intval(esc_attr($_POST["eventID"]));
        $userID        = intval(esc_attr($_POST["userID"]));

        if($userID != 0)
        {
            $data = get_user_meta( $userID, 'user_eventos', true); 

            if($data)
            {
                $temp = explode(',', $data);

                if(!in_array($eventID, $temp))
                {
                    $data .= ',' . $eventID;

                    update_user_meta( $userID, 'user_eventos', $data );
                    $type = 'success';
                    $title = 'Gracias por registrarte en este evento';
                }
                else
                {
                    $type = 'info';
                    $title = 'Ya te habias registrado a este evento';
                }
            }
            else
            {
                $data = $eventID;

                add_user_meta( $userID, 'user_eventos', $data );
                $type = 'success';
                $title = 'Gracias por registrarte en este evento';
            }
        }
        else
        {
            $type = 'error';
            $title = 'Tienes que estar logeado para registrarte al evento';
        }

        $result['type'] = $type;
        $result['title'] = $title;

        $result = json_encode($result);
        echo $result;
        wp_die();
    }

    public function acf_calendario_field()
    {
        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_63c815edd5cc3',
            'title' => 'Calendario',
            'fields' => array(
                array(
                    'key' => 'field_63c81784b3491',
                    'label' => 'Agregar calendario',
                    'name' => 'agregar_calendario',
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
                    'default_value' => 'no',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_63cfec21d6668',
                    'label' => 'Ancho contenedor',
                    'name' => 'ancho_contenedor_calendario',
                    'type' => 'select',
                    'instructions' => 'Selecciona el ancho del contenedor, si quieres agregar 2 bloques uno al lado del otro tienes que cambiar el ancho en cada bloque.<br><br>Recuerda que el tamaño de los 2 bloques debe sumar "100"',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63c81784b3491',
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
                        100 => '100%',
                        90 => '90%',
                        80 => '80%',
                        70 => '70%',
                        60 => '60%',
                        50 => '50%',
                        40 => '40%',
                        30 => '30%',
                        20 => '20%',
                        10 => '10%',
                    ),
                    'default_value' => 100,
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_63d019691f672',
                    'label' => 'Utiliza filtros?',
                    'name' => 'utiliza_filtros_contenedor_calendario',
                    'type' => 'button_group',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63c81784b3491',
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
                    'key' => 'field_63d017eda262c',
                    'label' => 'Tipos de filtros',
                    'name' => 'tipos_de_filtros_contenedor_calendario',
                    'type' => 'button_group',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63c81784b3491',
                                'operator' => '==',
                                'value' => 'si',
                            ),
                            array(
                                'field' => 'field_63d019691f672',
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
                        'selector' => 'Mostrar selector de filtros',
                        'automaticos' => 'Filtros automáticos',
                    ),
                    'allow_null' => 0,
                    'default_value' => '',
                    'layout' => 'horizontal',
                    'return_format' => 'value',
                ),
                array(
                    'key' => 'field_63c8190ffd1a7',
                    'label' => 'Filtros',
                    'name' => 'filtros_contenedor_calendario',
                    'type' => 'taxonomy',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63c81784b3491',
                                'operator' => '==',
                                'value' => 'si',
                            ),
                            array(
                                'field' => 'field_63d019691f672',
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
                    'taxonomy' => 'seccion',
                    'field_type' => 'multi_select',
                    'allow_null' => 0,
                    'add_term' => 0,
                    'save_terms' => 0,
                    'load_terms' => 0,
                    'return_format' => 'id',
                    'multiple' => 0,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'secciones',
                    ),
                )
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