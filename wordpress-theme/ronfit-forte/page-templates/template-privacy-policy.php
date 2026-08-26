<?php
/* Template Name: Privacy Policy */
/**
 * Ports src/routes/privacy-policy.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Privacy Policy | ' . RONFIT_NAME,
	'description' => 'How Ronfit Forte handles the information submitted through business enquiries, what we collect, how it is used and how to request removal.',
	'canonical'   => home_url( '/privacy-policy/' ),
);

get_header();

$sections = array(
	array(
		'heading' => 'Information we collect',
		'body'    => array(
			'This website collects information only when you choose to send it to us. That means the details you enter into the business enquiry form — your name, company, business email, phone number, country or market, business type, category of interest and your message.',
			'We do not ask for or want sensitive personal information, health information or payment details through this website.',
		),
	),
	array(
		'heading' => 'How we use it',
		'body'    => array(
			'Enquiry details are used to respond to your enquiry and to continue the business conversation you have started. That may include sending portfolio information relevant to your territory, discussing documentation requirements or arranging a call.',
			'We do not sell enquiry information, and we do not add enquirers to unrelated marketing lists.',
		),
	),
	array(
		'heading' => 'Who can see it',
		'body'    => array(
			'Enquiries are received by the ' . RONFIT_PARENT_NAME . ' team responsible for Ronfit Forte business partnerships. Access is limited to colleagues who need it in order to reply to you or to progress the discussion.',
		),
	),
	array(
		'heading' => 'How long we keep it',
		'body'    => array(
			'Business correspondence is retained for as long as the commercial relationship or discussion remains relevant, and afterwards only where a record is needed for legitimate business or legal reasons.',
		),
	),
	array(
		'heading' => 'Cookies and analytics',
		'body'    => array(
			'This website is designed to work without advertising trackers. Where basic analytics or hosting logs are used, they exist to keep the site working and to understand aggregate usage — not to profile individuals.',
		),
	),
	array(
		'heading' => 'Your choices',
		'body'    => array(
			'You can ask us what enquiry information we hold about you, ask for corrections, or ask us to delete it. Write to ' . RONFIT_EMAIL . ' and we will action reasonable requests.',
		),
	),
	array(
		'heading' => 'Changes to this policy',
		'body'    => array(
			'If our practices change, this page will be updated. Material changes will be reflected here rather than communicated individually.',
		),
	),
);
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Legal',
			'title'   => 'Privacy Policy',
			'intro'   => 'This policy explains what happens to the information you send us through this website. It is written plainly because it needs to be understood, not just published.',
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
				<p class="mt-3 text-sm leading-relaxed text-muted-foreground">Questions about this policy can be sent to <a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a>.</p>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>
