(function($){
	'use strict';

	$.fn.rainbow = function(options) {
		// func options
		var settings = $.extend({
			repeat: 1,
			phaseShift: 2,
			color: '#ffffff'
		}, options);


		var _genColorString = function (r,g,b) {
			var rs = (r.toString(16).length == 1) ? '0' + r.toString(16) : r.toString(16);
			var gs = (g.toString(16).length == 1) ? '0' + g.toString(16) : g.toString(16);
			var bs = (b.toString(16).length == 1) ? '0' + b.toString(16) : b.toString(16);
			return '#' + rs + gs + bs;		
		}

		var _hex2dec = function (hexStr) {
			var rgb = [];
			for (var i = 1; i < hexStr.length; i += 2) {
				rgb[(i-1)/2] = parseInt(hexStr.substring(i,i+2), 16);
			}
			return rgb;
		}


		return this.each(function(){
			// func body goes here
			var text = $(this).text().split("");
			var color = _genColorString(10,10,10);
			var str = '';
			var frequency = Math.PI * 2 / text.length / settings.repeat;
			var ps = settings.phaseShift;

			for (var i = 0; i < text.length; i++) {
				str += '<font style="color:'+color+';">'+text[i]+'</font>';
			}
			$(this).html(str);
			alert(_hex2dec(settings.color));
		});
	}



}(jQuery));