<?php
/**
 * Ports src/routes/__root.tsx (RootShell) + SiteHeader.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<?php wp_head(); ?>
</head>
<body <?php body_class( 'flex min-h-screen flex-col bg-background' ); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-[60] border-b border-border/60 bg-background">
	<div class="mx-auto flex h-24 w-full max-w-[100rem] items-center justify-between gap-3 px-4 sm:h-28 sm:px-5 md:h-32 lg:h-36">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="inline-flex items-center" aria-label="<?php echo esc_attr( RONFIT_NAME . ' — home' ); ?>">
			<img src="<?php echo esc_url( ronfit_product_image_url( 'ronfit-forte-logo.png' ) ); ?>" alt="Ronfit Forte logo" width="480" height="144" class="h-20 w-auto sm:h-24 md:h-28 lg:h-32">
		</a>

		<nav aria-label="Main navigation" class="hidden flex-nowrap items-center gap-1 xl:flex">
			<?php foreach ( ronfit_main_nav() as $item ) : ?>
				<?php if ( 'Products' === $item['label'] ) : ?>
					<div class="ronfit-products-nav relative inline-flex shrink-0 items-center">
						<a href="<?php echo esc_url( $item['url'] ); ?>" class="inline-flex shrink-0 items-center gap-1 self-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold leading-none text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground<?php echo ronfit_nav_is_current( $item['url'] ) ? ' font-bold text-primary' : ''; ?>" aria-expanded="false">
							Products
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
						</a>
						<?php ronfit_mega_menu(); ?>
					</div>
				<?php else : ?>
					<a href="<?php echo esc_url( $item['url'] ); ?>" class="inline-flex shrink-0 items-center self-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold leading-none text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground<?php echo ronfit_nav_is_current( $item['url'] ) ? ' font-bold text-primary' : ''; ?>">
						<?php echo esc_html( $item['label'] ); ?>
					</a>
				<?php endif; ?>
			<?php endforeach; ?>
		</nav>

		<div class="flex shrink-0 items-center gap-2">
			<div class="ronfit-lang-switcher relative hidden md:block">
				<button type="button" class="ronfit-lang-toggle flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary" aria-label="Select language" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
					<span class="ronfit-lang-current">English</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
				</button>
				<div class="ronfit-lang-menu absolute right-0 top-full w-44 pt-2" hidden>
					<ul class="overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-lift">
						<li><button type="button" data-lang="en" aria-current="true" class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary font-semibold text-primary">English</button></li>
						<li><button type="button" data-lang="ar" class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary font-medium text-foreground">العربية</button></li>
						<li><button type="button" data-lang="fr" class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary font-medium text-foreground">Français</button></li>
						<li><button type="button" data-lang="es" class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary font-medium text-foreground">Español</button></li>
					</ul>
				</div>
			</div>

			<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex xl:px-5">Business Enquiry</a>

			<button type="button" class="ronfit-mobile-menu-toggle inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden" aria-label="Open menu" aria-expanded="false">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 ronfit-menu-icon-open" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 ronfit-menu-icon-close" aria-hidden="true" hidden><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
			</button>
		</div>
	</div>

	<div class="ronfit-mobile-menu border-t border-border bg-background xl:hidden" hidden>
		<nav aria-label="Mobile navigation" class="container-page flex flex-col gap-1 py-4">
			<?php foreach ( ronfit_main_nav() as $item ) : ?>
				<a href="<?php echo esc_url( $item['url'] ); ?>" class="rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary<?php echo ronfit_nav_is_current( $item['url'] ) ? ' font-bold text-primary' : ''; ?>"><?php echo esc_html( $item['label'] ); ?></a>
			<?php endforeach; ?>
			<p class="px-4 pb-1 pt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Categories</p>
			<?php foreach ( ronfit_categories() as $c ) : ?>
				<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="rounded-2xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary"><?php echo esc_html( $c['name'] ); ?></a>
			<?php endforeach; ?>
			<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">Business Enquiry</a>
		</nav>
	</div>
</header>

<div class="flex-1">
