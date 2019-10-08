$(function(){

	//Подключение js-скриптов плагина superfish. Один из важнейших
	//показателей юзабилити-меню удостоверивающих факт подключения 
	//js-скриптов - это плавный переход из родительского пункта (меню) - во вложенный
	//без его (меню) закрытия.

	$(".sf-menu").superfish({
		delay: 200, //задержка перехода между пунктами меню
		speed: "fast",
		cssArrows: false //параметр отвечающий за отображение стрелочек
	})

	//Следующей строчкой js-кода мы с помощью jQ-функции - after ("." - перед
	//after исп. в кач. - конгатенациии с плагиновской-ф-ей superfish) указываем
	//какой селектор добавлять (в данном случае: <div id='mobile-menu'>) после плагиновского-селектора
	//.sf-menu. Далее идет jQ-функция - clone, которая клонирует все содержимое плагиновского-класса
	//.sf-menu и уже jQ-функцией - appendTo мы помещаем все скопированное ранее содержимое (из
	//плагиновского-селектора .sf-menu) в добавленный кастомный-селектор: <div id='mobile-menu'>.

	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");

	//Следюущую строку js-кода мы исп. чтобы убрать все css-стили селектора .sf-menu.
	//Мы делаем это потому что, до этого содержимое .sf-menu мы 
	//перемещали в кастомный-селектор: <div id='mobile-menu'> с пом. jQ-функции clone. Но!
	//Важно отметить, что ф-ия clone также предполагает и клонирование всех css-стилей (.sf-menu),
	//в том числе, как в данном случае, и display: none. Если display: none оставить, то вложенные пункты меню
	//не будут отображаться (в плагине mmenu).   

	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu")
	.parent().mmenu({
		extensions: ['wildscreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'], //Параметры в пункте "extensions" - предст.
		//собой различные эффекты
		navbar:{ //Заголовок меню
			title: "Меню"
		}
	});


	$(".toggle-mnu").click(function() {
  		$(this).addClass("on");
  		//$(".main-mnu").slideToggle();
  		//return false;
	});


	var api = $("#mobile-menu").data("mmenu"); //Мы берем селектор #mobile-menu из date-атрибута mmenu
	//Что такое date-атрибут(ы) см. в интернете
	api.bind("closed", function(){ //По закрытию убирется класс "on" 
		$(".toggle-mnu").removeClass("on");
	});

	$(".preloader").fadeOut();

});