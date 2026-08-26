<?php
/**
 * Ports the NotFoundComponent in src/routes/__root.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'     => 'Page not found | ' . RONFIT_NAME,
	'noindex'   => true,
	'canonical' => home_url( '/' ),
);

get_header();
?>
<main class="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
	<div class="max-w-md text-center">
		<h1 class="text-7xl font-bold text-foreground">404</h1>
		<h2 class="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
		<p class="mt-2 text-sm text-muted-foreground">The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.</p>
		<div class="mt-6">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</a>
		</div>
	</div>
</main>
<?php get_footer(); ?>
