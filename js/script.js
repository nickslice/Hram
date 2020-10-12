$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		appendDots: '.slick-list',
		slidesToShow:1,
		autoplay: true,
		speed:2000,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 1080,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	
	});
});

$(document).ready(function() {
	$('.block__btn').click(function(event) {
		$('.block__text').toggleClass('active');
	});
});

$('.icon-menu').on('click', function() {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});


$('.menu__link').on('click', function(){
    $('.menu__body').removeClass('active');
    $('.icon-menu').removeClass('active');
    $('body').removeClass('lock');
});

$(document).ready(function(){
	$('.slider-nav').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay: false,
		speed:1000,
		autoplaySpeed:2000,
		infinite: false,
		asNavFor: '.events__slider',
		responsive:[
			{
				breakpoint: 1080,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:3
				}
			}
		]
	
	});
	$('.events__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll:1,
		speed:1000,
		asNavFor: '.slider-nav',
	});
});