<?php
/* Template Name: Contact */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Contact Ronfit Forte | Business Enquiry, Email, Phone & WhatsApp',
	'description' => 'Contact the Ronfit Forte partner team: send the business enquiry form, or reach us by email, phone or WhatsApp. Office in Vadodara, Gujarat, India.',
	'canonical'   => home_url( '/contact/' ),
);

get_header();
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Contact',
			'title'   => 'Talk to the <span class="text-primary">Ronfit Forte</span> team',
			'intro'   => 'For portfolio, partnership or documentation questions, use the business enquiry form below or reach us directly by email, phone or WhatsApp.',
		)
	);
	?>

	<section class="container-page grid gap-5 py-14 sm:grid-cols-3">
		<a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1">
			<span class="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
			</span>
			<h2 class="mt-5 text-lg font-semibold text-foreground">Email</h2>
			<p class="mt-2 text-sm font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></p>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground">The fastest route for portfolio and partnership questions.</p>
		</a>

		<a href="tel:<?php echo esc_attr( RONFIT_PHONE_TEL ); ?>" class="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1">
			<span class="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.29 1.257 12.05 12.05 0 0 0 6.392 6.36Z"></path></svg>
			</span>
			<h2 class="mt-5 text-lg font-semibold text-foreground">Phone</h2>
			<p class="mt-2 text-sm font-semibold text-primary"><?php echo esc_html( RONFIT_PHONE ); ?></p>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground">Available during business hours.</p>
		</a>

		<a href="<?php echo esc_url( ronfit_whatsapp_link( 'Hello Ronfit Forte, I would like to get in touch.' ) ); ?>" target="_blank" rel="noopener noreferrer" class="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1">
			<span class="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
			</span>
			<h2 class="mt-5 text-lg font-semibold text-foreground">WhatsApp</h2>
			<p class="mt-2 text-sm font-semibold text-primary">Start a chat</p>
			<p class="mt-3 text-sm leading-relaxed text-muted-foreground">Convenient for partners in different time zones.</p>
		</a>
	</section>

	<section class="bg-secondary py-16 curve-top lg:py-20">
		<div class="container-page grid gap-10 lg:grid-cols-[1.35fr_1fr]">
			<div>
				<p class="pill-label">Business enquiry</p>
				<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Send your enquiry</h2>
				<p class="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">If you are a distributor, importer, wholesaler, pharmacy network or retail chain, this form captures the details we need to reply usefully — your market, channel and categories of interest.</p>
				<div class="mt-8">
					<?php ronfit_enquiry_form( 'contact' ); ?>
				</div>
			</div>

			<div class="lg:pt-24">
				<div class="rounded-[2.5rem] bg-card p-8 shadow-soft">
					<p class="pill-label">Office</p>
					<h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground"><?php echo esc_html( RONFIT_PARENT_NAME ); ?></h2>
					<address class="mt-5 not-italic text-base leading-relaxed text-muted-foreground">
						<?php foreach ( ronfit_address_lines() as $line ) : ?>
							<span class="block"><?php echo esc_html( $line ); ?></span>
						<?php endforeach; ?>
						<span class="block"><?php echo esc_html( RONFIT_ADDRESS_CITY . ', ' . RONFIT_ADDRESS_REGION . ' ' . RONFIT_ADDRESS_POSTAL ); ?></span>
						<span class="block"><?php echo esc_html( RONFIT_ADDRESS_COUNTRY ); ?></span>
					</address>
					<a href="<?php echo esc_url( RONFIT_PARENT_URL ); ?>" target="_blank" rel="noopener noreferrer" class="mt-6 inline-block text-sm font-semibold text-primary"><?php echo esc_html( RONFIT_PARENT_LABEL ); ?></a>
				</div>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>
