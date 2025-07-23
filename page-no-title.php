<?php
get_header();
?>


<?php
/**
 * Template Name: Page with no title or articles
 *
 * Displays a page with no title or articles
 */
?>


<?php
$post = get_post();
?>
<div style="margin-bottom: -47px; padding-bottom: 20px;">
<div class="container">  
    <?php the_content(); ?>
</div>
</div>

<?php
get_footer();
?>
