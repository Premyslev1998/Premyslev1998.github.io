$(function() {

	//console.log('check');

	$(document).ready(function() {

		$(".toggle-mnu").click(function() {
			$(this).toggleClass("on");
			$(".menu-wrap").slideToggle();
			return false; 
		});

	});

	$(document).ready(function () {
		var pic = document.getElementById("cart-modal");
		$(pic).mouseover(function(){
			ID = $(this).attr("id");
			$('.' + ID).css({
				'display': 'block',
			});
		}).mouseout(function(){
		  	$('.' + ID).css('display', 'none');
			return false;	 	 
		});
	});
	
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");

	$("#my-menu").mmenu({

		extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню",
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed")

	$(".mobile-mnu").click(function(){ 
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		$(".main-mnu").slideToggle();
		return false;	
	});	

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
		// ... more custom settings?
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Changing the hash in the browser bar
	var hashLinks = document.querySelectorAll("a[href^='#']");
		[].forEach.call(hashLinks, function (link) {
    		link.addEventListener("click", function (event) {
	        event.preventDefault();
	        history.pushState({}, "", link.href);
	        history.pushState({}, "", link.href);
	        history.back();
	    });
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

	$(".preloader").fadeOut();
});
