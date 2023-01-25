<?php

if (!defined('ABSPATH')) { exit; }

class MyContenedorFormularioSecciones
{
    private $name       = 'FormularioSecciones';
    private $slug       = 'FormularioSecciones';
    private $post_type  = 'FormularioSecciones';

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

    public function after_save_data($insert_id)
    {
        global $wpdb;

        $table_name = $wpdb->prefix.'db7_forms';

        $results    = $wpdb->get_results( "SELECT * FROM $table_name WHERE form_id = $insert_id LIMIT 1", OBJECT );

        if ( !empty($results) )
        {
            $form_data  = unserialize( $results[0]->form_value );

            $userID = $form_data["userID"];

            if($userID != 0)
            {
                $data = get_user_meta( $userID, 'user_iniciativas' ); 

                if($data)
                {
                    array_push($data, $insert_id);

                    update_user_meta( $userID, 'user_iniciativas', $data );
                }
                else
                {
                    array_push($data, $insert_id);

                    add_user_meta( $userID, 'user_iniciativas', $data );
                }
            }
        }
    }

    public function init_actions()
    {
        add_action( 'init', [$this, 'acf_formulario_secciones_field'] );

        add_action( 'cfdb7_after_save_data', [$this, 'after_save_data'] );
    }

    public function change_filename($filename)
    {
        $sanitizeFilename = sanitize_title($filename);

        return $sanitizeFilename . '-' . time();
    }

    public function before_save_data($form_data)
    {
        if( isset($form_data['userEmail']) )
        {
            $user = get_user_by( 'email', $form_data['userEmail'] );
            $userID = $user->ID;

            $form_data['userID'] = $userID;
        }
        return $form_data;
    }

    public function init_filters()
    {
        //add_filter('wpcf7_upload_file_name',[$this, 'change_filename'] );

        add_filter('cfdb7_before_save_data',[$this, 'before_save_data'] );
    }

    public function load_styles()
    {
    }

    public function load_scripts()
    {
    }

    public function acf_formulario_secciones_field()
    {
    }

}