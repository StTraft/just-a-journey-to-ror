(function($){
	'use strict';

	$.fn.rainbow = function(options) {
		// func options
		var settings = $.extend({
			phaseShift: 2,
			brightness: 128,
			steps: 0
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
			return rgb;  // array
		}

		// constant
		var ps = settings.phaseShift;
		var brightness = settings.brightness;
		var amp = 255 - brightness;
		var _2pi = 2 * Math.PI;



		return this.each(function(){
			// func body goes here
			var text = $(this).text().split("");
			//var color = _genColorString(10,10,10); // this is use to drive the change in color
			var color = settings.color;
			var ca = []; // array: [r, g, b]
			var str = '';
			//var frequency = settings.frequency || _2pi / text.length;
			var frequency = (settings.steps) ? _2pi / settings.steps : _2pi / text.length;

			for (var i = 0; i < text.length; i++) {
				for (var j = 0; j < 3; j++) {
					ca[j] = Math.sin(frequency * i + ps * j ) * amp + brightness; // need to tryout using original color as start
					ca[j] = Math.abs(Math.round( ca[j]) );
				}
				color = _genColorString(ca);
				str += '<font style="color:'+color+';" rgb="'+ ca[0]+','+ca[1]+','+ca[2] +'">'+text[i]+'</font>';
			}
			$(this).html(str);
		});
	}



}(jQuery));