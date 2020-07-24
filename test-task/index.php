<!DOCTYPE html>
<html class="no-js" lang="ru">
  <head>
    <meta charset="utf-8">
    <title>UCAR</title>
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="og:image" content="path/to/image.jpg">
    <link rel="shortcut icon" href="img/favicon/logo.png">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	
    <!-- Load CSS, CSS Localstorage & WebFonts Main Function-->
    <script>!function(e){"use strict";function t(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function n(t,n){return e.localStorage&&localStorage[t+"_content"]&&localStorage[t+"_file"]===n}function a(t,a){if(e.localStorage&&e.XMLHttpRequest)n(t,a)?o(localStorage[t+"_content"]):l(t,a);else{var s=r.createElement("link");s.href=a,s.id=t,s.rel="stylesheet",s.type="text/css",r.getElementsByTagName("head")[0].appendChild(s),r.cookie=t}}function l(e,t){var n=new XMLHttpRequest;n.open("GET",t,!0),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(o(n.responseText),localStorage[e+"_content"]=n.responseText,localStorage[e+"_file"]=t)},n.send()}function o(e){var t=r.createElement("style");t.setAttribute("type","text/css"),r.getElementsByTagName("head")[0].appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e}var r=e.document;e.loadCSS=function(e,t,n){var a,l=r.createElement("link");if(t)a=t;else{var o;o=r.querySelectorAll?r.querySelectorAll("style,link[rel=stylesheet],script"):(r.body||r.getElementsByTagName("head")[0]).childNodes,a=o[o.length-1]}var s=r.styleSheets;l.rel="stylesheet",l.href=e,l.media="only x",a.parentNode.insertBefore(l,t?a:a.nextSibling);var c=function(e){for(var t=l.href,n=s.length;n--;)if(s[n].href===t)return e();setTimeout(function(){c(e)})};return l.onloadcssdefined=c,c(function(){l.media=n||"all"}),l},e.loadLocalStorageCSS=function(l,o){n(l,o)||r.cookie.indexOf(l)>-1?a(l,o):t(e,"load",function(){a(l,o)})}}(this);</script>
    <!-- Load CSS Start-->
    <script>//loadLocalStorageCSS( "webfonts", "css/fonts.min.css?ver=1.0.0" );</script>
    <script>loadCSS("css/bootstrap-grid.min.css?ver=1.0.0", false, "all" );</script>
    <script>loadCSS("css/header.min.css?ver=1.0.0", false, "all" );</script>
    <script>loadCSS( "css/style.min.css?ver=1.0.0", false, "all" );</script>
    <!-- Load CSS End-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <!-- Load CSS Compiled without JS-->
    <noscript>
      <link rel="stylesheet" href="css/fonts.min.css">
      <link rel="stylesheet" href="css/style.min.css">
    </noscript>
  </head>
  <body>
    <!--
    if lt IE 9script(src='libs/html5shiv/es5-shim.min.js')
    script(src='libs/html5shiv/html5shiv.min.js')
    script(src='libs/html5shiv/html5shiv-printshiv.min.js')
    script(src='libs/respond/respond.min.js')
    -->

  <?php
    if(isset($_POST['date'])){ // проверяем кто запускает
      sleep(5);
      //echo "Готово"; //код фоновой функции
    }
  ?>

	<div class="main">
		<div class="main-overlay"></div>
		<form class="cards">
		
			<div class="container">
				<div class="row">
						
					<div class="col-lg-6">

						<div id="selector-2" class="cards-wrapper">
              				<a href="#" id="info" class="btn selector-1">Нажми на меня</span></a>
						</div>

					</div>
					<div class="col-lg-6">

						<div id="selector-1" class="cards-wrapper">
							<a href="#" id="info" class="btn selector-2">Нажми на меня</a>
						</div>

					</div>
          			<div class="col-lg-12">
            
            			<button href="#" type="submit" class="btn reload">Перезагрузка</button>

          			</div>
				</div>
			</div>

		</form>
	</div>
	
    <!-- Load Scripts Start-->
    <script>
      $(document).ready(function(){
        $(function(){
          $("a").click(function(){
            var th = $(this);
            th = (th && th.context.classList.length) ? th.context.classList[1] : null;
            if(th != 'reload')
              $(this).append("<span class='loader'></span>").addClass("disabled").load(); 
            $('#' + th).append("<span class='loader'></span>").load();
          });
        });

          function Expectation(){
              // работаем пока ждем ответа
              $("[id^='info']").html('Пожалуйста подождите...');
              $("span").removeClass("loader");  
          }
          function resultFunction(data, d){
               $("html").html(data);
          }

        $(function(){
              $('form.cards').submit(function(e){
                  e.preventDefault();
                  var form = $(this);
                  var post_url = "index.php";
                  var post_data = ({date: "work"});
                  $.ajax({
                    type: 'POST',
                    url: post_url, 
                    data: post_data,
                    dataType: "html",
                    beforeSend: Expectation,
                    success: resultFunction
                });
              });
          });
      }); 
    </script>
    <script>
      var scr = {
      "scripts": [{
	      "src": "js/libs.js",
	      "async": false
      }]
      };
      ! function(t, n, r) {
      "use strict";
      var c = function(t) {
      if ("[object Array]" !== Object.prototype.toString.call(t)) return !1;
      for (var r = 0; r < t.length; r++) {
      var c = n.createElement("script"),
      e = t[r];
      c.src = e.src, c.async = e.async, n.body.appendChild(c)
      }
      return !0
      };
      t.addEventListener ? t.addEventListener("load", function() {
      c(r.scripts);
      }, !1) : t.attachEvent ? t.attachEvent("onload", function() {
      c(r.scripts)
      }) : t.onload = function() {
      c(r.scripts)
      }
      }(window, document, scr);
    </script>
    <!-- Load Scripts End-->
  </body>
</html>