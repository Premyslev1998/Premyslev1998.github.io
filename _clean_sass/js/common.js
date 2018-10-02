$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});

	$(".popup_c").magnificPopup();

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	$(".carousel").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""	
	});

	//$(".owl-prev, .owl-next").html("");

	//Следующую js-функцию мы описываем для того, чтобы изображение (фоновое для <header>) по ширине
	//и по высоте занимало все пространство. Эта ф-ия нужна, так как данное и-ие имеет оопределенную высоту,
	//заданную css-стилем min-height, то она (картинка) без описания данной ф-ии (wResize) не будет работать
	//так как надо.   
	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	//Мы используем объект window, для, того чтобы изображение инициализировалось, как
	//при загрузки, так и при ресайзе.
	$(window).resize(function(){
		wResize();
	});


	$(".top-phone .wrapper .tab").click(function(){
		$(".top-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top-phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function(){
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts_top .tab").click(function(){
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function(){
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм (будет выполняться только на стороне хостинга)
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();

				//Следующая строчка js-кода перезагружает форму
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});
	

$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	/*Желательно js-скрипты анимации описывать не для js-ф-ии: "$(document).ready", а для
	"$(window).load" (используется "window" - потому что полную прогрузку "document" - можно
	не дождаться) */

	/*Следующий js-скрипт описывает анимацию "выплывания" сверху заголовка h1, 
	а h2 - снизу.*/

	/*Также лучше (безопаснее) указывать (во всех js-анимациях) 2-ым параметром, в 
	js-функции animated - "fadeOut", который представлет собой эффект скрытия
	(это потому что при пролистывании анимируемого блока, для нас не имеет знач. его
	отображение)*/

	$(".top_header").animated("fadeInDown", "fadeInDown");

	/*При описании js-анимации желательно более узко (точно) указывать
	конкретный селектор*/

	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");

	/*На js-анимации ниже опиысвается эффект "поочередного выезжания" елементов (селекторов)*/

	$(".profi_item").animated("fadeInRight", "fadeOut");

	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
}); 