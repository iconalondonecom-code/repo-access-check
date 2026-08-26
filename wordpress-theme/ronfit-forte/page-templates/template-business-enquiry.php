<?php
/* Template Name: Business Enquiry */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Business Enquiry | Contact the Ronfit Forte Partner Team',
	'description' => 'Send a business enquiry to Ronfit Forte. Tell us your market, channel and categories of interest and our partner team will respond with territory-relevant information.',
	'canonical'   => home_url( '/business-enquiry/' ),
);

get_header();
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Business enquiry',
			'title'   => 'Tell us your market and we will respond with <span class="text-primary">what is relevant to it</span>',
			'intro'   => 'This form is for business partners — distributors, importers, wholesalers, pharmacy networks, retail chains and healthcare businesses. We do not sell to consumers and we do not publish pricing.',
		)
	);
	?>

	<section class="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
		<?php ronfit_enquiry_form( 'enquiry' ); ?>

		<aside class="space-y-5">
			<div class="rounded-[2.5rem] bg-charcoal p-8 text-charcoal-foreground">
				<h2 class="text-xl font-semibold">Prefer to reach us directly?</h2>
				<dl class="mt-6 space-y-4 text-sm">
					<div>
						<dt class="text-charcoal-foreground/55">Email</dt>
						<dd><a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a></dd>
					</div>
					<div>
						<dt class="text-charcoal-foreground/55">Phone</dt>
						<dd><a href="tel:<?php echo esc_attr( RONFIT_PHONE_TEL ); ?>" class="font-semibold text-charcoal-foreground"><?php echo esc_html( RONFIT_PHONE ); ?></a></dd>
					</div>
					<div>
						<dt class="text-charcoal-foreground/55">WhatsApp</dt>
						<dd><a href="<?php echo esc_url( ronfit_whatsapp_link( 'Hello Ronfit Forte, I have a business enquiry.' ) ); ?>" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary">Start a chat</a></dd>
					</div>
				</dl>
			</div>

			<div class="rounded-[2.5rem] border border-border bg-secondary p-8">
				<h2 class="text-base font-semibold text-foreground">What happens next</h2>
				<ol class="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
					<li>We review your market, channel and categories of interest.</li>
					<li>We reply with the portfolio information relevant to your territory.</li>
					<li>We work through documentation and requirements with you directly.</li>
				</ol>
			</div>
		</aside>
	</section>
</main>
<?php get_footer(); ?>
