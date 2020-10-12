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

