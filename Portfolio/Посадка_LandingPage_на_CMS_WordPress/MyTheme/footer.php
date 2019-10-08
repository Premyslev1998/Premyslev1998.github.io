<footer class="main_footer bg_dark">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                &copy; <?php echo date("Y"); ?> <?php echo get_bloginfo('name'); ?> 
                <div class="social_wrap">
                    <ul>
                        <?php if (have_posts()) : query_posts('cat=3');
                            while (have_posts()) : the_post(); ?>
                                <li><a href="<?php echo get_post_meta($post->ID, 'soc_url', true)?>" target="_blank" title="<?php the_title(); ?>"><i class="fa <?php echo get_post_meta($post->ID, 'fonts_awesome', true)?>"></i></a></li>
                                <!--<li><a href="#" target="_blank"><i class="fa fa-vk"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-github"></i></a></li>-->
                                <?//php the_content(); ?>
                            <?endwhile; endif; wp_reset_query(); ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="hidden"></div>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/libs/html5shiv/es5-shim.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/html5shiv/html5shiv.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/html5shiv/html5shiv-printshiv.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/respond/respond.min.js"></script>
<![endif]-->

<script src="<?php echo get_template_directory_uri(); ?>/libs/jquery/jquery-2.1.3.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/parallax/parallax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/mixitup/mixitup.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/scroll2id/PageScroll2id.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/waypoints/waypoints.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/animate/animate-css.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/libs/jqBootstrapValidation/jqBootstrapValidation.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/common.js"></script>

<?php wp_footer()?>

<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter33238768 = new Ya.Metrika({id:33238768, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/33238768" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->

</body>
</html>