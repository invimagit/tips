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
                get_template_part('src/Blocks/ContenedorMultimedia/views/content', 'contenedormultimedia');
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
