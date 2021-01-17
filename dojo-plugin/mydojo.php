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
        'main_js', 
        //plugins_url( 'js/dojo.js', __FILE__ ),
        plugin_dir_url( __FILE__ ) . 'js/main.js', NULL, 1.0, true
         );
    wp_localize_script( 'main_js', 'magicalData', array(
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'dojo_id' => get_the_ID(),
        'restURL' => get_site_url() . "/wp-json/wp/v2/",

    ) );

}
 
add_action( 'wp_enqueue_scripts', 'dojo_scripts');

?>