<?
/** 
 * Plugin Name: Feature Card Block
*/ 

function register_feature_card_block(){
    register_block_type(__DIR__. '/build');
}

add_action('init','register_feature_card_block');
?>