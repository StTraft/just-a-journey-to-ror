(function($){
	'use strict';
	$.fn.rainbow = function(options) {
		// func options
		var setting = $.extend({
			alpha: null,
			beta: null
		}, options);

		return this.each(function(){
			// func body goes here
			var text = $(this).text().split("");
			alert(text);
		});
	}

}(jQuery));