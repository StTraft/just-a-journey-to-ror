(function($){
	'use strict';

	$.fn.rainbow = function(options) {
		// func options
		var settings = $.extend({
			repeat: 1,
			phaseShift: 2,
			color: '#888888'
		}, options);


		var _genColorString = function (array) {
			var rs = (array[0].toString(16).length == 1) ? '0' + array[0].toString(16) : array[0].toString(16);
			var gs = (array[1].toString(16).length == 1) ? '0' + array[1].toString(16) : array[1].toString(16);
			var bs = (array[2].toString(16).length == 1) ? '0' + array[2].toString(16) : array[2].toString(16);
			return '#' + rs + gs + bs;		
		}

		var _hex2dec = function (hexStr) {
			var rgb = [];
			for (var i = 1; i < hexStr.length; i += 2) {
				rgb[(i-1)/2] = parseInt(hexStr.substring(i,i+2), 16);
			}
			return rgb;
		}

		// constant
		var offset = _hex2dec(settings.color);
		var amp = 127;

		offset = [128,128,128];

		return this.each(function(){
			// func body goes here
			var text = $(this).text().split("");
			//var color = _genColorString(10,10,10); // this is use to drive the change in color
			var color = settings.color;
			var ca = _hex2dec(color); // array: [r, g, b]
			var str = '';
			var frequency = Math.PI * 2 / text.length / settings.repeat;
			var ps = settings.phaseShift;

			for (var i = 0; i < text.length; i++) {
				for (var j = 0; j < 3; j++) {
					ca[j] = Math.sin(frequency * i + ps * j ) * amp + offset[j];
					ca[j] = Math.abs(Math.round( ca[j]) );
				}
				color = _genColorString(ca);
				str += '<font style="color:'+color+';">'+text[i]+'</font>';
			}
			$(this).html(str);
		});
	}



}(jQuery));