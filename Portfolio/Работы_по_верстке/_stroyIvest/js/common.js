$(function() {
	$('.directions-blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		//далее идет параметр для адаптивности
		responsive: [
			{
				breakpoint: 767, //максимально допустимая ширина объекта
				//далее идут настройки для данного объекта
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					//infinite: true,
					//dots: true
				}
			},
		], 	
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Замечание!
	//Полный перечень jQ-функций расположен по данной ссылке: http://jquery.page2page.ru/index.php5/CSS
	//в разделе - "карта функций".

	jQuery(document).ready(function($) {
		var menuBtn = $('.top-nav_btn');
		var sidebarBtn = $('.left-sidebar_btn');
		var menu = $('.top-nav_menu');
		var sidebarMenu = $('.left-sidebar_menu');

		menuBtn.on('click', function(event){
			event.preventDefault(); //Отмена стандартного действия браузера на данную кнопку.
			menu.toggleClass('top-nav_menu__active'); //Добавляем подкласс (описанный в _media.sass)
			//menu.slideToggle(300); //Вызов этого метода приводит к плавному сворачиванию (если элемент развернут) или разворачиванию (если элемент свернут) выбранных элементов на странице.
		})

		sidebarBtn.on('click', function(event){
			event.preventDefault(); 
			sidebarMenu.toggleClass('left-sidebar_menu__active');
		})
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
