/* $(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1300,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
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
  }); */
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: '1',
    autoplay: false,
    controls: false,
    nav:false,
    navPosition: 'bottom',
    mouseDrag: true,
    loop: true,
    speed: 1200,
    responsive: {
      993: {

      }, 
      767: {
        nav: false
      }, 
      576: {

      },
      320: {
        nav: true,
      }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); 