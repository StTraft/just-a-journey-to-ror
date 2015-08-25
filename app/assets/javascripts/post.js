$(function(){
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
});