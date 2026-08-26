<?php
/**
 * Generic fallback template. Every route the source site defines has its own
 * dedicated template (see page-templates/, front-page.php, home.php,
 * single.php, template-product-*.php) — this only renders if a Page exists
 * without one of those assigned.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main class="container-page py-16 lg:py-24">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<h1 class="text-4xl font-semibold tracking-tight text-foreground"><?php the_title(); ?></h1>
		<div class="prose mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
			<?php the_content(); ?>
		</div>
		<?php
	endwhile;
	?>
</main>
<?php get_footer(); ?>
