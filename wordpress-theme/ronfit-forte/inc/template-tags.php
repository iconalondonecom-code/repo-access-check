<?php
/**
 * Reusable markup partials — ported 1:1 from the React components in
 * src/components/site/*.tsx. Class names are copied verbatim from the
 * source so the theme's compiled CSS (assets/css/main.css, extracted from
 * the real `npm run build` output) styles them identically: DO NOT invent
 * new class names here, only reuse ones that exist in the source components.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Insights "topic" — native Posts have no bespoke topic field like
 * src/lib/insights.ts did, so the post's first assigned category stands in
 * for it. Used by home.php and single.php.
 *
 * @param int $post_id
 * @return string
 */
function ronfit_insight_topic( $post_id ) {
	$topics = wp_get_post_categories( $post_id, array( 'fields' => 'names' ) );
	return ! empty( $topics ) ? $topics[0] : 'Insight';
}

/**
 * @return string Current request path, normalized with a trailing slash.
 */
function ronfit_current_path() {
	$path = wp_parse_url( esc_url_raw( $_SERVER['REQUEST_URI'] ?? '/' ), PHP_URL_PATH );
	if ( ! $path || '/' === $path ) {
		return '/';
	}
	return untrailingslashit( $path ) . '/';
}

/**
 * Mirrors SiteHeader.tsx's activeProps/activeOptions: exact match for Home,
 * prefix match for every other nav item (so /product-category/* also
 * highlights "Products", etc).
 *
 * @param string $url
 * @return bool
 */
function ronfit_nav_is_current( $url ) {
	$target  = wp_parse_url( $url, PHP_URL_PATH );
	$target  = ( ! $target || '/' === $target ) ? '/' : untrailingslashit( $target ) . '/';
	$current = ronfit_current_path();

	if ( '/' === $target ) {
		return '/' === $current;
	}
	return 0 === strpos( $current, $target );
}

/**
 * Ports ProductCard.tsx.
 *
 * @param array<string, mixed> $product
 * @param string               $extra_attrs Raw extra HTML attributes for the root <a> (e.g. data-product-category="..."). Caller must pre-escape.
 */
function ronfit_product_card( $product, $extra_attrs = '' ) {
	$url = home_url( '/products/' . $product['slug'] . '/' );
	?>
	<a href="<?php echo esc_url( $url ); ?>" <?php echo $extra_attrs; // phpcs:ignore -- caller pre-escapes. ?> class="group flex flex-col rounded-[2.5rem] bg-card p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
		<div class="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-secondary/60 p-2">
			<span aria-hidden="true" class="absolute -right-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl"></span>
			<img
				src="<?php echo esc_url( $product['image'] ); ?>"
				alt="<?php echo esc_attr( $product['image_alt'] ); ?>"
				width="800" height="800" loading="lazy"
				class="relative h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.07] sm:h-72 lg:h-80"
			>
		</div>
		<h3 class="mt-5 text-lg font-semibold leading-snug text-foreground"><?php echo esc_html( $product['name'] ); ?></h3>
		<p class="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground"><?php echo esc_html( $product['format'] ); ?></p>
		<span class="mt-auto pt-4 text-sm font-semibold text-primary">View product &rarr;</span>
	</a>
	<?php
}

/**
 * Ports PageHero.tsx.
 *
 * @param array{eyebrow:string,title:string,intro?:string,image?:array{url:string,alt:string},variant?:string,image_align?:string,children?:string} $args
 */
function ronfit_page_hero( $args ) {
	$args = wp_parse_args(
		$args,
		array(
			'eyebrow'     => '',
			'title'       => '',
			'intro'       => '',
			'image'       => null,
			'variant'     => 'split',
			'image_align' => 'cover',
			'children'    => '',
		)
	);

	if ( $args['image'] && 'banner' === $args['variant'] ) {
		$img_class = 'right' === $args['image_align']
			? 'absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain'
			: 'absolute inset-0 size-full object-cover';
		?>
		<section class="relative isolate overflow-hidden curve-bottom bg-charcoal">
			<img src="<?php echo esc_url( $args['image']['url'] ); ?>" alt="<?php echo esc_attr( $args['image']['alt'] ); ?>" width="2000" height="1000" class="<?php echo esc_attr( $img_class ); ?>">
			<div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-charcoal/25"></div>
			<div aria-hidden="true" class="absolute -left-24 bottom-[-40%] h-[36rem] w-[46rem] rounded-[50%] bg-primary/30 blur-3xl"></div>
			<div class="container-page relative flex min-h-[26rem] flex-col justify-center py-20 lg:min-h-[34rem] lg:py-28">
				<p class="inline-block w-fit rounded-full bg-primary px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground"><?php echo esc_html( $args['eyebrow'] ); ?></p>
				<h1 class="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal-foreground sm:text-5xl lg:text-6xl"><?php echo wp_kses_post( $args['title'] ); ?></h1>
				<?php if ( $args['intro'] ) : ?>
					<p class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-foreground/80"><?php echo esc_html( $args['intro'] ); ?></p>
				<?php endif; ?>
				<?php echo $args['children']; // phpcs:ignore -- pre-rendered trusted theme markup, not user input. ?>
			</div>
		</section>
		<?php
		return;
	}
	?>
	<section class="relative overflow-hidden bg-secondary curve-bottom">
		<div aria-hidden="true" class="absolute -right-32 -top-40 size-[38rem] rounded-[50%] bg-primary/10 blur-3xl"></div>
		<div class="container-page relative grid items-center gap-12 py-16 lg:py-24 <?php echo $args['image'] ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''; ?>">
			<div>
				<p class="pill-label"><?php echo esc_html( $args['eyebrow'] ); ?></p>
				<h1 class="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"><?php echo wp_kses_post( $args['title'] ); ?></h1>
				<?php if ( $args['intro'] ) : ?>
					<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"><?php echo esc_html( $args['intro'] ); ?></p>
				<?php endif; ?>
				<?php echo $args['children']; // phpcs:ignore -- pre-rendered trusted theme markup, not user input. ?>
			</div>
			<?php if ( $args['image'] ) : ?>
				<div class="lozenge-frame">
					<img src="<?php echo esc_url( $args['image']['url'] ); ?>" alt="<?php echo esc_attr( $args['image']['alt'] ); ?>" width="1600" height="1100" class="h-full w-full object-cover">
				</div>
			<?php endif; ?>
		</div>
	</section>
	<?php
}

/**
 * Ports the Breadcrumbs export from PageHero.tsx.
 *
 * @param array<int, array{label:string,url?:string}> $trail
 */
function ronfit_breadcrumbs( $trail ) {
	$count = count( $trail );
	?>
	<nav aria-label="Breadcrumb" class="container-page pt-8">
		<ol class="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
			<?php foreach ( $trail as $i => $item ) : ?>
				<li class="flex items-center gap-2">
					<?php if ( ! empty( $item['url'] ) ) : ?>
						<a href="<?php echo esc_url( $item['url'] ); ?>" class="transition-colors hover:text-primary"><?php echo esc_html( $item['label'] ); ?></a>
					<?php else : ?>
						<span class="text-foreground"><?php echo esc_html( $item['label'] ); ?></span>
					<?php endif; ?>
					<?php if ( $i < $count - 1 ) : ?>
						<span aria-hidden="true">/</span>
					<?php endif; ?>
				</li>
			<?php endforeach; ?>
		</ol>
	</nav>
	<?php
}

/**
 * Ports EnquiryForm.tsx. Submission is handled client-side (assets/js/main.js)
 * by composing the same structured mailto: link the source site builds —
 * there is no backend endpoint, matching the source exactly.
 *
 * @param string $id_prefix
 */
function ronfit_enquiry_form( $id_prefix = 'enq' ) {
	$field_class = 'mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary';
	$label_class = 'text-sm font-semibold text-foreground';
	$id          = function ( $name ) use ( $id_prefix ) {
		return esc_attr( $id_prefix . '-' . $name );
	};
	?>
	<form class="ronfit-enquiry-form rounded-[2.5rem] bg-card p-8 shadow-soft sm:p-10" data-id-prefix="<?php echo esc_attr( $id_prefix ); ?>">
		<div class="grid gap-6 sm:grid-cols-2">
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'name' ); ?>">Full name</label>
				<input id="<?php echo $id( 'name' ); ?>" name="name" required class="<?php echo esc_attr( $field_class ); ?>" placeholder="Your name">
			</div>
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'company' ); ?>">Company</label>
				<input id="<?php echo $id( 'company' ); ?>" name="company" required class="<?php echo esc_attr( $field_class ); ?>" placeholder="Company name">
			</div>
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'email' ); ?>">Business email</label>
				<input id="<?php echo $id( 'email' ); ?>" name="email" type="email" required class="<?php echo esc_attr( $field_class ); ?>" placeholder="you@company.com">
			</div>
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'phone' ); ?>">Phone / WhatsApp</label>
				<input id="<?php echo $id( 'phone' ); ?>" name="phone" class="<?php echo esc_attr( $field_class ); ?>" placeholder="Include country code">
			</div>
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'country' ); ?>">Country / market</label>
				<input id="<?php echo $id( 'country' ); ?>" name="country" required class="<?php echo esc_attr( $field_class ); ?>" placeholder="Territory you operate in">
			</div>
			<div>
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'businessType' ); ?>">Business type</label>
				<select id="<?php echo $id( 'businessType' ); ?>" name="businessType" required class="<?php echo esc_attr( $field_class ); ?>">
					<option value="">Select business type</option>
					<?php foreach ( ronfit_business_types() as $type ) : ?>
						<option value="<?php echo esc_attr( $type ); ?>"><?php echo esc_html( $type ); ?></option>
					<?php endforeach; ?>
				</select>
			</div>
			<div class="sm:col-span-2">
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'category' ); ?>">Category of interest</label>
				<select id="<?php echo $id( 'category' ); ?>" name="category" class="<?php echo esc_attr( $field_class ); ?>">
					<option value="">Any / whole portfolio</option>
					<?php foreach ( ronfit_categories() as $category ) : ?>
						<option value="<?php echo esc_attr( $category['name'] ); ?>"><?php echo esc_html( $category['name'] ); ?></option>
					<?php endforeach; ?>
				</select>
			</div>
			<div class="sm:col-span-2">
				<label class="<?php echo esc_attr( $label_class ); ?>" for="<?php echo $id( 'message' ); ?>">Your enquiry</label>
				<textarea id="<?php echo $id( 'message' ); ?>" name="message" rows="5" required class="<?php echo esc_attr( $field_class ); ?>" placeholder="Channels you serve, volumes you typically handle, and what you would like from us first."></textarea>
			</div>
		</div>

		<button type="submit" class="mt-8 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">Send enquiry</button>
		<p class="mt-3 text-xs text-muted-foreground">Submitting opens your email client with the details prefilled, addressed to <?php echo esc_html( RONFIT_EMAIL ); ?>.</p>
	</form>
	<?php
}

/**
 * Ports EnquiryCTA.tsx.
 *
 * @param string|null $heading
 * @param string|null $body
 */
function ronfit_enquiry_cta( $heading = null, $body = null ) {
	if ( null === $heading ) {
		$heading = "Let's build a healthier tomorrow, together";
	}
	if ( null === $body ) {
		$body = 'Join hands with Ronfit Forte and bring trusted healthcare products to more communities. Tell us your market and channel and our team will respond with the information relevant to your territory.';
	}
	?>
	<section class="container-page py-16">
		<div class="grid gap-8 rounded-[2.5rem] bg-charcoal p-9 text-charcoal-foreground lg:grid-cols-[1.2fr_1fr] lg:p-12">
			<div>
				<h2 class="text-2xl font-semibold sm:text-3xl"><?php echo esc_html( $heading ); ?></h2>
				<p class="mt-4 max-w-xl text-sm leading-relaxed text-charcoal-foreground/75"><?php echo esc_html( $body ); ?></p>
			</div>
			<div class="flex flex-col justify-center gap-3">
				<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground">Send a Business Enquiry</a>
				<a href="<?php echo esc_url( ronfit_whatsapp_link( 'Hello Ronfit Forte, I would like to discuss a business enquiry.' ) ); ?>" target="_blank" rel="noopener noreferrer" class="rounded-full border border-charcoal-foreground/25 px-7 py-3.5 text-center text-sm font-semibold text-charcoal-foreground transition-colors hover:border-primary hover:text-primary">Chat on WhatsApp</a>
				<a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="text-center text-xs text-charcoal-foreground/60 transition-colors hover:text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a>
			</div>
		</div>
	</section>
	<?php
}

/**
 * Ports WhatsAppButton.tsx.
 */
function ronfit_whatsapp_button() {
	$href = ronfit_whatsapp_link( 'Hello ' . RONFIT_NAME . ' team, I would like to discuss a business enquiry.' );
	?>
	<a href="<?php echo esc_url( $href ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp about a business enquiry" class="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-charcoal-foreground shadow-lift transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]">
		<svg viewBox="0 0 24 24" class="size-5 fill-current" aria-hidden="true">
			<path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.13-1.32-.79-.7-1.32-1.57-1.47-1.87-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.19-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.06 4.37 2.47.97 2.97.78 3.51.73.54-.05 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"></path>
			<path d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9C21.95 6.44 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.03-.19-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.4 5.81c0 4.54-3.69 8.21-8.23 8.21z"></path>
		</svg>
		<span class="hidden sm:inline">WhatsApp</span>
	</a>
	<?php
}

/**
 * Ports the "Products" mega-menu dropdown panel from SiteHeader.tsx.
 * Rendered inside header.php's nav item; visibility is toggled by
 * assets/js/main.js on hover/focus (adds/removes a "is-open" class).
 */
function ronfit_mega_menu() {
	?>
	<div class="ronfit-mega-menu absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3" hidden>
		<div class="overflow-hidden rounded-[2rem] border border-border bg-popover p-3 shadow-lift">
			<p class="px-3 pb-2 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Healthcare Categories</p>
			<ul class="grid grid-cols-2 gap-1">
				<?php foreach ( ronfit_categories() as $c ) : ?>
					<li>
						<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-secondary">
							<span class="flex size-9 shrink-0 items-center justify-center rounded-full <?php echo esc_attr( $c['accent_class'] ); ?> text-[0.65rem] font-semibold text-charcoal transition-transform duration-300 group-hover:scale-110"><?php echo esc_html( $c['number'] ); ?></span>
							<span class="text-sm font-medium text-foreground transition-transform duration-300 group-hover:translate-x-0.5"><?php echo esc_html( $c['name'] ); ?></span>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
			<a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="mt-2 block rounded-2xl bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">View all products &rarr;</a>
		</div>
	</div>
	<?php
}

/**
 * Ports HeroCarousel.tsx. $slides items:
 *   id, headline (HTML allowed), copy, image_desktop, image_mobile (nullable),
 *   image_alt, cta_label, cta_category (category slug or null -> /products)
 *
 * @param array<int, array<string, mixed>> $slides
 */
function ronfit_hero_carousel( $slides ) {
	?>
	<div class="relative ronfit-hero-carousel">
		<div class="relative" role="region" aria-roledescription="carousel">
			<div class="overflow-hidden">
				<div class="flex -ml-0">
					<?php foreach ( $slides as $i => $slide ) :
						$secondary_url = $slide['cta_category']
							? home_url( '/product-category/' . $slide['cta_category'] . '/' )
							: home_url( '/products/' );
						?>
						<div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 basis-full pl-0">
							<div<?php echo 0 !== $i ? ' aria-hidden="true"' : ''; ?>>
								<div class="md:hidden">
									<p class="pill-label"><?php echo esc_html( RONFIT_TAGLINE ); ?></p>
									<p class="mt-5 text-3xl font-semibold leading-[1.06] tracking-tight text-foreground"><?php echo wp_kses_post( $slide['headline'] ); ?></p>
									<p class="mt-4 text-base leading-relaxed text-muted-foreground"><?php echo esc_html( $slide['copy'] ); ?></p>
									<div class="mt-6 flex flex-wrap gap-3">
										<?php ronfit_hero_ctas( $slide['cta_label'], $secondary_url ); ?>
									</div>
									<div class="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[3rem] bg-background shadow-lift">
										<img src="<?php echo esc_url( $slide['image_mobile'] ?: $slide['image_desktop'] ); ?>" alt="<?php echo esc_attr( $slide['image_alt'] ); ?>" width="1600" height="1200" class="absolute inset-0 size-full object-contain object-right">
										<?php ronfit_hero_arrows(); ?>
									</div>
								</div>

								<div class="relative hidden overflow-hidden rounded-[3rem] bg-background shadow-lift md:block md:h-[22rem] lg:h-[28rem] lg:rounded-[4rem] xl:h-[34rem]">
									<img src="<?php echo esc_url( $slide['image_desktop'] ); ?>" alt="<?php echo esc_attr( $slide['image_alt'] ); ?>" width="1600" height="1200" class="absolute inset-0 size-full object-contain object-right [filter:contrast(1.05)_saturate(1.08)]">
									<div aria-hidden="true" class="absolute inset-0" style="background-image:linear-gradient(to right, var(--background) 0%, var(--background) 18%, transparent 34%)"></div>
									<div class="relative z-10 flex h-full items-center px-8 lg:px-14">
										<div class="max-w-[38%]">
											<p class="pill-label"><?php echo esc_html( RONFIT_TAGLINE ); ?></p>
											<p class="mt-4 text-xl font-semibold leading-[1.08] tracking-tight text-foreground lg:mt-5 lg:text-3xl xl:text-4xl"><?php echo wp_kses_post( $slide['headline'] ); ?></p>
											<p class="mt-3 text-xs leading-relaxed text-muted-foreground lg:mt-4 lg:text-sm"><?php echo esc_html( $slide['copy'] ); ?></p>
											<div class="mt-5 flex flex-wrap gap-2 lg:mt-6 lg:gap-3">
												<?php ronfit_hero_ctas( $slide['cta_label'], $secondary_url ); ?>
											</div>
										</div>
									</div>
									<?php ronfit_hero_arrows(); ?>
								</div>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="mt-8 flex items-center justify-center gap-2 lg:justify-start ronfit-hero-dots">
			<?php foreach ( $slides as $i => $slide ) : ?>
				<button type="button" aria-label="Go to slide <?php echo esc_attr( $i + 1 ); ?>" aria-current="<?php echo 0 === $i ? 'true' : 'false'; ?>" class="h-2 rounded-full transition-all <?php echo 0 === $i ? 'w-7 bg-primary' : 'w-2 bg-border hover:bg-primary/40'; ?>"></button>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
}

/**
 * @param string $secondary_label
 * @param string $secondary_url
 */
function ronfit_hero_ctas( $secondary_label, $secondary_url ) {
	?>
	<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:text-sm lg:px-6 lg:py-3.5">Send Business Enquiry <?php ronfit_icon_arrow_right( 'size-3.5' ); ?></a>
	<a href="<?php echo esc_url( $secondary_url ); ?>" class="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background px-5 py-3 text-xs font-semibold text-primary transition-colors hover:bg-accent sm:text-sm lg:px-6 lg:py-3.5"><?php echo esc_html( $secondary_label ); ?> <?php ronfit_icon_arrow_right( 'size-3.5' ); ?></a>
	<?php
}

function ronfit_hero_arrows() {
	$button_class = 'absolute top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-transform hover:scale-105';
	?>
	<button type="button" aria-label="Previous slide" class="ronfit-hero-prev <?php echo esc_attr( $button_class ); ?> left-3"><?php ronfit_icon_arrow_left( 'size-4' ); ?></button>
	<button type="button" aria-label="Next slide" class="ronfit-hero-next <?php echo esc_attr( $button_class ); ?> right-3"><?php ronfit_icon_arrow_right( 'size-4' ); ?></button>
	<?php
}

/**
 * @param string $class
 */
function ronfit_icon_arrow_right( $class = 'size-4' ) {
	?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="<?php echo esc_attr( $class ); ?>" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><?php
}

/**
 * @param string $class
 */
function ronfit_icon_arrow_left( $class = 'size-4' ) {
	?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="<?php echo esc_attr( $class ); ?>" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg><?php
}
