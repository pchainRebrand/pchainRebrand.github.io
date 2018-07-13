$(document).ready(function ($) {
    'use strict';


/* ---------------------------------------------
     page  Prealoader
 --------------------------------------------- */
    $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });


});

/* ---------------------------------------------
 owl caroussel
 --------------------------------------------- */

 


$('.team-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500, 
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1

        },
        1200: {
            items: 1
        }
    }
});



$('.client-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500, 
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4

        },
        1200: {
            items: 5
        }
    }
});
 


/*----------------------------------------------------*/
/*	VIDEO POP PUP
/*----------------------------------------------------*/

    $('.video-modal').magnificPopup({
            type: 'iframe',
              
                iframe: {
                    patterns: {
                        youtube: {
               
                            index: 'youtube.com',
                            src: 'https://www.youtube.com/embed/-yKzLNJA7Ao'
                
                                }
                            }
                        }                 
        });
/* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */


$.scrollUp({
    scrollText: '<i class="arrow_up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

new WOW().init({
    mobile: true,
});

/* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {

        event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});


/*----------------------------------------
 Extra
 --------------------------------------*/
 particlesJS("home", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },

      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
