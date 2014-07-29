/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
	$("form#views-exposed-form-taxonomy-term-page #edit-submit-taxonomy-term").hide();
    $("form#views-exposed-form-taxonomy-term-page select").change(function() {
    	$("form#views-exposed-form-taxonomy-term-page").submit();
	});

  }
};

})(jQuery, Drupal, this, this.document);