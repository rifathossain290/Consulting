(function ($){
'use strict';

// slider active
$('.slider-active').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<span class="ti-arrow-left"><span class="arrow-text">Previous Slider</span></span>',
    nextArrow: '<span class="ti-arrow-right hover-none"><span class="arrow-text next-slide">Next Slider<span        class="ti-arrow-right arrow-right-align"></span></span></span>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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




})(jQuery);