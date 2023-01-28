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
                $data = get_user_meta( $userID, 'user_iniciativas', true ); 

                if($data)
                {
                    $temp = explode(',', $data);

                    if(!in_array($insert_id, $temp))
                    {
                        $data .= ',' . $insert_id;

                        update_user_meta( $userID, 'user_iniciativas', $data );
                    }
                }
                else
                {
                    $data = $insert_id;

                    add_user_meta( $userID, 'user_iniciativas', $data );
                }

                $filename = $insert_id . '-' . $userID;
                $cont = 1;

                foreach($form_data["upload-file-iniciativas"] as $fileURL)
                {
                    $newFilename = $filename . '-' . $cont;

                    $moveFile = $this->move_iniciativas_to_uploads($fileURL, $newFilename, $insert_id);

                    $newData[$cont-1] = $moveFile;

                    $cont++;
                }

                $form_data["upload-file-iniciativas"] = $newData;

                $wpdb->update
                (
                    $table_name,
                    array
                    ( 
                        'form_value' => serialize( $form_data )
                    ),
                    array
                    (
                        'form_id' => $insert_id
                    )
                );
            }
        }
    }

    public function init_actions()
    {
        add_action( 'init', [$this, 'acf_formulario_secciones_field'] );

        add_action( 'cfdb7_after_save_data', [$this, 'after_save_data'] );
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
        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_63d068d6e0298',
            'title' => 'Formulario Secciones',
            'fields' => array(
                array(
                    'key' => 'field_63d068f23fca3',
                    'label' => 'Agregar formulario',
                    'name' => 'agregar_formulario',
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
                    'key' => 'field_63d069183fca4',
                    'label' => 'Ancho contenedor',
                    'name' => 'ancho_contenedor_formulario',
                    'type' => 'select',
                    'instructions' => 'Selecciona el ancho del contenedor, si quieres agregar 2 bloques uno al lado del otro tienes que cambiar el ancho en cada bloque.<br><br>Recuerda que el tamaño de los 2 bloques debe sumar "100"',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63d068f23fca3',
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
                    'key' => 'field_63d069623fca5',
                    'label' => 'Formulario',
                    'name' => 'formulario_contenedor_formulario',
                    'type' => 'acf_cf7',
                    'instructions' => 'Selecciona el formulario a mostrar',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_63d068f23fca3',
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
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'secciones',
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

    public function move_iniciativas_to_uploads($fileURL, $filename, $directoryName)
    {
        global $wp_filesystem;
        WP_Filesystem();

        $from = explode('/uploads/', $fileURL);
        $url = parse_url($fileURL);
        $ext = pathinfo($url['path'])['extension'];

        $newFilename = $filename . '.' . $ext;

        $content_directory = $wp_filesystem->wp_content_dir() . 'uploads/';

        if(!$wp_filesystem->is_dir($content_directory . 'iniciativas'))
            $wp_filesystem->mkdir( $content_directory . 'iniciativas' );

        if(!$wp_filesystem->is_dir($content_directory . 'iniciativas/' . $directoryName))
            $wp_filesystem->mkdir( $content_directory . 'iniciativas/' . $directoryName );

        $target_dir_location = $content_directory . 'iniciativas/' . $directoryName . '/';

        $file = $content_directory . $from[1];

        $newplace = $target_dir_location . $newFilename;

        if(rename($file, $newplace))
        {
            $newplace = $this->remove_path($newplace, $content_directory);

            $upload_dir = wp_upload_dir();

            return $upload_dir['baseurl'] . '/' . $newplace;
        }
        else
            return false;
    }

    public function remove_path($file, $path)
    {
        if(strpos($file, $path) !== FALSE)
        {
            return substr($file, strlen($path));
        }
    }

}