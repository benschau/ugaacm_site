$(document).ready(function() {

});

$(window).scroll(function() {
    var hT = $('.descleft').offset().top,
        hH = $('.descleft').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
       $('.descleft').animate({left: '0px'}, 500);
       $('.descright').animate({right: '0px'}, 500); 
    }
});
