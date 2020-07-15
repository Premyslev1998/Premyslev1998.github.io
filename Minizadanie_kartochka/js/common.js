$(function() {

	//console.log('check');

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
