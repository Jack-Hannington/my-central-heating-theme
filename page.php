<?php
get_header();
?>


<?php
/**
 * Template Name: Altius page
 *
 * Displays a page with only the page title.
 */
?>

<!-- <h1><?php the_title(); ?></h1> -->
<?php
$post = get_post();
?>

<div class="container">   <?php the_content(); ?></div>



<?php
get_footer();
?>
