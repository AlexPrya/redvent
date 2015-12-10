//
// owl.carusel.js
//

$('.left-slider-body').owlCarousel({
    items:1,
    dots: false,
    nav:false
});

$('.main-slider').owlCarousel({
    nav:false,
    dots: true,
    autoPlay: true,
    autoplayHoverPause: true,
    dotsSpeed: 500,
    items:1
});



//
// bootstrap.js
//

$('body').popover({
    selector: '[rel="popover"]'
});

//
// lightbox
//

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//
// other
//

$('.preventDefault').each(
    function(){
        $(this).preventDefault();
    }
);