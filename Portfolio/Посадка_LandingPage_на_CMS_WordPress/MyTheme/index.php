<?php get_header(); ?>

<section id="about" class="s_about bg_light">
    <div class="section_header">
        <h2><?php
            $idObj = get_category_by_slug('s_about');
            $id = $idObj->term_id;
            get_cat_name($id);
            ?></h2>
        <div class="s_descr_wrap">
            <div class="s_descr"><?php echo category_description($id); ?></div>
        </div>
    </div>
    <div class="section_content">
        <div class="container">
            <div class="row">

                <?php if (have_posts()) : query_posts('p=6');
                    while (have_posts()) : the_post(); ?>
                <div class="col-md-4 col-md-push-4 animation_1">
                    <h3>Фото</h3>
                    <div class="person">
                        <?php if (has_post_thumbnail()) : ?>
                            <a class="popup" href="<?php
                                $large_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
                                echo $large_image_url[0];?>"
                                title="<?php the_title_attribute(); ?>">
                                <?php the_post_thumbnail(array(220, 220)); ?>
                            </a>
                        <?php endif;?>
                    </div>
                </div>

                <div class="col-md-4 col-md-pull-4 animation_2">
                    <h3><?php the_title(); ?></h3>
                    <?php the_content(); ?>
                    <!--<p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>-->
                </div>
                <?endwhile; endif; wp_reset_query(); ?>


                <div class="col-md-4 animation_3 personal_last_block">
                    <?php if (have_posts()) : query_posts('p=16');
                        while (have_posts()) : the_post(); ?>
                            <h3><?php the_title(); ?></h3>
                            <h2 class="personal_header"><?php echo get_bloginfo('name'); ?></h2>
                            <?php the_content(); ?>
                            <!--<ul>
                                <li>Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress</li>
                                <li>День рождения: 3 июня 1988 года</li>
                                <li>Номер телефона: +7 999 999 99 99</li>
                                <li>E-mail: <a href="mailto:youmail@mail.ru">youmail@mail.ru</a></li>
                                <li>Веб-сайт: <a href="//webdesign-master.ru" target="_blank">webdesign-master.ru</a></li>
                            </ul>-->
                        <?endwhile; endif; wp_reset_query(); ?>
                    <div class="social_wrap">
                        <ul>
                            <?php if (have_posts()) : query_posts('cat=3'); //В данной php-строчке указывается ID родительской-рубрики - "Социальные иконки"
                                while (have_posts()) : the_post(); ?>
                                    <li><a href="<?php echo get_post_meta($post->ID, 'soc_url', true)?>" target="_blank" title="<?php the_title(); ?>">

                                            <!-- Ниже проиллюстрирована php-функция (в wp-е), вызывающая дополнительное поле,
                                             в которое задется значение, которе мы указали в админке. -->

                                            <i class="fa <?php echo get_post_meta($post->ID, 'fonts_awesome', true)?>"></i>
                                        </a>
                                    </li>
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
    </div>
</section>

<section id="resume" class="s_resume">
    <div class="section_header">
        <h2><?php echo get_cat_name(4); ?></h2><!-- В данной строчке php-кода мы указываем id родительской-рубрики - "Резюме" -->
        <div class="s_descr_wrap">
            <div class="s_descr"><?php echo category_description(4); ?></div>
        </div>
    </div>
    <div class="section_content">
        <div class="container">
            <div class="row">
                <div class="resume_container">
                    <div class="col-md-6 col-sm-6 left">
                        <h3><?php echo get_cat_name(5)?></h3><!-- В данной строчке php-кода мы указываем id дочерней-рубрики  - "Работа" -->
                        <div class="resume_icon"><i class="icon-basic-case"></i></div>

                        <?php if (have_posts()) : query_posts('cat=5');
                            while (have_posts()) : the_post(); ?>
                                <div class="resume_item">
                                    <div class="year"><?php echo get_post_meta($post->ID, 'resume_years', true)?></div>
                                    <div class="resume_description"><?php echo get_post_meta($post->ID, 'resume_place', true)?><strong><?php the_title(); ?></strong></div>
                                    <?php the_content(); ?>
                                </div>
                            <?endwhile; endif; wp_reset_query(); ?>

                        <!--<div class="resume_item">
                            <div class="year">2008-2015</div>
                            <div class="resume_description">ООО "Пронькина забава"<strong>Программист</strong></div>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum.</p>
                        </div>
                        <div class="resume_item">
                            <div class="year">2008-2015</div>
                            <div class="resume_description">ООО "Пронькина забава"<strong>Программист</strong></div>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum.</p>
                        </div>-->
                    </div>
                    <div class="col-md-6 col-sm-6 right">
                        <h3><?php echo get_cat_name(6)?></h3><!-- В данной строчке php-кода мы указываем id дочерней-рубрики  - "Учеба" -->
                        <div class="resume_icon"><i class="icon-basic-book-pen"></i></div>

                        <?php if (have_posts()) : query_posts('cat=6');
                            while (have_posts()) : the_post(); ?>
                                <div class="resume_item">
                                    <div class="year"><?php echo get_post_meta($post->ID, 'resume_years', true)?></div>
                                    <div class="resume_description"><strong><?php the_title(); ?></strong><?php echo get_post_meta($post->ID, 'resume_place', true)?></div>
                                    <?php the_content(); ?>
                                </div>
                            <?endwhile; endif; wp_reset_query(); ?>
                        <!--<div class="resume_item">
                            <div class="year">2008-2015</div>
                            <div class="resume_description"><strong>Программист</strong>ООО "Пронькина забава"</div>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum.</p>
                        </div>
                        <div class="resume_item">
                            <div class="year">2008-2015</div>
                            <div class="resume_description"><strong>Программист</strong>ООО "Пронькина забава"</div>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum.</p>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="portfolio" class="s_portfolio bg_dark">
    <div class="section_header">
        <h2><?php echo get_cat_name(7);?></h2>
        <div class="s_descr_wrap">
            <div class="s_descr"><?php echo category_description(7); ?></div>
        </div>
    </div>
    <div class="section_content">
        <div class="container">
            <div class="row">
                <div class="filter_div controls">
                    <ul>
                        <li class="filter active" data-filter="all">Все работы</li>
                        <li class="filter" data-filter=".sites">Сайты</li>
                        <li class="filter" data-filter=".identy">Айдентика</li>
                        <li class="filter" data-filter=".logos">Логотипы</li>
                    </ul>
                </div>
                <div id="portfolio_grid">

                    <?php if (have_posts()) : query_posts('cat=7'); //В данной строчке php-кода мы указываем id родительской-рубрики - "Портфолио"
                        while (have_posts()) : the_post(); ?>

                        <div class="mix col-md-3 col-sm-6 col-xs-12 portfolio_item <?php

                                //Следующими 7-ью строчками php-кода реализован фильтр
                                //изображений секции портфолио.

                                $tags = wp_get_post_tags($post->ID);
                                if ($tags){
                                    foreach ($tags as $tag){
                                        echo ' ' . $tag->name;
                                    }
                                }
                                ?>">
                                <?php the_post_thumbnail(array(400, 300)); ?>
                                <div class="port_item_cont">
                                    <h3><?php the_title(); ?></h3>
                                    <?php the_excerpt(); ?> <!-- В данной строчке php-кода мы выводим содержимое поля вкладки - "Обсуждение"
                                    (или в другой версии WP поля вкладки - "Цитата"). -->
                                    <a href="#" class="popup_content">Посмотреть</a>
                                </div>
                                <div class="hidden">
                                    <div class="podrt_descr">
                                        <div class="modal-box-content">
                                            <button class="mfp-close" type="button" title="Закрыть (Esc)">×</button>
                                            <h3><?php the_title(); ?></h3>
                                            <?php the_content(); ?>
                                            <img src="<?php
                                            $large_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
                                            echo $large_image_url[0];?>" alt="<?php the_title(); ?>" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                <?php endwhile; endif; wp_reset_query(); ?>

                </div>
            </div>
        </div>
    </div>
</section>

<section id="contacts" class="s_contacts bg_light">
    <div class="section_header">
        <h2><?php echo get_cat_name(11); ?></h2>
        <div class="s_descr_wrap">
            <div class="s_descr"><?php echo category_description(11); ?></div>
        </div>
    </div>
    <div class="section_content">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="contact_box">
                        <div class="contacts_icon icon-basic-geolocalize-05"></div>
                        <h3>Адрес:</h3>
                        <p><?php
                            $options = get_option('sample_theme_options');
                            echo $options['addresstext'];
                            ?></p>
                    </div>
                    <div class="contact_box">
                        <div class="contacts_icon icon-basic-smartphone"></div>
                        <h3>Телефон:</h3>
                        <p><?php
                            $options = get_option('sample_theme_options');
                            echo $options['phonetext'];
                            ?></p>
                    </div>
                    <div class="contact_box">
                        <div class="contacts_icon icon-basic-webpage-img-txt"></div>
                        <h3>Веб-сайт:</h3>
                        <p><a href="//<?php
                            $options = get_option('sample_theme_options');
                            echo $options['sitetext'];
                            ?>" target="_blank"><?php
                                $options = get_option('sample_theme_options');
                                echo $options['sitetext'];
                                ?></a></p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <form action="http://formspree.io/agragregra@ya.ru" class="main_form" novalidate target="_blank" method="post">
                        <label class="form-group">
                            <span class="color_element">*</span> Ваше имя:
                            <input type="text" name="name" placeholder="Ваше имя" data-validation-required-message="Вы не ввели имя" required />
                            <span class="help-block text-danger"></span>
                        </label>
                        <label class="form-group">
                            <span class="color_element">*</span> Ваш E-mail:
                            <input type="email" name="email" placeholder="Ваш E-mail" data-validation-required-message="Не корректно введен E-mail" required />
                            <span class="help-block text-danger"></span>
                        </label>
                        <label class="form-group">
                            <span class="color_element">*</span> Ваше сообщение:
                            <textarea name="message" placeholder="Ваше сообщение" data-validation-required-message="Вы не ввели сообщение" required></textarea>
                            <span class="help-block text-danger"></span>
                        </label>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

