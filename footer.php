</div>

<?php get_template_part('template-parts/contact-section'); ?>

<footer id="colophon" class="site-footer">
    <div class="container">
        <div class="row py-5">
            <!-- Logo Section -->
            <div class="col-lg-3 col-md-6 col-12 mb-4">
                <?php
                if (function_exists('the_custom_logo')) {
                    the_custom_logo();
                }
                ?>
            </div>
            
            <!-- Main Menu Navigation -->
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <h5 class="footer-header mb-3">Navigation</h5>
                <?php wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'footer-menu list-unstyled',
                    'fallback_cb' => false,
                    'container' => false
                )); ?>
            </div>
            
            <!-- Policies Section -->
            <div class="col-lg-3 col-md-12 col-12 mb-4">
                <h5 class="footer-header mb-3">Policies</h5>
                <ul class="footer-menu list-unstyled">
                    <li><a href="/privacy-policy" class="text-decoration-none">Privacy Policy</a></li>
                    <li><a href="/terms-conditions" class="text-decoration-none">Terms & Conditions</a></li>
                    <li><a href="/cookie-policy" class="text-decoration-none">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- Copyright Section -->
    <div class="border-top">
        <div class="container">
            <div class="row py-3">
                <div class="col-12">
                    <p class="mb-0 text-muted">&copy; <?php echo date('Y'); ?> Appliance World Online. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>
