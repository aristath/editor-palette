<?php
/**
 * Plugin name: Editor Palette
 */

add_action( 'admin_enqueue_scripts', function() {
    wp_enqueue_script(
        'editor-palette',
        plugins_url( 'dist/main.js', __FILE__ ),
        [],
        filemtime( __DIR__ . '/dist/main.js' )
    );
} );