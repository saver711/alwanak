/*global console, $, window*/
/********************** Home **************************/
/******** Nav ********/

// 'use strict';
// console.log('hi there');
function scrollToElement(element, time) {
    'use strict';
    $('html, body').animate({
        'scrollTop': $(element).offset().top + 1
    }, time);
}
/**********************S Header **********************/

/**********************E Header **********************/

/*********************S When Window Load*************************/
$(function () {
    'use strict';
    /**********************S Header **********************/
    $(window).on('scroll', function () {
        if (window.scrollY >= $('.upper-nav__social').offset().top + 24) {
            $('.lower-nav').addClass('whenScroll');
        } else {
            $('.lower-nav').removeClass('whenScroll');
        }
    });
    /**********************E Header **********************/
    
    /****************** S components ***************/

    

    
    
    /****************** E components ***************/

});
/*********************E When Window Load*************************/


