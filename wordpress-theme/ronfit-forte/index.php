<?php
/**
 * The main template file — required by WordPress for every classic theme
 * (the ultimate fallback in the template hierarchy). Every real route on
 * this site has its own dedicated template (front-page.php, page.php,
 * home.php, single.php, page-templates/, template-product-*.php), so this
 * file is rarely if ever actually rendered — it exists so WordPress
 * recognizes the theme as valid/non-broken.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main class="container-page py-16 lg:py-24">
	<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			?>
			<article>
				<h1 class="text-4xl font-semibold tracking-tight text-foreground"><?php the_title(); ?></h1>
				<div class="prose mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
					<?php the_content(); ?>
				</div>
			</article>
			<?php
		endwhile;
	else :
		?>
		<p class="text-base text-muted-foreground">Nothing found.</p>
		<?php
	endif;
	?>
</main>
<?php get_footer(); ?>
