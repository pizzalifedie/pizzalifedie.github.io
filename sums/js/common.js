$(document).ready(function(){

	// Карусель
	$('.owl-carousel').owlCarousel({
	dots: false,
	items: 4,
	smartSpeed: 700,
	margin: 30,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	nav: true,
	loop: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2
		},
		800: {
			items: 3
		},
		1100: {
			items: 4
		}
	}
 	});

 	// Артикмодал
 	$('.readmore_one').click(function(){
 		$('#popup_blog_one').arcticmodal();
 	});

 	$('.readmore_two').click(function(){
 		$('#popup_blog_two').arcticmodal();
 	});



	// Плавный скролл
	$('.buttn').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

    $('.btn').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
	
 	$(".background_carousel").hover(function() {
    	$(".background_carousel").removeClass("first_active");
    	$(this).addClass("first_active");
 	});

 	$(".background_carousel li").hover(function() {
    	$(".background_carousel li").removeClass("aaas");
    	$(this).addClass("aaas");
 	});
 	

 	







});
