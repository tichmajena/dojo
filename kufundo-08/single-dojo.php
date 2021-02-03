<!DOCTYPE html>
<html <?php language_attributes(); ?> data-wf-page="6007e6eba6e2fc3099619104" data-wf-site="6006ce2fae98b56b6161e2c9">

<head>
    <meta charset="utf-8">


    <meta content="dojo" property="twitter:title">
    <meta content="width=device-width, initial-scale=1" name="viewport">

    <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/normalize.css?v=1611746209373" rel="stylesheet"
        type="text/css">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/webflow.css?v=1611746209373" rel="stylesheet"
        type="text/css">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/kufundo.webflow.css?v=1611746209373" rel="stylesheet"
        type="text/css">
    <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
    <script type="text/javascript">
    ! function(o, c) {
        var n = c.documentElement,
            t = " w-mod-";
        n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n
            .className += t + "touch")
    }(window, document);
    </script>
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.ico?v=1611746209373" rel="shortcut icon"
        type="image/x-icon">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/images/webclip.png?v=1611746209373"
        rel="apple-touch-icon">
    <style>
    .clip_color_1 {
        background-color: red;
    }
    </style>
    <?php wp_enqueue_script("jquery"); wp_head(); ?><?php $udesly_fe_items = udesly_set_fe_items('dojo'); ?>
</head>

<body class="<?php echo join(' ', get_body_class() ) . ' body'; ?>" udesly-page="dojo">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="navbar">
        <a href="<?php echo $udesly_fe_items['link_29d0cb47']; ?>" class="logo w-inline-block"
            data-udy-fe="link_29d0cb47"><img src="<?php echo $udesly_fe_items['image_65507d38']->src; ?>" loading="lazy"
                alt="<?php echo $udesly_fe_items['image_65507d38']->alt; ?>" class="image" data-udy-fe="image_65507d38"
                srcset="<?php echo $udesly_fe_items['image_65507d38']->srcset; ?>"></a>
        <div class="nav">
            <a href="<?php echo $udesly_fe_items['link_-632a7837']; ?>" aria-current="page"
                class="link-block w-inline-block w--current" data-udy-fe="link_-632a7837">
                <div data-udy-fe="text_209730"><?php echo $udesly_fe_items['text_209730'] ?></div>
            </a>
        </div>
    </div>
    <div class="app" style="background-color:#f1f1f1">
        <div class="menu">
            <div data-w-id="cde9f374-815b-9dcb-dfb6-dbc92d1099fe" data-animation-type="lottie"
                data-src="<?php echo get_stylesheet_directory_uri(); ?>/documents/menu-arrow.json?v=1611746209373"
                data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg"
                data-default-duration="0.6" data-duration="0" class="lottie-animation"></div>
        </div>
        <div style="-webkit-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:none"
            class="admin">
            <div class="admin-content">
                <?php echo do_shortcode('[vg_display_admin_page page_url="'.get_admin_url().'/post.php?post='.get_the_ID().'&action=edit"]'); ?>
            </div>
        </div>
        <div class="w-layout-grid dojo_grid">
            <div class="mainview">
                <div class="slide-constraint">
                    <div id="thumb_clone_holder" style="display: none">
                        <div class="bin_image"><img src="<?php echo $udesly_fe_items['image_317f733b']->src; ?>"
                                loading="lazy" alt="<?php echo $udesly_fe_items['image_317f733b']->alt; ?>"
                                class="absolute_image bin" data-udy-fe="image_317f733b"
                                srcset="<?php echo $udesly_fe_items['image_317f733b']->srcset; ?>"></div>
                    </div>
                    <div class="clip_bin">



                    </div>
                    <div class="silde">
                        <div class="frame"><img src="<?php echo $udesly_fe_items['image_317f733b']->src; ?>"
                                loading="lazy" id="frame_image"
                                alt="<?php echo $udesly_fe_items['image_317f733b']->alt; ?>" class="absolute_image"
                                data-udy-fe="image_317f733b"
                                srcset="<?php echo $udesly_fe_items['image_317f733b']->srcset; ?>"></div>
                        <div class="mainview_buttons">
                            <a id="slide_btn" href="<?php echo $udesly_fe_items['link_23']; ?>"
                                class="button-2 w-button"
                                data-udy-fe="text_1ea43d32,link_23"><?php echo $udesly_fe_items['text_1ea43d32'] ?></a>
                            <a id="image_btn" data-w-id="5ec9ef19-1541-0374-0222-7045dd35c0b0"
                                href="<?php echo $udesly_fe_items['link_23']; ?>" class="button-2 w-button"
                                data-udy-fe="text_1e17a8dc,link_23"><?php echo $udesly_fe_items['text_1e17a8dc'] ?></a>
                            <a id="clone_btn" data-w-id="5ec9ef19-1541-0374-0222-7045dd35c0b0"
                                href="<?php echo $udesly_fe_items['link_23']; ?>" class="button-2 w-button"
                                data-udy-fe="text_1e17a8dc,link_23">Clone</a>
                            <a id="save_btn" data-w-id="5ec9ef19-1541-0374-0222-7045dd35c0b0"
                                href="<?php echo $udesly_fe_items['link_23']; ?>" class="button-2 w-button"
                                data-udy-fe="text_1e17a8dc,link_23">Save</a>
                            <a id="reset_btn" data-w-id="5ec9ef19-1541-0374-0222-7045dd35c0b0"
                                href="<?php echo $udesly_fe_items['link_23']; ?>" class="button-2 w-button"
                                data-udy-fe="text_1e17a8dc,link_23">Reset</a>
                        </div>

                        <div class="controls">
                            <div id="seeker_track" class="progress_container">
                                <div id="seeker_progress" class="progress_bar"></div>
                            </div>
                            <div class="div-block">
                                <div id="play_btn" class="play-button">
                                    <div data-w-id="9579e403-0b49-7c3a-9565-738009e9900a" data-animation-type="lottie"
                                        data-src="<?php echo get_stylesheet_directory_uri(); ?>/documents/pause-to-play.json?v=1611746209373"
                                        data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1"
                                        data-renderer="svg" data-default-duration="2.0020019204587935" data-duration="0"
                                        class="lottie-animation-3"></div>
                                </div>
                                <div id="time-stamp" class="text-block" data-udy-fe="text_2bb19ba">
                                    <?php echo $udesly_fe_items['text_2bb19ba'] ?></div>
                            </div>
                        </div>
                    </div>
                    <div class="wysy">
                        <h1 class="dojo_title"><?php the_title(); ?></h1>
                        <div class="dojo_content w-richtext"><?php the_content(); ?></div>
                    </div>
                </div>
            </div>
            <div class="editor_section">
                <div id="tunnel2" class="tunnel clip">
                    <div class="clipper_area">
                        <div style="display:none">
                            <ul id="removable">
                                <li id="clipper_1" class="clipper_wrapper">
                                    <div class="clipper">
                                        <div id="clipper_track_1" class="clip_track">
                                            <div class="bts-sliders">
                                                <input type="range" id="input_left_1" min="0" max="100" step="0.01"
                                                    value="25" />
                                                <input type="range" id="input_right_1" min="0" max="100" step="0.01"
                                                    value="75" />
                                            </div>
                                            <div id="clipper_range_1" class="clipper_track_progress clip_color_1"></div>
                                            <div class="clipper_btns">
                                                <div id="plus_1" style="" class="remove_btn">
                                                    <div data-w-id="3073f32b-be80-5c4f-349b-0bb2b9772b2d"
                                                        data-animation-type="lottie"
                                                        data-src="<?php echo get_stylesheet_directory_uri(); ?>/documents/addremove.json?v=1611746209373"
                                                        data-loop="0" data-direction="1" data-autoplay="0"
                                                        data-is-ix2-target="1" data-renderer="svg"
                                                        data-default-duration="3.25" data-duration="0" id="plus"
                                                        class="lottie-animation-4"></div>
                                                </div>
                                                <div class="remove_btn">
                                                    <div data-w-id="3073f32b-be80-5c4f-349b-0bb2b9772b2f"
                                                        data-animation-type="lottie"
                                                        data-src="<?php echo get_stylesheet_directory_uri(); ?>/documents/addremove.json?v=1611746209373"
                                                        data-loop="0" data-direction="1" data-autoplay="1"
                                                        data-is-ix2-target="0" data-renderer="svg"
                                                        data-default-duration="3.25" data-duration="3.25" id="minus"
                                                        class="lottie-animation-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="thumb_left_1" class="clipper_thumb left clip_color_1"></div>
                                        <div id="thumb_right_1" class="clipper_thumb right clip_color_1"></div>
                                        <div class="track_bg clip_color_1"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul id="clipper_bin" role="list" class="clipper_list">

                        </ul>
                    </div>
                </div>
                <div id="tunnel1" class="tunnel wave">
                    <div class="form-block w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" class="form"><label for="name"
                                class="field-label"
                                data-udy-fe="text_1d31ff25"><?php echo $udesly_fe_items['text_1d31ff25'] ?></label>
                            <div class="upload_form_field"><input type="text" class="text-field w-input" maxlength="256"
                                    name="name" data-name="Name" placeholder="" id="name"><input type="submit"
                                    value="upload" data-wait="Please wait..." id="add_audio_btn"
                                    class="submit-button w-button"></div>
                        </form>
                        <div class="success-message-2 w-form-done">
                            <div data-udy-fe="text_5a0ea5a1"><?php echo $udesly_fe_items['text_5a0ea5a1'] ?></div>
                        </div>
                        <div class="error-message-2 w-form-fail">
                            <div data-udy-fe="text_-30a0b67f"><?php echo $udesly_fe_items['text_-30a0b67f'] ?></div>
                        </div>
                    </div>
                    <div id="audio_spectrum" class="mainwave"></div>
                    <div id="wave-timeline" class="timeline"></div>
                    <div class="clipper_btns wave"></div>
                </div>
                <div id="mini_wave" class="miniwave"></div>
            </div>
            <div class="foot"><input type="range" data-action="zoom" id="zoom-slider" style="height: 15px;" min=" 0"
                    step="0.1" max="50" value="0" /></div>
        </div>
    </div>

    <script type="text/javascript">
    var $ = window.jQuery;
    </script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/webflow.js?v=1611746209373" type="text/javascript">
    </script>
    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->

    <?php wp_footer(); ?><?php endwhile; endif; ?><?php udesly_set_fe_configuration($udesly_fe_items, 'dojo'); ?>
</body>

</html>