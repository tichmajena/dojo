<!DOCTYPE html>
<html <?php language_attributes(); ?> data-wf-page="6007e6eba6e2fc4d27619105" data-wf-site="6006ce2fae98b56b6161e2c9"><head>
  <meta charset="utf-8">
  
  <meta content="width=device-width, initial-scale=1" name="viewport">
  
  <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/normalize.css?v=1611746209373" rel="stylesheet" type="text/css">
  <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/webflow.css?v=1611746209373" rel="stylesheet" type="text/css">
  <link href="<?php echo get_stylesheet_directory_uri(); ?>/css/kufundo.webflow.css?v=1611746209373" rel="stylesheet" type="text/css">
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.ico?v=1611746209373" rel="shortcut icon" type="image/x-icon">
  <link href="<?php echo get_stylesheet_directory_uri(); ?>/images/webclip.png?v=1611746209373" rel="apple-touch-icon">
<?php wp_enqueue_script("jquery"); wp_head(); ?><?php $udesly_fe_items = udesly_set_fe_items('detail_post'); ?></head>
<body class="<?php echo join(' ', get_body_class() ); ?>" udesly-page="detail_post"><?php if (have_posts()) : while (have_posts()) : the_post(); ?>
  <div class="content-wrapper">
    <div class="navbar">
      <a href="<?php echo $udesly_fe_items['link_29d0cb47']; ?>" class="logo w-inline-block" data-udy-fe="link_29d0cb47"><img src="<?php echo $udesly_fe_items['image_65507d38']->src; ?>" loading="lazy" alt="<?php echo $udesly_fe_items['image_65507d38']->alt; ?>" class="image" data-udy-fe="image_65507d38" srcset="<?php echo $udesly_fe_items['image_65507d38']->srcset; ?>"></a>
      <div class="nav">
        <a href="<?php echo $udesly_fe_items['link_-632a7837']; ?>" class="link-block w-inline-block" data-udy-fe="link_-632a7837">
          <div data-udy-fe="text_209730"><?php echo $udesly_fe_items['text_209730'] ?></div>
        </a>
      </div>
    </div>
    <div class="max-width-container">
      <h1><?php the_title(); ?></h1>
      <div class="w-richtext"><?php the_content(); ?></div>
    </div>
  </div>
  
  <script type="text/javascript">var $ = window.jQuery;</script><script src="<?php echo get_stylesheet_directory_uri(); ?>/js/webflow.js?v=1611746209373" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->

<?php wp_footer(); ?><?php endwhile; endif; ?><?php udesly_set_fe_configuration($udesly_fe_items, 'detail_post'); ?></body></html>