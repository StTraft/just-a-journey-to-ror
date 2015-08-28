$(function(){
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
	};
	console.log(isMobile.any());
	//if (!isMobile) {
		var controller = new ScrollMagic.Controller();
		var t = new TimelineMax()
			.fromTo(".background-image", 2, {y: "0%"}, {y: "62%", ease: Linear.easeOut});
		new ScrollMagic.Scene({
				triggerElement: "header",
				triggerHook: "onLeave",
				duration: "105%"
			})
			.setTween(t)
			.addTo(controller);
		new ScrollMagic.Scene({
					triggerElement: ".post",
					offset: "120px"
				})
					.setClassToggle("#heart", "zap")
					.addTo(controller);
	//}
/*		.on("progress", function(e){
			$("nav").css("opacity", e.progress.toFixed(3)*0.5 + 0.5);
		})
		.on("leave", function(e){
			$("nav").css("opacity", 1);
		});*/



/*	new ScrollMagic.Scene({
			triggerElement: "header",
			triggerHook: "onLeave"
		})
		.setPin("nav")
		.addTo(controller);*/
	var $mas = $('#mas').masonry({
		itemSelector: '.masbox'
	});
	$mas.imagesLoaded().progress( function(){
		$mas.masonry('layout');
	});

	// photo show carousel related
	$('#photo-show').carousel({
		interval: 10000
	});


});