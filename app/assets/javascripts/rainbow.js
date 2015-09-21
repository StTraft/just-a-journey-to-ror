(function($){
	'use strict';

	$.fn.rainbow = function(options) {
		// func options
		var settings = $.extend({
			phaseShift: 2,
			brightness: 128,
			steps: null
		}, options);

		// constant
		var ps = settings.phaseShift;
		var brightness = settings.brightness;
		var amp = 255 - brightness;
		var _2pi = 2 * Math.PI;
		
		


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

		var _rotate = function(a, t = 1) {
			var array = a.slice(0);
			while (t--) {
				var temp = array.shift();
				array.push(temp);
			}
			return array;
		}

		var _keyframes = function(arr, name) {
			var n = arr.length;
			var a = arr;
			var kfs = '\@keyframes '+name+'{';
			for (var i = 0; i < n; i++) {
				kfs += Math.round(i*10000/n)/100 + '% {color: '+ a[i] +';} '
			}
			kfs += '100% {color: '+a[0]+'} }';
			return kfs;
		}



		return this.each(function(index, element){
			// func body goes here
			var text = $(this).text().split("");
			var ca = []; // array: [r, g, b]
			var colorArray = [];
			var str = '';
			var _class = '<style type="text/css">';
			var frequency = (settings.steps) ? _2pi / settings.steps : _2pi / text.length;

			for (var i = 0; i < text.length; i++) {
				for (var j = 0; j < 3; j++) {
					ca[j] = Math.sin(frequency * i + ps * j ) * amp + brightness; // need to tryout using original color as start
					ca[j] = Math.abs(Math.round( ca[j]) );
				}
				colorArray[i] = _genColorString(ca);
				_class += '._r_e'+ index + '_c' + i + '{color:'+ _genColorString(ca) +';animation: '+'r_kf_'+index+'c_'+i+' 1s infinite;}';
				str += '<font class="_r_e'+ index + '_c'+ i +'">'+text[i]+'</font>';
			}
			for (var i = 0; i < text.length; i++ ) {
				_class += _keyframes(_rotate(colorArray, i), 'r_kf_'+index+'c_'+i);
			}
			_class += '</style>';
			
			$('head').append(_class);
			$(this).html(str);


			//console.log( _keyframes(colorArray, 'rainbow_kf_'+index) );
			console.log(_class);


		});

	}



}(jQuery));

