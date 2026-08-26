<?php
/**
 * Ports SiteFooter.tsx + WhatsAppButton.tsx + closes the shell opened in header.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Quick Links: mainNav minus Contact, then Insights, then Contact appended
// back — matches footerQuickLinks in SiteFooter.tsx exactly.
$ronfit_main_nav_items    = ronfit_main_nav();
$ronfit_contact_item      = null;
$ronfit_footer_quick_links = array();
foreach ( $ronfit_main_nav_items as $item ) {
	if ( 'Contact' === $item['label'] ) {
		$ronfit_contact_item = $item;
		continue;
	}
	$ronfit_footer_quick_links[] = $item;
}
$ronfit_footer_quick_links[] = array(
	'label' => 'Insights',
	'url'   => home_url( '/insights/' ),
);
if ( $ronfit_contact_item ) {
	$ronfit_footer_quick_links[] = $ronfit_contact_item;
}
?>
</div><?php // closes the .flex-1 content wrapper opened at the end of header.php ?>

<footer class="mt-24 bg-charcoal text-charcoal-foreground curve-top">
	<div class="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
		<div>
			<div class="flex h-20 w-72 items-center justify-start rounded-2xl bg-charcoal-foreground px-5">
				<img src="<?php echo esc_url( ronfit_product_image_url( 'ronfit-forte-logo.png' ) ); ?>" alt="Ronfit Forte logo" width="180" height="54" loading="lazy" class="h-16 w-auto object-contain object-left">
			</div>
			<p class="mt-4 text-sm text-charcoal-foreground/70"><?php echo esc_html( RONFIT_TAGLINE ); ?></p>
			<p class="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/60">A healthcare portfolio spanning nutrition, paediatric care, cold and flu, pain management, topical care and dermatology — presented for international business partners.</p>
			<div class="mt-6 flex h-20 w-60 items-center justify-start gap-3 rounded-2xl bg-charcoal-foreground px-5">
				<span class="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-charcoal/60">A brand of</span>
				<img src="<?php echo esc_url( ronfit_product_image_url( 'ronak-group-logo.png' ) ); ?>" alt="<?php echo esc_attr( RONFIT_PARENT_NAME . ' logo' ); ?>" width="420" height="160" loading="lazy" class="h-14 w-auto object-contain object-left">
			</div>
		</div>

		<nav aria-label="Quick links">
			<h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">Quick Links</h2>
			<ul class="mt-4 space-y-2.5">
				<?php foreach ( $ronfit_footer_quick_links as $item ) : ?>
					<li><a href="<?php echo esc_url( $item['url'] ); ?>" class="text-sm text-charcoal-foreground/80 transition-colors hover:text-primary"><?php echo esc_html( $item['label'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</nav>

		<nav aria-label="Product categories">
			<h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">Product Categories</h2>
			<ul class="mt-4 space-y-2.5">
				<?php foreach ( ronfit_categories() as $c ) : ?>
					<li><a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="text-sm text-charcoal-foreground/80 transition-colors hover:text-primary"><?php echo esc_html( $c['name'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</nav>

		<div>
			<h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">Contact</h2>
			<address class="mt-4 space-y-4 text-sm not-italic text-charcoal-foreground/80">
				<p class="flex gap-2.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
					<span>
						<?php foreach ( ronfit_address_lines() as $line ) : ?>
							<span class="block"><?php echo esc_html( $line ); ?></span>
						<?php endforeach; ?>
						<span class="block"><?php echo esc_html( RONFIT_ADDRESS_CITY . ', ' . RONFIT_ADDRESS_REGION . ' ' . RONFIT_ADDRESS_POSTAL ); ?></span>
						<span class="block"><?php echo esc_html( RONFIT_ADDRESS_COUNTRY ); ?></span>
					</span>
				</p>
				<p class="flex items-center gap-2.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0 text-primary" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
					<a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="transition-colors hover:text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a>
				</p>
				<p class="flex items-center gap-2.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0 text-primary" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.29 1.257 12.05 12.05 0 0 0 6.392 6.36Z"></path></svg>
					<a href="tel:<?php echo esc_attr( RONFIT_PHONE_TEL ); ?>" class="transition-colors hover:text-primary"><?php echo esc_html( RONFIT_PHONE ); ?></a>
				</p>
			</address>
			<a href="<?php echo esc_url( RONFIT_PARENT_URL ); ?>" target="_blank" rel="noopener noreferrer" class="mt-5 inline-block text-sm font-semibold text-primary transition-opacity hover:opacity-80"><?php echo esc_html( RONFIT_PARENT_LABEL ); ?> &rarr;</a>
		</div>
	</div>

	<div class="border-t border-charcoal-foreground/10">
		<div class="container-page flex flex-col gap-3 py-6 text-xs text-charcoal-foreground/55 sm:flex-row sm:items-center sm:justify-between">
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php echo esc_html( RONFIT_NAME ); ?>. A brand of <?php echo esc_html( RONFIT_PARENT_NAME ); ?>, Vadodara, India.</p>
			<div class="flex gap-5">
				<a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>" class="transition-colors hover:text-primary">Privacy Policy</a>
				<a href="<?php echo esc_url( home_url( '/terms-and-conditions/' ) ); ?>" class="transition-colors hover:text-primary">Terms &amp; Conditions</a>
			</div>
		</div>
	</div>
</footer>

<?php ronfit_whatsapp_button(); ?>

<?php wp_footer(); ?>
</body>
</html>
