<?php
/**
 * Homepage — ports src/routes/index.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Ronfit Forte | Global B2B Healthcare Product Portfolio',
	'description' => 'Ronfit Forte offers a structured healthcare portfolio across multiple categories — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology — for distributors and importers worldwide.',
	'canonical'   => home_url( '/' ),
);

get_header();

$categories = ronfit_categories();
$featured   = array_slice( ronfit_featured_products(), 0, 8 );
$latest_insights = get_posts(
	array(
		'post_type'      => 'post',
		'posts_per_page' => 4,
		'post_status'    => 'publish',
	)
);

$hero_slides = array(
	array(
		'id'            => 'portfolio',
		'headline'      => 'Trusted Healthcare.<br>Global Partnerships.<br><span class="text-primary">Stronger Together.</span>',
		'copy'          => 'Ronfit Forte presents healthcare products across multiple therapeutic categories, organised so distributors, importers, wholesalers and pharmacy networks can evaluate the range quickly and start a conversation with our team.',
		'image_desktop' => ronfit_site_image_url( 'ronfit-forte-homepage-hero.png' ),
		'image_mobile'  => ronfit_site_image_url( 'ronfit-forte-mobile-hero.png' ),
		'image_alt'     => 'Ronfit Forte healthcare product range on a curved brand stage',
		'cta_label'     => 'Explore Products',
		'cta_category'  => null,
	),
	array(
		'id'            => 'infant-nutrition',
		'headline'      => 'Nutrition Across Growing Stages',
		'copy'          => 'Stage-structured infant nutrition packs, presented so buyers and retail teams can guide customers to the right pack at every feeding stage.',
		'image_desktop' => $categories['infant-nutrition']['image'],
		'image_mobile'  => null,
		'image_alt'     => 'Ronfit infant nutrition product range',
		'cta_label'     => 'View Category',
		'cta_category'  => 'infant-nutrition',
	),
	array(
		'id'            => 'paediatric-care',
		'headline'      => 'Healthcare Solutions for Growing Years',
		'copy'          => 'Paediatric presentations packaged and named to stand apart from adult products, reducing selection errors at the shelf.',
		'image_desktop' => $categories['paediatric-care']['image'],
		'image_mobile'  => null,
		'image_alt'     => 'Ronfit paediatric care product range',
		'cta_label'     => 'View Category',
		'cta_category'  => 'paediatric-care',
	),
	array(
		'id'            => 'cold-flu-nasal-care',
		'headline'      => 'A Structured Cold &amp; Flu Portfolio',
		'copy'          => 'Tablets, syrups, day and night presentations and an inhaler format — a range distributors can adapt to their own market.',
		'image_desktop' => $categories['cold-flu-nasal-care']['image'],
		'image_mobile'  => null,
		'image_alt'     => 'Ronfit cold, flu and nasal care product range',
		'cta_label'     => 'View Category',
		'cta_category'  => 'cold-flu-nasal-care',
	),
	array(
		'id'            => 'pain-topical-care',
		'headline'      => 'Everyday Relief. Built for Global Business.',
		'copy'          => 'Pain, fever and headache presentations that form a reliable, year-round base within a wider healthcare portfolio.',
		'image_desktop' => $categories['pain-fever-headache']['image'],
		'image_mobile'  => null,
		'image_alt'     => 'Ronfit pain, fever and headache product range',
		'cta_label'     => 'View Category',
		'cta_category'  => 'pain-fever-headache',
	),
);

$life_stages_copy = array(
	array( 'stage' => 'Infancy', 'note' => 'Stage-structured infant nutrition packs.' ),
	array( 'stage' => 'Childhood', 'note' => 'Paediatric presentations with their own identity.' ),
	array( 'stage' => 'Adolescence', 'note' => 'Everyday cold, cough and pain formats.' ),
	array( 'stage' => 'Adulthood', 'note' => 'Topical and oral relief presentations.' ),
	array( 'stage' => 'Every Age', 'note' => 'Skin and dermatology daily-care range.' ),
);
?>
<main>

	<section class="relative overflow-hidden bg-background">
		<h1 class="sr-only">Ronfit Forte — Trusted Global B2B Healthcare Product Portfolio</h1>
		<div aria-hidden="true" class="brand-swoosh -z-10 hidden opacity-[0.14] lg:block"></div>
		<div class="container-page relative pb-14 pt-4 lg:pb-20 lg:pt-6">
			<?php ronfit_hero_carousel( $hero_slides ); ?>
		</div>
	</section>

	<section class="container-page py-16 lg:py-24">
		<div class="max-w-2xl">
			<p class="pill-label">Portfolio</p>
			<h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Healthcare categories, one structured range</h2>
			<p class="mt-4 text-base leading-relaxed text-muted-foreground">Each category is a distinct block within the portfolio, with its own packaging identity and its own page for business buyers to review.</p>
		</div>

		<div class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( $categories as $c ) : ?>
				<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="soft-card group flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-lift">
					<div class="relative aspect-[7/5] w-full overflow-hidden <?php echo esc_attr( $c['accent_class'] ); ?>">
						<img src="<?php echo esc_url( $c['image'] ); ?>" alt="<?php echo esc_attr( $c['image_alt'] ); ?>" width="1400" height="800" loading="lazy" class="h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.06]">
						<span class="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-charcoal backdrop-blur-sm"><?php echo esc_html( $c['number'] ); ?></span>
					</div>
					<div class="flex flex-1 flex-col p-7">
						<div class="flex items-start justify-between gap-3">
							<h3 class="text-lg font-semibold leading-snug text-foreground"><?php echo esc_html( $c['name'] ); ?></h3>
							<span class="mt-0.5 shrink-0 rounded-full bg-secondary p-2 text-primary opacity-0 transition-opacity group-hover:opacity-100"><?php ronfit_icon_arrow_right( 'size-4' ); ?></span>
						</div>
						<p class="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $c['intro'] ); ?></p>
						<span class="mt-5 text-sm font-semibold text-primary">View category &rarr;</span>
					</div>
				</a>
			<?php endforeach; ?>

			<a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="flex flex-col justify-between rounded-[2.5rem] bg-charcoal p-7 text-charcoal-foreground transition-transform duration-500 hover:-translate-y-1">
				<h3 class="text-2xl font-semibold leading-tight">The complete portfolio in one place</h3>
				<p class="mt-4 text-sm leading-relaxed text-charcoal-foreground/70">Browse the full range of products, filter by category and shortlist the presentations relevant to your market.</p>
				<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore all products <?php ronfit_icon_arrow_right( 'size-4' ); ?></span>
			</a>
		</div>
	</section>

	<section class="bg-secondary py-16 curve-top lg:py-24">
		<div class="container-page grid gap-10 lg:grid-cols-[0.8fr_2.2fr]">
			<div>
				<p class="pill-label">Featured products</p>
				<h2 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">Solutions that care.<br>Quality that delivers.</h2>
				<p class="mt-5 text-base leading-relaxed text-muted-foreground">A selection from the Ronfit Forte range. No pricing is published — commercial terms are discussed directly with each partner.</p>
				<a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Explore all products <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
				<?php foreach ( $featured as $p ) : ?>
					<a href="<?php echo esc_url( home_url( '/products/' . $p['slug'] . '/' ) ); ?>" class="group flex flex-col rounded-[2.25rem] bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
						<img src="<?php echo esc_url( $p['image'] ); ?>" alt="<?php echo esc_attr( $p['image_alt'] ); ?>" width="600" height="600" loading="lazy" class="mx-auto h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105 lg:h-64">
						<h3 class="mt-6 text-base font-semibold leading-snug text-foreground"><?php echo esc_html( $p['name'] ); ?></h3>
						<p class="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground"><?php echo esc_html( $p['format'] ); ?></p>
						<span class="mt-auto pt-5 text-sm font-semibold text-primary">View product &rarr;</span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="container-page py-16 lg:py-24">
		<div class="max-w-2xl">
			<p class="pill-label">Healthcare across every stage</p>
			<h2 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">Care that grows with life</h2>
			<p class="mt-5 text-base leading-relaxed text-muted-foreground">From early nutrition to everyday relief, the portfolio is structured around the stages of life a pharmacy shelf serves — helping partners build a coherent range rather than a list of unrelated products.</p>
			<a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Explore our portfolio <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
		</div>

		<div class="lozenge-frame mt-10 lg:mt-12">
			<img src="<?php echo esc_url( ronfit_site_image_url( 'ronfit-healthcare-life-stages.png' ) ); ?>" alt="Ronfit Forte healthcare support across every life stage, from infant nutrition to adult and daily care" width="1400" height="900" loading="lazy" class="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[34rem]">
		</div>

		<ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			<?php foreach ( $life_stages_copy as $s ) : ?>
				<li class="rounded-[1.75rem] border border-border bg-card p-5">
					<h3 class="text-base font-semibold text-foreground"><?php echo esc_html( $s['stage'] ); ?></h3>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $s['note'] ); ?></p>
				</li>
			<?php endforeach; ?>
		</ul>
	</section>

	<section class="relative overflow-hidden bg-primary text-primary-foreground curve-top curve-bottom">
		<img src="<?php echo esc_url( ronfit_site_image_url( 'ronfit-global-business-background.png' ) ); ?>" alt="" aria-hidden="true" loading="lazy" class="absolute inset-0 h-full w-full object-cover opacity-30">
		<div class="container-page relative grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
			<div>
				<p class="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">Global business</p>
				<h2 class="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Global reach. Meaningful partnerships.</h2>
				<p class="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85">Ronfit Forte works with distributors, importers, wholesalers, pharmacy networks and retail chains. Requirements differ by territory, so we discuss documentation and availability directly with each partner.</p>
			</div>
			<div class="flex flex-col justify-end gap-6">
				<ul class="grid gap-4 sm:grid-cols-3">
					<li class="rounded-2xl bg-primary-foreground/12 p-4">
						<p class="text-sm font-semibold">Portfolio breadth</p>
						<p class="mt-1 text-xs leading-relaxed text-primary-foreground/80">Products across multiple healthcare categories</p>
					</li>
					<li class="rounded-2xl bg-primary-foreground/12 p-4">
						<p class="text-sm font-semibold">Partner channels</p>
						<p class="mt-1 text-xs leading-relaxed text-primary-foreground/80">Distribution, import, wholesale, retail</p>
					</li>
					<li class="rounded-2xl bg-primary-foreground/12 p-4">
						<p class="text-sm font-semibold">Single point of contact</p>
						<p class="mt-1 text-xs leading-relaxed text-primary-foreground/80">One team for every enquiry</p>
					</li>
				</ul>
				<div class="flex flex-wrap gap-3">
					<a href="<?php echo esc_url( home_url( '/global-business/' ) ); ?>" class="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]">Global business <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
					<a href="<?php echo esc_url( home_url( '/business-partnership/' ) ); ?>" class="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10">Partner with us</a>
				</div>
			</div>
		</div>
	</section>

	<section class="relative overflow-hidden bg-secondary curve-top curve-bottom">
		<img src="<?php echo esc_url( ronfit_site_image_url( 'ronak-group-section-background.png' ) ); ?>" alt="" aria-hidden="true" loading="lazy" class="absolute inset-0 h-full w-full object-cover opacity-25">
		<div class="container-page relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:py-24">
			<div>
				<p class="pill-label">A brand of</p>
				<h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"><?php echo esc_html( RONFIT_PARENT_NAME ); ?></h2>
				<p class="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Ronfit Forte is the healthcare brand of <?php echo esc_html( RONFIT_PARENT_NAME ); ?>, based in <?php echo esc_html( RONFIT_ADDRESS_CITY . ', ' . RONFIT_ADDRESS_COUNTRY ); ?>. The portfolio is presented for business partners: a clear category structure, consistent brand presentation and one point of contact for enquiries.</p>
				<div class="mt-7 flex flex-wrap gap-3">
					<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">About Ronfit Forte <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
					<a href="<?php echo esc_url( RONFIT_PARENT_URL ); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"><?php echo esc_html( RONFIT_PARENT_LABEL ); ?></a>
				</div>
			</div>
			<img src="<?php echo esc_url( ronfit_product_image_url( 'ronak-group-logo.png' ) ); ?>" alt="<?php echo esc_attr( RONFIT_PARENT_NAME . ' logo' ); ?>" width="420" height="160" loading="lazy" class="mx-auto h-20 w-auto object-contain lg:h-24">
		</div>
	</section>

	<?php if ( ! empty( $latest_insights ) ) : ?>
	<section class="container-page py-8 lg:py-14">
		<div class="flex flex-wrap items-end justify-between gap-5">
			<div>
				<p class="pill-label">Insights</p>
				<h2 class="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ideas that inform healthcare partnerships</h2>
			</div>
			<a href="<?php echo esc_url( home_url( '/insights/' ) ); ?>" class="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">View all insights <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<?php foreach ( $latest_insights as $post ) :
				$thumb = get_the_post_thumbnail_url( $post, 'ronfit-insight-card' ) ?: ronfit_site_image_url( 'ronfit-forte-og-image.png' );
				$topic = wp_get_post_categories( $post->ID, array( 'fields' => 'names' ) );
				$topic_label = ! empty( $topic ) ? $topic[0] : 'Insight';
				?>
				<a href="<?php echo esc_url( home_url( '/insights/' . $post->post_name . '/' ) ); ?>" class="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
					<img src="<?php echo esc_url( $thumb ); ?>" alt="<?php echo esc_attr( get_the_title( $post ) ); ?>" width="800" height="520" loading="lazy" class="h-44 w-full object-cover">
					<div class="flex flex-1 flex-col p-6">
						<p class="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"><?php echo esc_html( get_the_date( 'j F Y', $post ) . ' · ' . $topic_label ); ?></p>
						<h3 class="mt-3 text-base font-semibold leading-snug text-foreground"><?php echo esc_html( get_the_title( $post ) ); ?></h3>
						<span class="mt-auto pt-5 text-sm font-semibold text-primary">Read more &rarr;</span>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</section>
	<?php endif; ?>

	<section class="relative overflow-hidden bg-charcoal text-charcoal-foreground curve-top curve-bottom">
		<img src="<?php echo esc_url( ronfit_site_image_url( 'ronfit-business-partnership-background.png' ) ); ?>" alt="" aria-hidden="true" loading="lazy" class="absolute inset-0 h-full w-full object-cover opacity-30">
		<div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-primary/20"></div>
		<div class="container-page relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
			<div>
				<h2 class="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Let&rsquo;s build a healthier tomorrow, together.</h2>
				<p class="mt-5 max-w-xl text-base leading-relaxed text-charcoal-foreground/75">Tell us your market and channel and our team will respond with the information relevant to your territory.</p>
			</div>
			<div class="flex flex-col gap-4 text-sm">
				<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">Send Business Enquiry <?php ronfit_icon_arrow_right( 'size-4' ); ?></a>
				<a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a>
				<p class="text-charcoal-foreground/70"><?php echo esc_html( RONFIT_PHONE ); ?></p>
			</div>
		</div>
	</section>

</main>
<?php get_footer(); ?>
