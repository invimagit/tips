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
                    <p class='notice-error'>El PLUGIN "Advance Custom Fields PRO" es necesario.</p>
                </div>
            </div>
        <?php
    }

    public function inspect_plugin_dependencies()
    {
        $dependencies = true;
        if (defined('REQUIRED_PLUGINS')){
            if (!function_exists('is_plugin_active')) {
                include_once( ABSPATH . 'wp-admin/includes/plugin.php');
            }
            foreach (REQUIRED_PLUGINS as $pluginame => $value){
                if (!is_plugin_active($value)){
                    add_action('admin_notices', array($this, 'acf_dependency_notice'));
                    //switch_theme(get_option('theme_switched')); 
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
        $this->define('REQUIRED_PLUGINS',array('Advanced Custom Fields PRO'=>'advanced-custom-fields-pro/acf.php'));  

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

    private function init_src_classes()
    {
        $this->acf_init();
        $this->navwalker_init();
        $this->contenedor_multimedia_init();

        $this->blocks_continer_init();
    }

    private function acf_init()
    {
        require_once(SRC_PATH . 'Acf/MyAcf.php');

        $data = new MyAcf();
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

    private function contenedor_multimedia_init()
    {
        require_once(SRC_PATH . 'Blocks/ContenedorMultimedia/MyContenedorMultimedia.php');

        $data = new MyContenedorMultimedia();
        $data->init();
    }

    private function blocks_continer_init()
    {
        require_once(SRC_PATH . 'BlocksContainer/MyBlocksContainer.php');

        $data = new MyBlocksContainer();
        $data->init();
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
            wp_enqueue_style( 'style', ASSETS_PUBLIC_PATH . 'css/style.css', array(), APP_VERSION );
            wp_enqueue_style( 'bootstrap', ASSETS_PUBLIC_PATH . 'css/bootstrap.min.css');
            wp_enqueue_style( 'fontawesome', 'https://use.fontawesome.com/releases/v6.2.1/css/all.css');


            //Styles Blocks
            wp_enqueue_style( 'modal', APP_PATH.'src/Blocks/ContenedorMultimedia/assets/css/modal.css', array(), APP_VERSION );
        }
    }

    public function load_scripts()
    {
        if(!is_admin())
        {
            wp_deregister_script('jquery');
            wp_register_script('jquery', true);

            wp_register_script('jquery-js', ASSETS_PUBLIC_PATH . 'js/jquery.min.js', array(), APP_VERSION, true );
            wp_register_script('bootstrap', ASSETS_PUBLIC_PATH . 'js/bootstrap.bundle.min.js', array(), APP_VERSION, true );

            wp_enqueue_script('jquery-js');
            wp_enqueue_script('bootstrap');

            //Scripts Blocks
            wp_register_script('modal-js', APP_PATH.'src/Blocks/ContenedorMultimedia/assets/js/modal.js', array('jquery-js'), APP_VERSION, true );
            
            wp_enqueue_script('modal-js');
        }

        /*
            if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
                wp_enqueue_script( 'comment-reply' );
            }
        */
    }

    public function add_fonts_preload()
    {
        /*
        echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Libre_Franklin/LibreFranklin-Regular.woff2" as="font" type="font/woff2" crossorigin>';

        if (is_front_page()) {
            echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/montserrat-bold.woff2" as="font" type="font/woff2" crossorigin>';
        } else if (is_archive()) {
            echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Libre_Franklin/LibreFranklin-Bold.woff2" as="font" type="font/woff2" crossorigin>';
        } else if (is_single()) {
            echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/Libre_Franklin/LibreFranklin-Bold.woff2" as="font" type="font/woff2" crossorigin>';
            echo '<link rel="preload" href="'.ASSETS_PUBLIC_PATH.'fonts/montserrat-medium.woff2" as="font" type="font/woff2" crossorigin>';
        }
    */
    }

    public function add_preload_css($html, $handle, $href, $media)
    {
        $preload = array('bootstrap', 'style', 'fontawesome');

        if (in_array($handle, $preload)) {
            $html = '<link rel="preload" href="'.$href.'" as="style">'.$html;
        }

        return $html;
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

        if ( 'menu-cursos' === $args->menu->slug && $item->post_parent == 0 )
        {
            if($item->menu_image_icon_type == "")
            {
                $classes[] = 'col-2 menu-item-cursos';
            }
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


}

?>