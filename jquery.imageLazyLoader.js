/**
 * jQuery Image lazy load plugin
 *
 * Copyright (c) 2012 miraoto
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */


/**
 * lazy load plugin
 *
 * @name $.imageLazyLoader();
 * @cat Plugins/Lazy load
 * @author miraoto
 *
 * @example $.imageLazyLoader();
 * @desc default setting
 */
(function($) {
  $.imageLazyLoader =function(element, options) {
    var defaults = {
          count        : 0,
          invervalId   : 0,
          intervalTime : 1000,
          fedeInTime   : 500,
          target       : '.imgBox'
        }

    var plugin = this;
        plugin.settings = {}

    var $element = $(element),
        element = element;

    plugin.init = function() {
      $(defaults.target + ' img').hide();
      $(window).bind("load", function() {
    	  defaults.invervalId = setInterval(lazyLoad,defaults.intervalTime);
      });
    }

    /**
     * lazyLoad action
     */
    var lazyLoad = function() {
    	var imgNum = $('img').length;
    	if (defaults.count >= imgNum) {
    	  clearInterval(defaults.invervalId);
    	}
    	$('img:hidden').eq(0).fadeIn(defaults.fedeInTime);
    	defaults.count++;
    }
    plugin.init();
 }
 $.fn.imageLazyLoader = function(options) {
    return this.each(function() {
       if (undefined == $(this).data('imageLazyLoader')) {
          var plugin = new $.imageLazyLoader(this, options);
          $(this).data('imageLazyLoader', plugin);
       }
    });
 }
})(jQuery);