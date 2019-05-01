$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(function() {
		var link = $('.m-menu-link');
		var close = $('.close-menu');
		var menu = $('.m-menu');
		link.on('click', function(event){
			event.preventDefault();
			menu.toggleClass('m-menu__active');
		});
		close.on('click', function(){
			event.preventDefault();
			menu.toggleClass('m-menu__active');
		});
	});

	$(".main-arrow").click(function(){
		$("html, body").animate({scrollTop: $(".table").height()-499}, "slow");
		return false;	
	});

});
