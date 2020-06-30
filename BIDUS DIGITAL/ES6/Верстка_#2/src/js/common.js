import '../../node_modules/jquery/dist/jquery.slim';
import '../../node_modules/magnific-popup/dist/jquery.magnific-popup';

$(function() {
	$("a[href='#callback']").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

})