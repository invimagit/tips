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
        //add_action( 'init', [$this, 'acf_calendario_field'] );

        add_action('wp_ajax_ajax_calendar_events', array($this, 'ajax_calendar_events'));
        add_action('wp_ajax_nopriv_ajax_calendar_events', array($this, 'ajax_calendar_events'));

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

    public function acf_calendario_field()
    {
    }
}