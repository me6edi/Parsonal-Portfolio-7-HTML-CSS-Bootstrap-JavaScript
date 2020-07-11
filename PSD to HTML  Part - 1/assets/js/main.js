$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    //Magnific Poup
    $('#Youtube-video').magnificPopup({
        type:'iframe',
        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'http://www.youtube.com/embed/%id%?autoplay=1'
              }
            },
            srcAction: 'iframe_src',
          }
    });
}(jQuery));