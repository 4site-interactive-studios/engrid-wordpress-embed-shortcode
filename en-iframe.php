<?php

/**
 * @package 4Site
 */
/*
Plugin Name: Engaging Networks Iframe
Plugin URI: https://engagingnetworks.net/
Description: Gives you a shortcode to embed an external Engaging Networks Donation Page into your Wordpress Website.
Version: 0.0.1
Author: 4Site Studios
Author URI: https://4sitestudios.com/
License: GPLv2 or later
Text Domain: foursite
*/

function en_iframe_render($atts = [], $content = null, $tag = '')
{
    // normalize attribute keys, lowercase
    $atts = array_change_key_case((array) $atts, CASE_LOWER);
    // Get URL
    $url = $atts['url'];
    $query_strings = $_SERVER['QUERY_STRING'];
    if($query_strings){
        // Check if URL has "?"
        if(strpos($url, "?") === false){
            $url.='?'.$query_strings;
        }else{
            $url.='&'.$query_strings;
        }

    }
    $output = "<iframe loading='lazy' id='en-iframe' width='100%' scrolling='no' class='en-iframe " . $atts['class'] . "'";
    $output .= " src='" . $url . "' frameborder='0' allowfullscreen></iframe>";
    return $output;
}
add_shortcode('en', 'en_iframe_render');

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('iframe-sizer', plugin_dir_url(__FILE__) . '/js/iframe.js', array(), false, true);
});
