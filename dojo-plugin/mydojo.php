<?php
/**
 * Dojo
 *
 * Plugin Name: KufunDojo
 * Plugin URI:  https://kufundo.com
 * Description: Dojo Editor
 * Version:     1.6
 * Author:      Imajenation
 * Author URI:  https://imajenation.co.zw/
 * License:     GPLv2 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Requires at least: 4.9
 * Requires PHP: 5.2.4
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation. You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
function dojo_scripts(){
    wp_enqueue_script(
        'dojo-data', 
        plugin_dir_url( __FILE__ ) . 'js/data.js', 
        NULL, 
        time(), 
        true
         );

    wp_enqueue_script(
        'dojo-view', 
        plugin_dir_url( __FILE__ ) . 'js/view.js', 
        'dojo-data', 
        time(), 
        true 
        );

    

    wp_enqueue_script(
        'dojo-main', 
        plugin_dir_url( __FILE__ ) . 'js/main.js', 
        'dojo-view', 
        time(), 
        true 
        );

        

    wp_enqueue_style( 
        'dojo-style', 
        plugin_dir_url( __FILE__ ) . 'css/style.css', NULL, time());

    wp_localize_script( 'dojo-main', 'dynamicData', array(
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'dojo_id' => get_the_ID(),
        '_the_title' => the_title(),
        '_the_content' => the_content(),
        'restURL' => get_site_url() . "/wp-json/wp/v2/",

    ) );

    wp_localize_script( 'dojo-data', 'dynamicData', array(
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'dojo_id' => get_the_ID(),
        'restURL' => get_site_url() . "/wp-json/wp/v2/",

    ) );


    

}
 
add_action( 'wp_enqueue_scripts', 'dojo_scripts');
//add_action( 'admin_enqueue_scripts', 'dojo_scripts');




function register_dojo_cpt(){
    register_post_type( 'dojo', [
        'label' => 'Dojos',
        'public' => true,
        'capability_type' => 'post',
    ] );
}

add_action('init', 'register_dojo_cpt');


?>