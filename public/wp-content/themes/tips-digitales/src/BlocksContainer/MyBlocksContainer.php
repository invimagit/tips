<?php
if (!defined('ABSPATH')) { exit; }

class MyBlocksContainer
{
    public function __construct()
    {
    }

    public function init()
    {
        $this->init_actions();
    }

    public function init_actions()
    {
    }

    public static function views_blocks_container($layout, $args = null)
    {
        switch ($layout)
        {
            case 'ContenedorMultimedia':
                get_template_part('src/Blocks/ContenedorMultimedia/views/content', 'contenedor-multimedia');
                break;

            case 'ContenedorFormulario':
                get_template_part('src/Blocks/ContenedorFormulario/views/content', 'contenedor-formulario');
                break;

            case 'Login':
                get_template_part('src/Blocks/ContenedorLoginRegister/views/content', 'contenedor-login');
                break;

            case 'Register':
                get_template_part('src/Blocks/ContenedorLoginRegister/views/content', 'contenedor-register');
                break;

            case 'RecoverPass':
                get_template_part('src/Blocks/ContenedorLoginRegister/views/content', 'contenedor-recover-pass');
                break;

            case 'Secciones':
                get_template_part('src/PostTypes/Secciones/views/content', 'secciones');
                break;

            case 'Cursos':
                get_template_part('src/PostTypes/Cursos/views/content', 'cursos');
                break;


/*
            case 'featured_16_9_block':
                if (!is_single()){
                    get_template_part('src/Blocks/Featured16_9/views/content', 'featured-16-9');
                }
                break;
*/
        }
    }
}
