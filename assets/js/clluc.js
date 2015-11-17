/*!
 * Vitality v1.3.5 (http://themes.startbootstrap.com/vitality-v1.3.5)
 * Copyright 2013-2015 Start Bootstrap Themes
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */

(function($) {
    "use strict"; // Start of use strict

        $.fn.backgroundVideo = {
        poster : "/assets/img/poster.png",
        video : "http://www.youtube.com/watch?v=ydH8dgLoSWo",
        load : function() {
            $("header.video").background({
                source: {
                    poster: this.poster
                }
            });
        },
        start : function() {
            $("header.video").background("unload");
            $("header.video").background("load", {
                    poster: this.poster,
                    video: this.video
            });
        }};

        $.fn.cookieManager = {
            installCookies : function() {
                $().backgroundVideo.start();
            }  
        }

    $().backgroundVideo.load();

    //Block using cookies
    $(document).ready(function() {
        if (document.cookie.indexOf("DisplayDivasCookiesBanner") >= 0) {
            $().cookieManager.installCookies();
        } else {
            $(document).ready(function() {
                $.DivasCookies({
                    bannerText                : "This website uses cookies in order to improve your web experience.",        // text for the Divas Cookies banner
                    cookiePolicyLink        : "#legalModal",        // link to the extended cookie policy
                    cookiePolicyLinkText    : "More info",                // text for the link to the extended cookie policy
                    thirdPartyPolicyWidget    : "",                        // if set to "iubenda" tries to use the Iubenda widget
                    acceptButtonText        : "OK",                        // text for the close button
                    acceptButtonSrc            : "",                        // source for the close button image
                    openEffect                : "slideDown",                // opening effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
                    openEffectDuration        : 600,                        // duration of the opening effect (msec)
                    openEffectEasing        : "swing",                    // easing for the opening effect
                    closeEffect                : "slideUp",                // closing effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
                    closeEffectDuration        : 600,                        // duration of the closing effect (msec)
                    closeEffectEasing        : "swing",                    // easing for the closing effect
                    debugMode                : false,                    // if true, the options are checked and warnings are shown
                    saveUserPreferences        : true,                        // if true, sets a cookie after the Divas Cookies is closed the first time and never shows it again
                    cookieDuration            : 30,                        // number of days after which the Divas Cookie technical cookie will expire (default 365 days)
                    blockScripts            : false,                    // set this to true if you blocked scripts by wrapping them with if($.DivasCookies.optedIn()){**script to be blocked**} (default false)
                    pageReload                : false,                    // if true reloads the actual page after opt-in to show the previuosly blocked scripts (default false)
                    acceptOnScroll            : false,                    // if true sets the Divas Cookie technical cookie on page scroll for cookies agreement (default false)
                    acceptOnClick            : false,                    // if true sets the Divas Cookie technical cookie on click on any <a> in the page except that on Divas Cookies banner for cookies agreement (default false)
                    excludePolicyPage        : true                        // if true excludes the cookie policy page from acceptOnScroll and acceptOnClick (default false)
                });
            });
        }
    });

    // Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Activates floating label headings for the contact form.
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Owl Carousel Settings
    $(".about-carousel").owlCarousel({
        items: 3,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    $(".portfolio-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fadeUp"
    });

    $(".testimonials-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: true,
        autoHeight: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        transitionStyle: "backSlide"
    });

    $(".portfolio-gallery").owlCarousel({
        items: 3,
    });

    // Magnific Popup jQuery Lightbox Gallery Settings
    $('.gallery-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    // Scrollspy: Highlights the navigation menu items while scrolling.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Portfolio Filtering Scripts & Hover Effect
    var filterList = {
        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });

        },

        hoverEffect: function() {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        top: -20
                    }, 300, 'easeOutQuad');
                },
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: -75
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );

        }

    };

    filterList.init();

})(jQuery); // End of use strict

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop               
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});