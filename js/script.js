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
    
    $('.navigation, .information').animate({
        opacity: 0
    }, 1).removeClass('open');
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

    /**********************E Navigation **********************/
    $('.navigation__icon').on('click', function () {
        $('.navigation, .information').animate({
            opacity: 0
        }, 1).removeClass('open');
    });

    $('.lower-nav__icon').on('click', function () {
        $('.navigation, .information').animate({
            opacity: 1
        }, 80).addClass('open');
    });
    
    $('.navigation__item').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    
    $(window).on('scroll', function () {
        var wst = $(window).scrollTop();
        $('section, header').each(function () {
            if (wst > $(this).offset().top) {
                $('.navigation__item').removeClass('active');
                $(".navigation__item[data-scroll='" + $(this).attr("id") + "']").addClass('active');
            }
        });
    });
    /**********************E Navigation **********************/

    /****************** S components ***************/

    /****************** E components ***************/

});
/*********************E When Window Load*************************/
