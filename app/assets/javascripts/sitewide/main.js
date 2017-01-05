$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
        $siteheader = $('.siteheader'); 
        $titleheaderh2 = $('.titleheader h2');
        $titleheaderh1 = $('.titleheader h1');
        
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open'); 
        $menuWrap.toggleClass('menu-show');
    });
        
    $siteheader.animate({'top': '-8px'}, 1000);
   
   
    //$titleheaderh2.animate({right: '0px'}, 1000);
    //$titleheaderh1.animate({left: '0px'}, 1000);
});

