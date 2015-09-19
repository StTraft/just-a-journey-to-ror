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
/*
	// photo show carousel related
	$('#photo-show').carousel({
		interval: 10000
	});
*/
	var imgList = $(".owl-carousel");
	var showImg = $("#photo-show");
  showImg.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  imgList.owlCarousel({
    itemsDesktop      : [1199,6],
    itemsDesktopSmall     : [979,6],
    itemsTablet       : [768,3],
    itemsMobile       : [479,3],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
  function syncPosition(el){
    var current = this.currentItem;
    imgList
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if(imgList.data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  imgList.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    showImg.trigger("owl.goTo",number);
  });
 
  function center(number){
    var imgListvisible = imgList.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in imgListvisible){
      if(num === imgListvisible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>imgListvisible[imgListvisible.length-1]){
        imgList.trigger("owl.goTo", num - imgListvisible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        imgList.trigger("owl.goTo", num);
      }
    } else if(num === imgListvisible[imgListvisible.length-1]){
      imgList.trigger("owl.goTo", imgListvisible[1])
    } else if(num === imgListvisible[0]){
      imgList.trigger("owl.goTo", num-1)
    }
    
  }
 
  $(".caption h1").rainbow(); 

});