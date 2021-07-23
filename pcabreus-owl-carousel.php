<?php
/**
 * Plugin Name:       Pcabreus Owl Carousel
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pcabreus-owl-carousel
 *
 * @package           create-block
 */

const OWL_CAROUSEL_VERSION = '2.3.4';

function create_block_pcabreus_owl_carousel_block_init() {
	register_block_type_from_metadata( __DIR__ );
}

add_action( 'init', 'create_block_pcabreus_owl_carousel_block_init' );

function add_theme_scripts_and_styles() {// vendor deps
	wp_enqueue_script(
			'own-carousel-script',
			plugin_dir_url( __FILE__ ) . 'owlcarousel/owl.carousel.min.js',
			__DIR__,
			array()
	);

	wp_enqueue_script(
			'own-carousel-init',
			plugin_dir_url( __FILE__ ) . 'owlcarousel/init.js',
			__DIR__,
			array()
	);
	wp_enqueue_style(
			'own-carousel-style',
			plugin_dir_url( __FILE__ ) . '/owlcarousel/assets/owl.carousel.min.css',
			array(),
			OWL_CAROUSEL_VERSION
	);
	wp_enqueue_style(
			'own-carousel-theme',
			plugin_dir_url( __FILE__ ) . '/owlcarousel/assets/owl.theme.default.min.css',
			array(),
			OWL_CAROUSEL_VERSION
	);
}

function init_own_carousel() {
	?>
	<script>
		jQuery(document).ready(function () {
			jQuery(".pcabreus-owl-carousel > .wp-block-group > .wp-block-group__inner-container")
					.addClass('owl-carousel')
					.owlCarousel({
						center: true,
						autoplay: true,
						items: 2,
						loop: true,
						margin: 10,
						responsive: {
							600: {
								items: 3
							}
						}
					});
		})
	</script><?php
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts_and_styles' );
add_action( 'wp_footer', 'init_own_carousel', 90 );
