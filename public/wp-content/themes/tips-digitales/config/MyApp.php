<?php
if (!defined('ABSPATH')) { exit; }

class MyApp
{
    protected $app_name;
    protected $app_version;
    public $theme_settings;
    public $theme_options;

    /**
     *
     */
    public function __construct()
    {
        $this->define_constants();
        $this->app_version  = defined('APP_VERSION') ? APP_VERSION : '1.0.0';
        $this->app_name     = defined('APP_NAME') ? APP_NAME : 'tips_digitales';
    }

    /**
     *  should avoid broken site because if required plugins listed in REQUIRED_PLUGINS constant wouldn't be activated
     *
     * 
     */
    public function acf_dependency_notice()
    {
        ?>
            <div class='wrap'>
                <div class='error notice'>
                    <p class='notice-error'>El Plugin "Advance Custom Fields PRO" es obligatorio.</p>
                </div>
            </div>
        <?php
    }

    public function wp_rest_cache_dependency_notice()
    {
        ?>
            <div class='wrap'>
                <div class='error notice'>
                    <p class='notice-error'>El Plugin "WP Rest Cache" es obligatorio.</p>
                </div>
            </div>
        <?php
    }

    public function inspect_plugin_dependencies()
    {
        $dependencies = true;
        if (defined('REQUIRED_PLUGINS'))
        {
            if (!function_exists('is_plugin_active'))
            {
                include_once( ABSPATH . 'wp-admin/includes/plugin.php');
            }
            
            foreach (REQUIRED_PLUGINS as $pluginame => $value)
            {
                if (!is_plugin_active($value))
                {
                    if($pluginame == 'ACF')
                        add_action('admin_notices', array($this, 'acf_dependency_notice'));

                    if($pluginame == 'WP_REST_CACHE')
                        add_action('admin_notices', array($this, 'wp_rest_cache_dependency_notice'));

                    $dependencies = false;
                }
            }
        }
        
        return $dependencies;
    }

    /**
     * define_constants function
     *
     * @return void
     */
    private function define_constants()
    {
        $this->define('ENVIRONMENT','dev');
        $this->define('APP_NAME', 'tips_digitales');
        $this->define('APP_VERSION', '1.0.0');
        $this->define('APP_TEXTDOMAIN', 'tips_digitales');
        $this->define('APP_PATH', get_template_directory_uri(). '/');
        $this->define('APP_TEMPLATE_PATH', get_stylesheet_directory());
        $this->define('ASSETS_PUBLIC_PATH', get_template_directory_uri().'/public/');

        $this->define('REQUIRED_PLUGINS',array('ACF'=>'advanced-custom-fields-pro/acf.php', 'WP_REST_CACHE'=>'wp-rest-cache/wp-rest-cache.php'));

        $this->define('SRC_PATH', get_template_directory().'/src/');

        $dependencies = $this->inspect_plugin_dependencies();
        if ($dependencies){
            $this->theme_settings_init();
        }
    }

    /**
     * define function
     *
     * @param [string] $name
     * @param [string] $value
     *
     * @return void
     */
    private function define($name, $value)
    {
        if (!defined($name)) {
            define($name, $value);
        }
    }

    /**
     * run function
     *
     * @return void
     */
    public function init()
    {
        $this->init_vendor_classes();
        $this->init_src_classes();

        $this->init_filters();
    }

    /**
     * get_app_version function
     *
     * @return string app_version
     */
    public function get_app_version()
    {
        return $this->app_version;
    }

    /**
     * get_app_name function
     *
     * @return string app_name
     */
    public function get_app_name()
    {
        return $this->app_name;
    }

    /**
     * init function
     *
     * init all components hooks
     *
     * @return void
     */
    private function init_vendor_classes()
    {
        //$this->tinymce_plugins_init();
    }

    public function add_login_check()
    {
        if ( is_user_logged_in() )
        {
            if( is_page('iniciar-sesion') )
            {
                wp_redirect(home_url());
                exit;
            }
        }
    }

    private function init_src_classes()
    {
        $this->acf_init();
        $this->navwalker_init();
        $this->taxonomies_init();

        //Register Post Types
        $this->cursos_init();
        $this->secciones_init();
        $this->eventos_init();

        //Register blocks
        $this->contenedor_multimedia_init();
        $this->contenedor_formulario_init();
        $this->contenedor_login_register_init();
    }

    private function acf_init()
    {
        require_once(SRC_PATH . 'Acf/MyAcf.php');

        $data = new MyAcf();
        $data->init();
    }

    private function taxonomies_init()
    {
        require_once(SRC_PATH . 'Taxonomies/MyTaxonomies.php');

        $data = new MyTaxonomies();
        $data->init();
    }

    private function navwalker_init()
    {
        if ( ! file_exists( SRC_PATH . 'Navwalker/MyNavwalker.php' ) )
        {
            return new WP_Error( 'class-wp-bootstrap-navwalker-missing', __( 'It appears the Navwalker/MyNavwalker.php file may be missing.', 'wp-bootstrap-navwalker' ) );
        }
        else
        {
            require_once(SRC_PATH . 'Navwalker/MyNavwalker.php');
        }
    }

    private function cursos_init()
    {
        require_once(SRC_PATH . 'PostTypes/Cursos/MyCursos.php');

        $postsType = new MyCursos();
        $postsType->init();
    }

    private function secciones_init()
    {
        require_once(SRC_PATH . 'PostTypes/Secciones/MySecciones.php');

        $postsType = new MySecciones();
        $postsType->init();
    }

    private function eventos_init()
    {
        require_once(SRC_PATH . 'PostTypes/Eventos/MyEventos.php');

        $postsType = new MyEventos();
        $postsType->init();
    }

    private function contenedor_multimedia_init()
    {
        require_once(SRC_PATH . 'Blocks/ContenedorMultimedia/MyContenedorMultimedia.php');

        $block = new MyContenedorMultimedia();
        $block->init();
    }

    private function contenedor_formulario_init()
    {
        require_once(SRC_PATH . 'Blocks/ContenedorFormulario/MyContenedorFormulario.php');

        $block = new MyContenedorFormulario();
        $block->init();
    }

    private function contenedor_login_register_init()
    {
        require_once(SRC_PATH . 'Blocks/ContenedorLoginRegister/MyContenedorLoginRegister.php');

        $block = new MyContenedorLoginRegister();
        $block->init();
    }

    /**
     * theme settings init function
     * 
     */
    private function theme_settings_init()
    {
        $this->theme_support_init();
        $this->register_menus_init();

        $this->register_actions_init();
        $this->register_filters_init();
        $this->register_requires_init();
    }

    public function theme_support_init()
    {
        load_theme_textdomain( 'tips-digitales', get_template_directory() . '/languages' );

        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );

        add_theme_support( 'customize-selective-refresh-widgets' );
    }

    private function register_menus_init()
    {
        register_nav_menus( array(
            'primary' => __( 'Primary Menu', 'tips' ),
        ) );

        register_nav_menus( array(
            'secondary' => __( 'Secondary Menu', 'tips-2' ),
        ) );

        register_nav_menus( array(
            'cursos' => __( 'Menu Cursos', 'cursos' ),
        ) );
    }

    private function register_actions_init()
    {
        //Remove redirect
        add_action( 'wp', array($this, 'add_login_check'));

        add_action( 'admin_init', array($this, 'block_wp_admin_to_subscribers'));
        add_action( 'login_head', array($this, 'change_login_wp_image'));

        add_action('login_init', array($this, 'no_weak_password_check'));
        add_action('admin_head', array($this, 'no_weak_password_check'));

        add_action( 'wp_default_scripts', array($this, 'remove_jquery_migrate'));
        add_action( 'after_setup_theme', array($this, 'remove_admin_bar'));
        add_action( 'after_setup_theme', array($this, 'tips_digitales_content_width'), 0 );
        add_action( 'after_setup_theme', array($this, 'theme_support_init') );
        add_action( 'widgets_init', array($this, 'tips_digitales_widgets_init') );
        add_action( 'wp_print_styles', array($this, 'load_styles') );
        add_action( 'wp_enqueue_scripts', array($this, 'load_scripts') );
        add_action( 'wp_head', array($this, 'add_fonts_preload') );

        add_action( 'wp_enqueue_scripts', function()
        {
            // Remove CSS on the front end.
            wp_dequeue_style( 'wp-block-library' );

            // Remove Gutenberg theme.
            wp_dequeue_style( 'wp-block-library-theme' );

            // Remove inline global CSS on the front end.
            wp_dequeue_style( 'global-styles' );
        }, 20 );

    }

    private function register_filters_init()
    {
        add_filter('script_loader_tag', array($this, 'add_async_or_defer_scripts'), 10, 2);
        add_filter( 'style_loader_tag', array($this, 'add_preload_css'), 10, 4);
        add_filter( 'nav_menu_css_class', array($this, 'special_nav_class'), 10, 3 );
        add_filter( 'nav_menu_link_attributes', array($this, 'prefix_bs5_dropdown_data_attribute'), 20, 3 );

        // Disable Gutenberg on the back end.
        add_filter( 'use_block_editor_for_post', '__return_false' );

        // Disable Gutenberg for widgets.
        add_filter( 'use_widgets_block_editor', '__return_false' );

        add_filter( 'nav_menu_submenu_css_class', array($this, 'nav_menu_submenu_css_class') );
    }

    private function register_requires_init()
    {        
        /**
         * Implement the Custom Header feature.
         */
        require get_template_directory() . '/inc/custom-header.php';

        /**
         * Custom template tags for this theme.
         */
        require get_template_directory() . '/inc/template-tags.php';

        /**
         * Functions which enhance the theme by hooking into WordPress.
         */
        require get_template_directory() . '/inc/template-functions.php';

        /**
         * Customizer additions.
         */
        require get_template_directory() . '/inc/customizer.php';

        /**
         * Load Jetpack compatibility file.
         */
        if ( defined( 'JETPACK__VERSION' ) ) {
            require get_template_directory() . '/inc/jetpack.php';
        }

    }

    public function remove_admin_bar()
    {
        if (!is_admin())
        {
          show_admin_bar(false);
        }
    }

    public function change_login_wp_image()
    {
        echo '<style type="text/css">
        .login h1 a {
        background-image:url('. get_template_directory_uri() . '/public/images/logo.png' . ') !important;
        background-size: 100px auto !important;
        }
        </style>';
    }

    public function no_weak_password_check()
    {
        echo '<style type="text/css">
        .pw-weak {
            display:none!important;
        }
        #nav {
            display:none!important;
        }</style>';

        wp_register_script('reset-password', ASSETS_PUBLIC_PATH . 'js/reset-password.js', array(), APP_VERSION, true );

        wp_enqueue_script('reset-password');
    }

    public function tips_digitales_content_width()
    {
        $GLOBALS['content_width'] = apply_filters( 'tips_digitales_content_width', 640 );
    }

    public function tips_digitales_widgets_init()
    {
        register_sidebar(
            array(
                'name'          => esc_html__( 'Sidebar', 'tips-digitales' ),
                'id'            => 'sidebar-1',
                'description'   => esc_html__( 'Add widgets here.', 'tips-digitales' ),
                'before_widget' => '<section id="%1$s" class="widget %2$s">',
                'after_widget'  => '</section>',
                'before_title'  => '<h2 class="widget-title">',
                'after_title'   => '</h2>',
            )
        );
    }

    public function load_styles()
    {
        wp_dequeue_style( 'wp-block-library' );
        wp_dequeue_style( 'classic-theme-styles' );

        if(!is_admin())
        {
            wp_enqueue_style( 'bootstrap', ASSETS_PUBLIC_PATH . 'css/bootstrap.min.css');
            wp_enqueue_style( 'fontawesome', 'https://use.fontawesome.com/releases/v6.2.1/css/all.css');

            wp_enqueue_style( 'style', ASSETS_PUBLIC_PATH . 'css/styles.min.css', array(), APP_VERSION );

            wp_deregister_style( 'dashicons' ); 
        }
    }

    public function load_scripts()
    {
        if(!is_admin())
        {
            wp_enqueue_script('jquery');

            wp_register_script('bootstrap', ASSETS_PUBLIC_PATH . 'js/bootstrap.bundle.min.js', array(), APP_VERSION, true );

            wp_enqueue_script('bootstrap');

            wp_register_script('scripts', ASSETS_PUBLIC_PATH . 'js/scripts.min.js', array(), APP_VERSION, true );

            wp_enqueue_script('scripts');

            wp_dequeue_script( 'google-recaptcha' );
            wp_dequeue_script( 'wpcf7-recaptcha' );

            if(!is_singular('cursos'))
            {
                wp_dequeue_script( 'contact-form-7' );
                wp_dequeue_style( 'contact-form-7' );
            }
        }
        else
        {

        }

        /*
            if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
                wp_enqueue_script( 'comment-reply' );
            }
        */
    }

    public function add_fonts_preload()
    {
        //Klavika
        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Klavika/KlavikaLight-Plain.otf" as="font" type="font/otf" crossorigin>';

        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Klavika/KlavikaRegular-TF.otf" as="font" type="font/otf" crossorigin>';

        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Klavika/KlavikaMedium-TF.otf" as="font" type="font/otf" crossorigin>';

        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Klavika/KlavikaBoldBold.otf" as="font" type="font/otf" crossorigin>';

        //MuseoSans
        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/MuseoSans/MuseoSans_300.otf" as="font" type="font/otf" crossorigin>';

        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/MuseoSans/MuseoSans_700.otf" as="font" type="font/otf" crossorigin>';

        //FontAwesome
        echo '<link rel="preload" href="https://use.fontawesome.com/releases/v6.2.1/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin>';

        echo '<link rel="preload" href="https://use.fontawesome.com/releases/v6.2.1/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>';

    }

    public function add_preload_css($html, $handle, $href, $media)
    {
        if(!is_admin())
                $html = '<link rel="preload" href="'.$href.'" as="style">'.$html;

        return $html;
    }

    public function add_async_or_defer_scripts($tag, $handle)
    {
        $noDefer = array('');

        if (is_admin() || in_array($handle, $noDefer))
            return $tag;

        return str_replace(' src', ' defer="defer" src', $tag);
    }

    public function special_nav_class( $classes, $item, $args )
    {
        if ( 'menu-header' === $args->menu->slug )
        {
            $classes[] = 'menu-item-circle';
        }

        if ( 'menu-header-derecha' === $args->menu->slug )
        {
            $classes[] = 'menu-derecha-item-circle text-lg-end';
        }

        if ( 'menu-cursos' === $args->menu->slug)
        {
            if($item->menu_item_parent == 0)
            {
                if($item->menu_image_icon_type == "")
                {
                    if(is_single())
                    {
                        if(get_post_type() == "secciones")
                        {
                            if (strpos(get_permalink(), $item->url) !== false)
                                $classes[] = 'col-5-elements menu-item-cursos menu-item-cursos-active';
                            else
                                $classes[] = 'col-5-elements menu-item-cursos';
                        }
                        else if(get_post_type() == "cursos")
                        {
                            $terms = wp_get_post_terms(get_the_ID(), 'seccion', array( 'parent' => 0, 'fields' => 'names'));

                            if ( $terms != null )
                            {
                                foreach( $terms as $term )
                                {
                                    if (strcmp($item->title, $term) !== 0)
                                        $classes[] = 'col-5-elements menu-item-cursos';
                                    else
                                        $classes[] = 'col-5-elements menu-item-cursos menu-item-cursos-active';
                                }
                            }
                            else
                                $classes[] = 'col-5-elements menu-item-cursos';
                        }
                        else
                            $classes[] = 'col-5-elements menu-item-cursos';
                    }
                    else
                        $classes[] = 'col-5-elements menu-item-cursos';
                }
            }
            else
                $classes[] = 'menu-item-cursos';

        }

        return $classes;
    }

    /**
     * Use namespaced data attribute for Bootstrap's dropdown toggles.
     *
     * @param array    $atts HTML attributes applied to the item's `<a>` element.
     * @param WP_Post  $item The current menu item.
     * @param stdClass $args An object of wp_nav_menu() arguments.
     * @return array
     */
    public function prefix_bs5_dropdown_data_attribute( $atts, $item, $args )
    {
        if ( is_a( $args->walker, 'MyNavwalker' ) ) {
            if ( array_key_exists( 'data-toggle', $atts ) ) {
                unset( $atts['data-toggle'] );
                $atts['data-bs-toggle'] = 'dropdown';
            }
        }
        return $atts;
    }

    public function nav_menu_submenu_css_class( $classes )
    {
        $classes[] = 'new-submenu-class';
        return $classes;
    }

    public function init_filters()
    {
        add_filter('acf/fields/post_object/query',[$this, 'post_status_options_filter'], 10, 3);
        add_filter('acf/fields/relationship/query',[$this, 'post_status_options_filter'], 10, 3);
        add_filter('acf/fields/page_link/query',[$this, 'post_status_options_filter'], 10, 3);

        add_filter( 'wp_rest_cache/allowed_endpoints', [$this, 'wprc_add_acf_posts_endpoint'], 10, 1);

    }

    public function post_status_options_filter($options, $field, $the_post)
    {
        $options['post_status'] = array('publish');
        return $options;
    }

    public function block_wp_admin_to_subscribers()
    {
        if ( wp_doing_ajax() || ! is_user_logged_in() ) {
            return;
        }

        $roles = (array) wp_get_current_user()->roles;
        if ( ! in_array( 'administrator', $roles ) )
        {
            wp_redirect(home_url());
            exit;
        }
    }

    public function remove_jquery_migrate( $scripts )
    {
        if ( ! is_admin() && isset( $scripts->registered['jquery'] ) )
        {
            $script = $scripts->registered['jquery'];
            
            if ( ! empty( $script->deps ) )
            {
                $script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
            }
        }
    }

    public function wprc_add_acf_posts_endpoint( $allowed_endpoints )
    {
        if ( ! isset( $allowed_endpoints[ 'contact-form-7/v1' ] ) || ! in_array( 'contact-forms', $allowed_endpoints[ 'contact-form-7/v1' ] ) ) {
            $allowed_endpoints[ 'contact-form-7/v1' ][] = 'contact-forms';
        }

        return $allowed_endpoints;
    }
}

?>