<?php
/* Template Name: Terms & Conditions */
/**
 * Ports src/routes/terms-and-conditions.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Terms & Conditions | ' . RONFIT_NAME,
	'description' => 'Terms governing use of the Ronfit Forte website, including the informational nature of product content and the B2B scope of enquiries.',
	'canonical'   => home_url( '/terms-and-conditions/' ),
);

get_header();

$sections = array(
	array(
		'heading' => 'Purpose of this website',
		'body'    => array(
			'This website presents the Ronfit Forte healthcare portfolio to business audiences — distributors, importers, wholesalers, pharmacy networks, retail chains and healthcare businesses. It is not a retail store and does not sell products to consumers.',
			'No pricing is published here. Commercial terms are agreed directly with each partner.',
		),
	),
	array(
		'heading' => 'Product information',
		'body'    => array(
			'Product pages describe the range as presented on our packaging. They are informational and are not medical advice, a prescription, or a substitute for consulting a qualified healthcare professional.',
			'Product availability, documentation and requirements differ between territories. Nothing on this website should be read as a statement that a given product is available or approved in your market. Those matters are confirmed in direct correspondence.',
		),
	),
	array(
		'heading' => 'Enquiries',
		'body'    => array(
			'Submitting an enquiry does not create a commercial agreement, an exclusivity arrangement or an obligation on either party. It begins a conversation. Any partnership arises only from a separate written agreement.',
			'You agree that the information you submit is accurate and that you are authorised to make the enquiry on behalf of the business you name.',
		),
	),
	array(
		'heading' => 'Intellectual property',
		'body'    => array(
			'The Ronfit Forte name, logo, packaging designs, product photography and website content are the property of ' . RONFIT_PARENT_NAME . ' or its licensors. You may not reproduce or reuse them commercially without written permission. Approved brand and product assets are provided to partners as part of an agreed arrangement.',
		),
	),
	array(
		'heading' => 'External links',
		'body'    => array(
			'Where this website links to third-party sites, including group websites and messaging services, we are not responsible for their content or practices.',
		),
	),
	array(
		'heading' => 'Limitation of liability',
		'body'    => array(
			'This website is provided on an as-is basis. While we take care to keep the information current and accurate, we do not accept liability for decisions taken solely on the basis of website content. Business decisions should be based on the direct correspondence and documentation exchanged with our team.',
		),
	),
	array(
		'heading' => 'Changes',
		'body'    => array(
			'The portfolio, content and these terms may change over time. The version published on this page is the one that applies.',
		),
	),
);
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Legal',
			'title'   => 'Terms & Conditions',
			'intro'   => 'These terms cover how this website may be used, the informational nature of the product content and the business-to-business scope of enquiries.',
		)
	);
	?>
	<section class="container-page max-w-3xl py-14">
		<div class="space-y-10">
			<?php foreach ( $sections as $s ) : ?>
				<div>
					<h2 class="text-xl font-semibold text-foreground"><?php echo esc_html( $s['heading'] ); ?></h2>
					<div class="mt-4 space-y-4">
						<?php foreach ( $s['body'] as $p ) : ?>
							<p class="text-base leading-relaxed text-muted-foreground"><?php echo esc_html( $p ); ?></p>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endforeach; ?>
			<div class="rounded-2xl border border-border bg-secondary p-6">
				<h2 class="text-base font-semibold text-foreground">Contact</h2>
				<p class="mt-3 text-sm leading-relaxed text-muted-foreground">Questions about these terms can be sent to <a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a>.</p>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>
