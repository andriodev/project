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
		dots: false,
		navPosition: 'bottom',
		mouseDrag: true,
		loop: true,
		speed: 1200,
		responsive: {
			993: {

			}, 
			767: {
				settings: {
					dots: true,
					arrows:false,
				}
			}, 
			576: {

			},
			320: {
				nav: true
			}
		}
	});

	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	}); 
	
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});


	/* $('.catalog-item__link').each(function(i) {
		$(this).on('click', function() {
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	}); */

	function togleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

togleSlide('.catalog-item__link');
togleSlide('.catalog-item__back');

// modal
$(document).ready(function(){

$('[data-modal=consultation]').on('click', function () {
	$('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
	$('.overlay, #consultation, #thanks, #order').fadeOut('slow')
});
$('.button_mini').on('click', function() {
	$('.overlay, #order').fadeIn('slow');
});
$('.button_mini').each(function(i){
	$(this).on('click', function(){
		$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
	});
});

define(["jquery", "jquery.validate"], function( $ ) {
	$(".consultation-form").validate();
});
});