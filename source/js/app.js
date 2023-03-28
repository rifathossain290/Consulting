(function ($){
'use strict';

  // sticky navbar
  $(window).on('scroll',function() { 
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });



  // mobile menu activation
  let openMenu = document.querySelector('.open-menu'),
  closeMenu = document.querySelector('.close-menu'),
  _menu = document.querySelector('.menu');

  openMenu.addEventListener('click', function(){
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    _menu.style.opacity = 1;
    _menu.style.visibility = 'visible';
    _menu.style.height = 50 + 'vh';
    _menu.style.transition = 'all .3s ease 0s';
  });

  closeMenu.addEventListener('click', function(){
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    _menu.style.opacity = 0;
    _menu.style.visibility = 'hidden';
    _menu.style.height = 0 + 'vh';
    _menu.style.transition = 'all .3s ease 0s';
  })


  // slider active
  $('.slider-active').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: '<span class="ti-arrow-left"><span class="arrow-text">Previous Slider</span></span>',
      nextArrow: '<span class="ti-arrow-right hover-none"><span class="arrow-text next-slide">Next Slider<span class="ti-arrow-right arrow-right-align"></span></span></span>',
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });



  // service active
  $('.service-active').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });


  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });

  // portfolio isotope
  let $grid = $('.portfolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })

  // filter items on button click
  $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  


  // testimonial active
  $('.testimonial-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // scroll up
  $(function () {
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });







})(jQuery);