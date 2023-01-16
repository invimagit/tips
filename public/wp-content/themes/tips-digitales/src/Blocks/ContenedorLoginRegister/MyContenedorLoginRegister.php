<?php
if (!defined('ABSPATH')) { exit; }

class MyContenedorLoginRegister
{
    private $name       = 'login-register';
    private $slug       = 'login-register';

    public function __construct()
    {
    }

    public function init()
    {
        $this->init_actions();
        $this->init_filters();

        $this->acf_fields_login_page();
        $this->acf_fields_theme();
    }

    public function init_actions()
    {
        add_action('wp_ajax_ajax_login', array($this, 'ajax_login'));
        add_action('wp_ajax_nopriv_ajax_login', array($this, 'ajax_login'));

        add_action('wp_ajax_ajax_recover_pass', array($this, 'ajax_recover_pass'));
        add_action('wp_ajax_nopriv_ajax_recover_pass', array($this, 'ajax_recover_pass'));

        add_action('wp_ajax_ajax_register', array($this, 'ajax_register'));
        add_action('wp_ajax_nopriv_ajax_register', array($this, 'ajax_register'));
    }

    public function get_error_message($code)
    {
        switch ($code)
        {
            case 'empty_username':
                return 'El campo del correo electrónico está vacío';
                break;

            case 'invalid_email':
                return 'Dirección de correo electrónico desconocida';
                break;

            case 'empty_password':
                return 'El campo de la contraseña está vacío';
                break;

            case 'incorrect_password':
                return 'La contraseña que has introducido no es correcta';
                break;

            default:
                return 'Ocurrió un error inesperado, vuelve a intentarlo más tarde';
                break;
        }
    }

    public function ajax_recover_pass()
    {
        $user_login = esc_attr($_POST["email"]);

        $userData = get_user_by('email', $user_login);

        if($userData)
        {
            $reset_key = get_password_reset_key( $userData );

            $user_login = $userData->user_login;

            $reset_link = home_url( '/' ) . 'wp-login.php?action=rp&key=' . $reset_key . '&login=' . rawurlencode($user_login) . '';

            $site_title = get_bloginfo( 'name' );


            $to = $userData->user_email;
            $subject = '[' . $site_title . '] Restablecer la contraseña';
            $body = 'Alguien ha solicitado un restablecimiento de la contraseña para la siguiente cuenta:<br><br>Nombre del sitio: ' . $site_title . '<br><br>Si ha sido un error, ignora este correo electrónico y no pasará nada.<br><br>Para restablecer tu contraseña, visita la siguiente dirección: <a href="' . $reset_link . '">' . $reset_link . '</a><br><br>Esta solicitud de restablecimiento de contraseña se ha originado desde la dirección IP: ' . getenv("REMOTE_ADDR") . '.';

            $headers = array('Content-Type: text/html; charset=UTF-8','From: ' . $site_title . '');

            $sendMail = wp_mail( $to, $subject, $body, $headers );

            if ($sendMail)
            {
                $result['type'] = 'success';
                $result['title'] = 'Comprueba tu correo electrónico';
                $result['message'] = 'Enviamos un correo electrónico con un enlace de confirmación para restablecer tu contraseña';
            }
            else
            {
                $result['type'] = 'error';
                $result['title'] = '';
                $result['message'] = $sendMail;
            }
        }
        else
        {
            $result['type'] = 'error';
            $result['title'] = '';
            $result['message'] = $this->get_error_message('invalid_email');
        }

        $result = json_encode($result);
        echo $result;
        wp_die();
    }

    public function ajax_login()
    {
        $user_login     = esc_attr($_POST["email"]);
        $user_password  = esc_attr($_POST["pass"]);

        $creds = array();
        $creds['user_login'] = $user_login;
        $creds['user_password'] = $user_password;
        $creds['remember'] = true;

        $user = wp_signon( $creds, false );

        if ( is_wp_error( $user ) )
        {
            $result['type'] = 'error';
            $result['title'] = '';
            $result['message'] = $this->get_error_message($user->get_error_code());
        }
        else
        {
            wp_set_current_user($user->ID);
            wp_set_auth_cookie($user->ID);

            $result['type'] = 'success';
            $result['redirectURL'] = get_home_url();        
        }

        $result = json_encode($result);
        echo $result;
        wp_die();
    }

    public function ajax_register()
    {
        $user_email             = esc_attr($_POST["registerEmail"]);

        if ( email_exists( $user_email ) == false )
        {    
            $random_password = wp_generate_password( 8 );
            $user_id = wp_create_user( $user_email, $random_password, $user_email );
            $user_id_role = new WP_User($user_id);
            $user_id_role->set_role('subscriber');

            $user_name              = esc_attr($_POST["registerName"]);
            $user_tipoDocumento     = esc_attr($_POST["registerTipoDocumento"]);
            $user_documento         = esc_attr($_POST["registerDocumento"]);

            $user_telefono          = esc_attr($_POST["registerTelefono"]);
            $user_fecha             = esc_attr($_POST["registerDate"]);
            $user_identidadGenero   = esc_attr($_POST["registerIdentidadGenero"]);
            $user_localidad         = esc_attr($_POST["registerLocalidad"]);
            $user_poblacion         = esc_attr($_POST["registerPoblacionDiferencial"]);
            $user_orgCiudadana      = esc_attr($_POST["registerOrganiacionCiudadana"]);
            $user_orgExtra          = esc_attr($_POST["registerOtraOrganizacion"]);

            add_user_meta( $user_id, 'user_name', $user_name );
            add_user_meta( $user_id, 'user_tipoDocumento', $user_tipoDocumento );
            add_user_meta( $user_id, 'user_documento', $user_documento );
            add_user_meta( $user_id, 'user_telefono', $user_telefono );
            add_user_meta( $user_id, 'user_fecha', $user_fecha );
            add_user_meta( $user_id, 'user_identidadGenero', $user_identidadGenero );
            add_user_meta( $user_id, 'user_localidad', $user_localidad );
            add_user_meta( $user_id, 'user_poblacion', json_encode($user_poblacion) );
            add_user_meta( $user_id, 'user_orgCiudadana', json_encode($user_orgCiudadana) );
            add_user_meta( $user_id, 'user_orgExtra', $user_orgExtra );

            $nickname = explode(" ", $user_name);

            add_user_meta( $user_id, 'user_nickname', $nickname[0] );

            if( isset($_FILES["registerFoto"]) && $_FILES["registerFoto"]["name"] != "")
            {
                $fileName = 'avatar-' . $user_id . '.jpg';
        
                $avatar = wp_upload_bits($fileName, null, file_get_contents($_FILES["registerFoto"]["tmp_name"]));

                if($avatar["url"])
                {
                    add_user_meta( $user_id, 'user_foto', $avatar["url"] );
                }
            }

            $userData = get_user_by('id', $user_id);

            $reset_key = get_password_reset_key( $userData );

            $user_login = $userData->user_login;

            $reset_link = home_url( '/' ) . 'wp-login.php?action=rp&key=' . $reset_key . '&login=' . rawurlencode($user_login) . '';

            $site_title = get_bloginfo( 'name' );

            $to = $userData->user_email;

            $subject = '[' . $site_title . '] Contraseña nueva';
            $body = 'Tu registro ha sido exitoso:<br><br>Nombre del sitio: ' . $site_title . '<br><br>Solo hace falta que generes tu contraseña, para hacerlo visita la siguiente dirección: <a href="' . $reset_link . '">' . $reset_link . '</a>.';

            $headers = array('Content-Type: text/html; charset=UTF-8','From: ' . $site_title . '');

            $sendMail = wp_mail( $to, $subject, $body, $headers );

            if ($sendMail)
            {
                $result['type'] = 'success';
                $result['title'] = 'Usuario creado exitosamente';
                $result['message'] = 'Comprueba tu correo electrónico, hemos enviado un correo con un enlace de confirmación para que generes tu contraseña';
            }
            else
            {
                $result['type'] = 'error';
                $result['title'] = '';
                $result['message'] = $sendMail;
            }
        }
        else
        {
            $result['type'] = 'error';
            $result['title'] = '';
            $result['message'] = "El correo electrónico ingresado ya esta siendo usado por otro usuario.";
        }

        $result = json_encode($result);
        echo $result;
        wp_die();
    }

    public function init_filters()
    {
    }

    public function get_name()
    {
        return $this->name;
    }

    public function get_slug()
    {
        return $this->slug;
    }

    public function acf_fields_theme()
    {
        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_63b44df8d9a18',
            'title' => 'Contenedor Recuperar Contraseña',
            'fields' => array(
                array(
                    'key' => 'field_63b4537624f8a',
                    'label' => '',
                    'name' => 'grupo_recuperar_contrasena',
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
                            'key' => 'field_63b44e466c38e',
                            'label' => 'Descripción',
                            'name' => 'descripcion',
                            'type' => 'textarea',
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
                            'maxlength' => '',
                            'rows' => '',
                            'new_lines' => '',
                        ),
                    ),
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

    public function acf_fields_login_page()
    {
        $idPage = get_page_by_path( 'iniciar-sesion', ARRAY_A );

        if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_638e6fd6d72fclogin',
            'title' => 'Login',
            'fields' => array(
                array(
                    'key' => 'field_638e6fe63d852login',
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
                    'key' => 'field_638e6ffc3d853login',
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
                    'key' => 'field_638e702a3d854login',
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
                        'layout_638e703ba16cblogin' => array(
                            'key' => 'layout_638e703ba16cblogin',
                            'name' => 'boton_izquierda',
                            'label' => 'Botón Izquierda',
                            'display' => 'block',
                            'sub_fields' => array(
                                array(
                                    'key' => 'field_638e704c3d855login',
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
                                    'key' => 'field_638e70843d856login',
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
                                    'key' => 'field_638e70843d857login',
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
                        'layout_638e70d03d85alogin' => array(
                            'key' => 'layout_638e70d03d85alogin',
                            'name' => 'boton_derecha',
                            'label' => 'Botón derecha',
                            'display' => 'block',
                            'sub_fields' => array(
                                array(
                                    'key' => 'field_638e70d03d85blogin',
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
                                    'key' => 'field_638e70d03d85clogin',
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
                                    'key' => 'field_638e70d03d85dlogin',
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
                    'key' => 'field_638e666b64579login',
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
                    'key' => 'field_638e1f8264575login',
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
                    'key' => 'field_638e47a845851login',
                    'label' => 'Insertar video de Youtube?',
                    'name' => 'insertar_video_de_youtube',
                    'type' => 'button_group',
                    'instructions' => 'Selecciona "Si" para insertar un video de Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e1f8264575login',
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
                    'key' => 'field_638e481345852login',
                    'label' => 'Video Youtube',
                    'name' => 'video_youtube',
                    'type' => 'oembed',
                    'instructions' => 'Inserta la URL del video de Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e47a845851login',
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
                    'key' => 'field_638e48d445853login',
                    'label' => 'Subir video',
                    'name' => 'subir_video',
                    'type' => 'file',
                    'instructions' => 'Seleccione el video a subir',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_638e47a845851login',
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
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page',
                        'operator' => '==',
                        'value' => $idPage["ID"],
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
            ),
            'active' => true,
            'description' => '',
        ));

        endif;
    }

}