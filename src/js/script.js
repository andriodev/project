$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1300,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
      autoplay: false,
      responsive: [{
        breakpoint: 1070,
        settings: {
            dots: true,
            arrows: false,
            dotsClass: 'inner_dots'
        }
      }]
    });
  });