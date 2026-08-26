<?php
/**
 * Ronfit Forte product catalogue — ported verbatim from src/lib/catalog.ts.
 *
 * Deliberately static PHP data (not a custom post type): the catalogue is a
 * fixed, non-admin-editable set matching the source React site exactly.
 *
 * Content rule preserved from the source: only information visible on
 * supplied packaging or confirmed by the brand is stated. No ingredients,
 * strengths, indications, dosages, pack sizes, regulatory status or
 * manufacturing claims are invented.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, array<string, mixed>> Keyed by category slug.
 */
function ronfit_categories() {
	static $categories = null;
	if ( null !== $categories ) {
		return $categories;
	}

	$categories = array(
		'infant-nutrition'    => array(
			'slug'        => 'infant-nutrition',
			'number'      => '01',
			'name'        => 'Infant Nutrition',
			'short_name'  => 'Infant Nutrition',
			'image'       => ronfit_site_image_url( 'ronfit-infant-nutrition-category.png' ),
			'image_alt'   => 'Ronfit infant nutrition product range',
			'accent_class' => 'bg-cat-infant',
			'intro'       => 'The Ronfit infant nutrition range is organised by feeding stage, giving buyers a clear, age-structured shelf story rather than a single undifferentiated product. Stage-based packaging helps distributors and pharmacy networks present the range logically and helps retail teams guide customers to the correct pack without confusion.',
			'seo_title'   => 'Infant Nutrition Products | Ronfit',
			'seo_description' => 'Stage-structured Ronfit infant nutrition packs for distributors, importers and pharmacy networks. Explore the range and send a B2B enquiry to the Ronfit Forte team.',
			'editorial'   => array(
				'heading' => 'Infant Nutrition in a B2B Portfolio',
				'body'    => array(
					'Infant nutrition is one of the most tightly regulated and closely scrutinised categories a healthcare buyer can carry, and it is also one where clear category architecture makes an immediate commercial difference. The Ronfit range is built around distinct feeding stages so that each pack occupies its own place on shelf, in a catalogue and in a distributor\'s order file.',
					'For importers and wholesalers, a stage-based structure simplifies several practical tasks at once: forecasting by stage, training retail staff, arranging planograms, and preparing market-specific documentation. Because each stage is a separate product record with its own packaging, teams can discuss availability and requirements stage by stage rather than negotiating around a single generic reference.',
					'Ronfit does not publish feeding guidance, comparative nutritional claims or market-specific regulatory status on this website. Requirements differ substantially between territories, and infant nutrition in particular is governed by national rules covering labelling, marketing and importation. Buyers evaluating this category should raise their market\'s requirements directly with our team so the conversation starts from accurate, market-specific information rather than assumptions.',
					'If your business is assessing infant nutrition as an addition to an existing healthcare portfolio, the most useful next step is a short enquiry describing your market, channel and the stages you are interested in. Our team can then respond with the information relevant to your territory.',
				),
			),
		),
		'paediatric-care'     => array(
			'slug'        => 'paediatric-care',
			'number'      => '02',
			'name'        => 'Paediatric Care',
			'short_name'  => 'Paediatric Care',
			'image'       => ronfit_site_image_url( 'ronfit-paediatric-care-category.png' ),
			'image_alt'   => 'Ronfit paediatric care product range',
			'accent_class' => 'bg-cat-paediatric',
			'intro'       => 'Ronfit paediatric presentations are packaged and named so that they are clearly distinguishable from adult products on the same shelf. For business buyers, this separation matters commercially as well as practically: it reduces selection errors at the counter and gives the paediatric range its own identity within a broader healthcare portfolio.',
			'seo_title'   => 'Paediatric Healthcare Products | Ronfit',
			'seo_description' => 'Ronfit paediatric care presentations for pharmacy networks, distributors and healthcare businesses. Review the range and contact the Ronfit Forte team for B2B enquiries.',
			'editorial'   => array(
				'heading' => 'Positioning a Paediatric Range for Business Buyers',
				'body'    => array(
					'Paediatric presentations behave differently from adult products in almost every part of the commercial chain. They are chosen with more caution, they attract closer scrutiny from regulators and retailers, and they depend heavily on unambiguous packaging. A well-organised paediatric range therefore carries value beyond the individual products in it.',
					'Within the Ronfit portfolio, paediatric presentations sit as their own category rather than being scattered across cold, cough and pain groupings. That structure helps buyers see the paediatric offer as a coherent block they can evaluate, quote and position, and it helps retail partners create a clearly delineated section in store.',
					'This website does not provide dosing information, age recommendations or clinical guidance for any paediatric product. Those details belong on approved labelling and in market-specific documentation, and they vary by territory. Business buyers should treat the catalogue as a portfolio overview and raise documentation questions with our team directly.',
					'Distributors and pharmacy networks assessing the paediatric category are welcome to send an enquiry outlining their market and the presentations of interest, and our team will respond with the appropriate business information.',
				),
			),
		),
		'cold-flu-nasal-care' => array(
			'slug'        => 'cold-flu-nasal-care',
			'number'      => '03',
			'name'        => 'Cold, Flu & Nasal Care',
			'short_name'  => 'Cold & Flu',
			'image'       => ronfit_site_image_url( 'ronfit-cold-flu-nasal-care-category.png' ),
			'image_alt'   => 'Ronfit cold, flu and nasal care product range',
			'accent_class' => 'bg-cat-cold',
			'intro'       => 'This is the broadest group in the Ronfit portfolio, spanning tablets, syrups, day and night presentations and an inhaler format. That breadth is deliberate: cold and flu demand is seasonal, highly format-driven and shaped by strong local habits, so buyers benefit from a range they can adapt to their own market rather than a single hero product.',
			'seo_title'   => 'Cold, Flu & Nasal Care Products | Ronfit',
			'seo_description' => 'Explore the Ronfit cold, flu and nasal care range across tablets, syrups and inhaler formats. B2B enquiries welcome from distributors, importers and wholesalers.',
			'editorial'   => array(
				'heading' => 'Building a Seasonal Cold and Flu Offer',
				'body'    => array(
					'Cold and flu is often the first category an international healthcare buyer looks at, because it combines predictable seasonal volume with a purchasing pattern that rewards a well-composed range. Customers arrive with a format preference already in mind — a tablet, a syrup, something for the night, something portable — and a portfolio that can meet several of those preferences captures more of the season.',
					'The Ronfit range reflects that reality. Multiple tablet presentations sit alongside syrups and an inhaler format, which gives a distributor room to build a shelf that covers different formats and price positions without leaning on a single reference. It also gives pharmacy networks a coherent set of products from one brand family, which simplifies ordering and merchandising.',
					'Seasonality has real consequences for planning. Orders placed close to peak demand rarely arrive in time to benefit from it, so the useful conversations happen well before the season starts. Buyers evaluating this category typically want to discuss lead times, pack configurations and market documentation early in the year.',
					'No product on this page carries efficacy, comparative or regulatory claims. Formulation and labelling information is provided through approved documentation on request. Send an enquiry with your market and preferred formats, and our team will follow up with the relevant details.',
				),
			),
		),
		'cough-throat-care'   => array(
			'slug'        => 'cough-throat-care',
			'number'      => '04',
			'name'        => 'Cough & Throat Care',
			'short_name'  => 'Cough & Throat',
			'image'       => ronfit_site_image_url( 'ronfit-cough-throat-care-category.png' ),
			'image_alt'   => 'Ronfit cough and throat care product range',
			'accent_class' => 'bg-cat-cough',
			'intro'       => 'Cough and throat presentations in the Ronfit range cover both syrup and lozenge formats. The two formats serve noticeably different purchase moments — one at home, one carried through the day — and stocking both allows retail partners to serve the same customer need in the two ways it is most often expressed.',
			'seo_title'   => 'Cough & Throat Care Products | Ronfit',
			'seo_description' => 'Ronfit cough and throat care syrups and lozenges for international B2B buyers. Review the portfolio and contact the Ronfit Forte team about distribution enquiries.',
			'editorial'   => array(
				'heading' => 'Format Choice in Cough and Throat Care',
				'body'    => array(
					'Cough and throat care is a category where format is not a detail but the primary decision the customer makes. Syrups are bought for use at home, usually for a course of several days. Lozenges are bought to be carried, and are frequently an impulse purchase at the counter. The same underlying need produces two very different retail behaviours.',
					'For a distributor, that split has direct commercial consequences. Lozenges suit front-of-counter placement, smaller basket sizes and higher purchase frequency. Syrups suit the shelf, larger unit values and pharmacist recommendation. Carrying both formats from a single brand family lets a partner address both positions without adding a second supplier relationship.',
					'The Ronfit range provides syrup and lozenge presentations within the same brand architecture, which keeps packaging recognisable across the two formats and supports a consistent brand block in store.',
					'This site does not describe indications, active ingredients or usage instructions for any product in this category. Those details sit in approved product documentation and are shared with business partners on request through the enquiry process.',
				),
			),
		),
		'pain-fever-headache' => array(
			'slug'        => 'pain-fever-headache',
			'number'      => '05',
			'name'        => 'Pain, Fever & Headache',
			'short_name'  => 'Pain & Fever',
			'image'       => ronfit_site_image_url( 'ronfit-pain-fever-headache-category.png' ),
			'image_alt'   => 'Ronfit pain, fever and headache product range',
			'accent_class' => 'bg-cat-pain',
			'intro'       => 'Pain, fever and headache products form the year-round core of most OTC healthcare portfolios, and the Ronfit range provides several distinct presentations within this group. Steady, non-seasonal demand makes the category a reliable base against which more seasonal categories can be planned.',
			'seo_title'   => 'Pain, Fever & Headache Products | Ronfit',
			'seo_description' => 'The Ronfit pain, fever and headache range for distributors, wholesalers and pharmacy networks. Explore presentations and send a business enquiry.',
			'editorial'   => array(
				'heading' => 'The Commercial Role of a Pain and Fever Range',
				'body'    => array(
					'Where cold and flu demand rises and falls with the season, pain and fever demand is largely constant. That difference is what makes the category strategically useful to a distributor: it produces predictable baseline volume, keeps a brand present on shelf through quiet months, and gives sales teams a reason to visit accounts outside peak periods.',
					'The Ronfit range covers this category with several separate presentations rather than a single line. For a business partner, multiple presentations mean the range can be positioned across more than one price point and more than one channel, and can be adapted to the naming and format conventions customers in a given market already recognise.',
					'Pain and fever products are also among the most closely regulated in a general healthcare portfolio, with labelling and pack-size rules that differ from country to country. Buyers should expect this to be one of the more documentation-intensive parts of any portfolio discussion, and it is worth raising market requirements early.',
					'No product page in this category states strengths, indications or dosing. Approved documentation is provided directly to business partners. Send an enquiry describing your market and channel to begin that conversation.',
				),
			),
		),
		'topical-pain-relief' => array(
			'slug'        => 'topical-pain-relief',
			'number'      => '06',
			'name'        => 'Topical Pain Relief',
			'short_name'  => 'Topical Relief',
			'image'       => ronfit_site_image_url( 'ronfit-topical-pain-relief-category.png' ),
			'image_alt'   => 'Ronfit topical pain relief product range',
			'accent_class' => 'bg-cat-topical',
			'intro'       => 'Topical relief is the most format-rich part of the Ronfit portfolio, with gels in multiple variants and sizes, a spray and a balm. Because these products are visible, tactile and easy to display, they perform strongly in pharmacy, sports retail and general trade alike.',
			'seo_title'   => 'Topical Pain Relief Products | Ronfit Forte',
			'seo_description' => 'Ronfit Forte topical pain relief gels, sprays and balms across multiple variants and pack sizes. International B2B enquiries welcome.',
			'editorial'   => array(
				'heading' => 'Formats, Variants and Shelf Presence',
				'body'    => array(
					'Topical products earn their place in a portfolio partly through their physical presence. Gels, sprays and balms occupy visible shelf space, invite handling, and communicate their purpose at a glance — advantages that tablets and syrups in a carton simply do not have.',
					'The Ronfit Forte topical range is built around variation. Ice cold gels appear in several strengths and formulations, pain gels are offered in more than one pack size, and a spray and balm extend the range into different application methods. For a buyer, this creates a genuine range architecture: an entry presentation, step-ups, and alternative formats for customers who prefer them.',
					'Pack size variation is commercially significant in its own right. A smaller tube supports trial and travel purchases; a larger tube supports repeat users and better value perception. Stocking both allows a partner to serve the same customer at different stages without changing brand.',
					'Formulation details, application guidance and market-specific claims are not published here. They are provided to business partners through approved documentation. Tell our team which variants and sizes fit your market and we will respond accordingly.',
				),
			),
		),
		'skin-dermatology'    => array(
			'slug'        => 'skin-dermatology',
			'number'      => '07',
			'name'        => 'Skin & Dermatology',
			'short_name'  => 'Skin & Derma',
			'image'       => ronfit_site_image_url( 'ronfit-skin-dermatology-category.png' ),
			'image_alt'   => 'Ronfit skin and dermatology product range',
			'accent_class' => 'bg-cat-derma',
			'intro'       => 'The Ronfit skin and dermatology presentations extend the portfolio into everyday topical skin care, in both cream and dusting powder formats. The category complements the topical relief range and gives partners an additional adjacent segment to develop.',
			'seo_title'   => 'Skin & Dermatology Products | Ronfit',
			'seo_description' => 'Ronfit skin and dermatology creams and powders for healthcare distributors and pharmacy networks. Explore the range and submit a B2B enquiry.',
			'editorial'   => array(
				'heading' => 'Dermatology as an Adjacent Category',
				'body'    => array(
					'Skin and dermatology sits naturally beside topical relief in a healthcare portfolio. The two categories share a shelf area, a purchasing logic and often the same buyer inside a retail organisation, which makes dermatology a low-friction extension for a partner already carrying topical products.',
					'The Ronfit presentations in this category cover cream and dusting powder formats. Powder formats in particular perform well in warm and humid markets, where they answer an everyday need and see steady repeat purchase rather than occasional use.',
					'Because skin products are applied directly and used regularly, packaging clarity and pack integrity carry more weight here than in many other categories. Buyers evaluating dermatology lines typically look closely at closure type, pack size and how clearly the presentation communicates its purpose.',
					'Ronfit does not publish claims about specific skin conditions, treatment outcomes or comparative performance. Product documentation is shared with business partners on request; send an enquiry describing your market to receive the relevant information.',
				),
			),
		),
	);

	return $categories;
}

/**
 * @return array<string, array<string, mixed>> Keyed by product slug, in catalogue order.
 */
function ronfit_products() {
	static $products = null;
	if ( null !== $products ) {
		return $products;
	}

	$products = array();

	$add = function ( $slug, $name, $category, $image_file, $image_alt, $format, $summary, $details, $featured = false ) use ( &$products ) {
		$products[ $slug ] = array(
			'slug'      => $slug,
			'name'      => $name,
			'category'  => $category,
			'image'     => ronfit_product_image_url( $image_file ),
			'image_alt' => $image_alt,
			'format'    => $format,
			'summary'   => $summary,
			'details'   => $details,
			'featured'  => $featured,
		);
	};

	// Infant Nutrition
	$add( 'ronfit-baby-stage-1', 'RONFIT BABY Stage 1', 'infant-nutrition', 'ronfit-baby-stage-1.png', 'RONFIT BABY Stage 1 infant nutrition pack', 'Infant nutrition — Stage 1',
		'The opening pack in the Ronfit Baby stage structure, presented as Stage 1 for the earliest feeding period covered by the range.',
		array(
			'Presented as the first stage in a three-stage infant nutrition structure.',
			'Stage designation is shown clearly on the front of pack to support correct selection at the point of sale.',
		)
	);
	$add( 'ronfit-baby-stage-2', 'RONFIT BABY Stage 2', 'infant-nutrition', 'ronfit-baby-stage-2.png', 'RONFIT BABY Stage 2 infant nutrition pack', 'Infant nutrition — Stage 2',
		'The middle pack in the Ronfit Baby range, positioned as Stage 2 and packaged to sit visually between the Stage 1 and Stage 3 presentations.',
		array(
			'Second stage within the Ronfit Baby three-stage structure.',
			'Shares the Ronfit Baby pack architecture, with the stage number as the primary differentiator on shelf.',
		),
		true
	);
	$add( 'ronfit-baby-stage-3', 'RONFIT BABY Stage 3', 'infant-nutrition', 'ronfit-baby-stage-3.png', 'RONFIT BABY Stage 3 infant nutrition pack', 'Infant nutrition — Stage 3',
		'The final pack in the Ronfit Baby stage sequence, completing a range that can be merchandised as a continuous progression.',
		array(
			'Third stage in the Ronfit Baby structure.',
			'Completes the stage sequence, allowing the range to be displayed as a single connected block.',
		)
	);

	// Paediatric Care
	$add( 'ronfit-junior', 'RONFIT Junior', 'paediatric-care', 'ronfit-junior.png', 'RONFIT Junior paediatric healthcare pack', 'Paediatric presentation',
		'A paediatric presentation carrying the Junior descriptor, which separates it clearly from the adult presentations in the Ronfit range.',
		array(
			'Named and packaged specifically as a paediatric presentation.',
			'Junior descriptor is prominent on pack to reduce selection errors where adult and paediatric products share a shelf.',
		)
	);
	$add( 'ronfit-c-junior-syrup', 'RONFIT-C Junior Syrup', 'paediatric-care', 'ronfit-c-junior-syrup.png', 'RONFIT-C Junior Syrup paediatric pack', 'Syrup — paediatric presentation',
		'The paediatric syrup presentation within the RONFIT-C line, sharing the line\'s identity while being distinguished as a Junior product.',
		array(
			'Syrup format, presented under the RONFIT-C line as a Junior product.',
			'Allows a partner to carry the RONFIT-C line across both adult and paediatric presentations.',
		)
	);
	$add( 'ronfit-cold-p-syrup', 'RONFIT COLD-P Syrup', 'paediatric-care', 'ronfit-cold-p-syrup.png', 'RONFIT COLD-P Syrup pack', 'Syrup',
		'A syrup presentation within the Ronfit Cold family, identified by the COLD-P designation on pack.',
		array(
			'Syrup format within the wider Ronfit Cold family.',
			'Variant designation appears on the front of pack, distinguishing it from the other Cold syrups in the range.',
		)
	);

	// Cold, Flu & Nasal Care
	$add( 'ronfit-cold', 'RONFIT COLD', 'cold-flu-nasal-care', 'ronfit-cold.png', 'RONFIT COLD pack', 'Cold and flu presentation',
		'The core presentation of the Ronfit Cold family and the reference point around which the other Cold variants are structured.',
		array(
			'Base presentation of the Ronfit Cold family.',
			'Establishes the pack design that the Extra, W and Forte variants build on.',
		),
		true
	);
	$add( 'ronfit-cold-extra', 'RONFIT COLD EXTRA', 'cold-flu-nasal-care', 'ronfit-cold-extra.png', 'RONFIT COLD EXTRA pack', 'Cold and flu presentation',
		'A step-up presentation within the Ronfit Cold family, carrying the Extra descriptor on pack.',
		array(
			'Extra variant within the Ronfit Cold family.',
			'Supports a tiered shelf presentation alongside the base RONFIT COLD pack.',
		)
	);
	$add( 'ronfit-cold-w', 'RONFIT COLD-W', 'cold-flu-nasal-care', 'ronfit-cold-w.png', 'RONFIT COLD-W pack', 'Cold and flu presentation',
		'A distinct variant in the Ronfit Cold family identified by the W designation on pack.',
		array(
			'Variant presentation within the Ronfit Cold family.',
			'Variant code is shown on pack, keeping it clearly separable from other Cold references in a catalogue or order file.',
		)
	);
	$add( 'ronfit-cold-d-syrup', 'RONFIT COLD-D Syrup', 'cold-flu-nasal-care', 'ronfit-cold-d-syrup.png', 'RONFIT COLD-D Syrup pack', 'Syrup',
		'A syrup presentation in the Ronfit Cold family, carrying the COLD-D designation.',
		array(
			'Syrup format within the Ronfit Cold family.',
			'Extends the Cold family beyond solid dose formats for markets where syrups are the preferred presentation.',
		)
	);
	$add( 'ronfit-cold-forte-syrup', 'RONFIT COLD FORTE Syrup', 'cold-flu-nasal-care', 'ronfit-cold-forte-syrup.png', 'RONFIT COLD FORTE Syrup pack', 'Syrup',
		'The Forte-designated syrup presentation within the Ronfit Cold family.',
		array(
			'Syrup format carrying the Forte designation.',
			'Sits above the standard Cold syrup presentations in the range hierarchy.',
		)
	);
	$add( 'ronfit-cold-forte-inhaler', 'RONFIT COLD FORTE Inhaler', 'cold-flu-nasal-care', 'ronfit-cold-forte-inhaler.png', 'RONFIT COLD FORTE Inhaler pack', 'Inhaler',
		'A compact inhaler format that extends the Ronfit Cold family into a portable, carry-with-you presentation.',
		array(
			'Inhaler format, distinct from the tablet and syrup presentations in the range.',
			'Small format suits counter-side and impulse placement rather than shelf-only merchandising.',
		)
	);
	$add( 'ronfit-cold-flu-night-tablets', 'RONFIT Cold & Flu Night Tablets', 'cold-flu-nasal-care', 'ronfit-cold-flu-night-tablets.png', 'RONFIT Cold and Flu Night Tablets pack', 'Tablets',
		'A night-designated tablet presentation, allowing the cold and flu offer to be split into day and night positions on shelf.',
		array(
			'Tablet format, presented specifically as a Night product.',
			'Enables a day/night shelf structure within a single brand family.',
		)
	);
	$add( 'ronfit-cold-influenza', 'RONFIT COLD — Symptomatic Relief of Influenza', 'cold-flu-nasal-care', 'ronfit-cold-influenza.png', 'RONFIT COLD pack for symptomatic relief of influenza', 'Cold and flu presentation',
		'A Ronfit Cold presentation whose pack is described for the symptomatic relief of influenza, as printed on the packaging.',
		array(
			'Pack description follows the wording carried on the supplied packaging.',
			'Approved labelling and market documentation are provided to business partners on request.',
		)
	);

	// Cough & Throat Care
	$add( 'ronfit-cold-flu-lozenges', 'RONFIT Cold & Flu Lozenges', 'cough-throat-care', 'ronfit-cold-flu-lozenges.png', 'RONFIT Cold and Flu Lozenges pack', 'Lozenges',
		'A lozenge presentation suited to counter placement and carry-with-you purchase, in a format customers typically buy on the move.',
		array(
			'Lozenge format in a compact pack.',
			'Format and pack size suit front-of-counter and impulse positions.',
		)
	);
	$add( 'ronfit-c-syrup', 'RONFIT-C Syrup', 'cough-throat-care', 'ronfit-c-syrup.png', 'RONFIT-C Syrup pack', 'Syrup',
		'The standard adult syrup presentation of the RONFIT-C line, the reference pack for that line on shelf.',
		array(
			'Syrup format within the RONFIT-C line.',
			'Pairs with the RONFIT-C Junior Syrup to cover both adult and paediatric presentations.',
		),
		true
	);
	$add( 'ronfit-c-forte', 'RONFIT-C FORTE', 'cough-throat-care', 'ronfit-c-forte.png', 'RONFIT-C FORTE pack', 'Cough and throat presentation',
		'The Forte-designated presentation within the RONFIT-C line, positioned above the standard RONFIT-C pack.',
		array(
			'Forte designation within the RONFIT-C line.',
			'Supports a tiered structure across the cough and throat range.',
		)
	);

	// Pain, Fever & Headache
	$add( 'ronfit-forte', 'RONFIT FORTE', 'pain-fever-headache', 'ronfit-forte.png', 'RONFIT FORTE pack', 'Pain, fever and headache presentation',
		'The presentation that carries the Ronfit Forte name directly, and the anchor product of the brand\'s pain and fever offer.',
		array(
			'Carries the Ronfit Forte brand name on pack.',
			'Acts as the reference presentation for the pain, fever and headache category.',
		),
		true
	);
	$add( 'ronfit-forte-pain-fever-headache-tablet', 'RONFIT FORTE Pain, Fever & Headache Tablets', 'pain-fever-headache', 'ronfit-forte-pain-fever-headache-tablet.png', 'RONFIT FORTE pain, fever and headache tablets pack', 'Tablets',
		'A tablet presentation whose pack states the pain, fever and headache positioning explicitly, making its purpose immediately legible on shelf.',
		array(
			'Tablet format.',
			'Category positioning is printed on the front of pack rather than implied by the brand name alone.',
		)
	);
	$add( 'ronfit-par', 'RONFIT-PAR', 'pain-fever-headache', 'ronfit-par.png', 'RONFIT-PAR pack', 'Pain and fever presentation',
		'A separately designated presentation within the Ronfit pain and fever group, identified by the PAR suffix on pack.',
		array(
			'Distinct variant within the pain and fever group.',
			'Variant code is shown on pack for clear identification in catalogues and order files.',
		)
	);
	$add( 'ronfit-extra', 'RONFIT EXTRA', 'pain-fever-headache', 'ronfit-extra.png', 'RONFIT EXTRA pack', 'Pain and fever presentation',
		'A step-up presentation in the pain and fever group, carrying the Extra descriptor.',
		array(
			'Extra variant within the pain and fever group.',
			'Allows a tiered range to be presented from a single brand family.',
		)
	);
	$add( 'ronfit-plus', 'RONFIT PLUS', 'pain-fever-headache', 'ronfit-plus.png', 'RONFIT PLUS pack', 'Pain and fever presentation',
		'A Plus-designated presentation sitting alongside the standard and Extra packs in the pain and fever range.',
		array(
			'Plus variant within the pain and fever group.',
			'Supports a three-step presentation structure across the category.',
		)
	);
	$add( 'ronfit-plus-effective-relief', 'RONFIT PLUS — Effective Relief', 'pain-fever-headache', 'ronfit-plus-effective-relief.png', 'RONFIT PLUS Effective Relief pack', 'Pain and fever presentation',
		'A Ronfit Plus presentation whose packaging carries the Effective Relief descriptor, as printed on the supplied pack.',
		array(
			'Pack descriptor follows the wording carried on the supplied packaging.',
			'Approved labelling and documentation are shared with business partners on request.',
		)
	);
	$add( 'ronfit-forte-quick-relief', 'RONFIT FORTE Quick Relief', 'pain-fever-headache', 'ronfit-forte-quick-relief.png', 'RONFIT FORTE Quick Relief pack', 'Pain and fever presentation',
		'A Ronfit Forte presentation carrying the Quick Relief descriptor on pack.',
		array(
			'Descriptor is taken directly from the supplied packaging.',
			'Sits within the Ronfit Forte pain and fever group.',
		)
	);

	// Topical Pain Relief
	$add( 'ronfit-forte-pain-gel-30g', 'RONFIT FORTE Pain Gel 30g', 'topical-pain-relief', 'ronfit-forte-pain-gel-30g.png', 'RONFIT FORTE Pain Gel 30g tube and carton', 'Gel — 30g',
		'The smaller of the two Ronfit Forte pain gel tubes, at 30g. A compact size that suits trial purchase and travel-oriented retail positions.',
		array(
			'Gel format in a 30g tube, as stated on pack.',
			'Pairs with the 50g tube to give the range two price positions within one presentation.',
		),
		true
	);
	$add( 'ronfit-forte-pain-gel-50g', 'RONFIT FORTE Pain Gel 50g', 'topical-pain-relief', 'ronfit-forte-pain-gel-50g.png', 'RONFIT FORTE Pain Gel 50g tube and carton', 'Gel — 50g',
		'The larger Ronfit Forte pain gel tube at 50g, positioned for repeat users and for markets where larger packs are the norm.',
		array(
			'Gel format in a 50g tube, as stated on pack.',
			'Larger size supports better value perception against the 30g presentation.',
		)
	);
	$add( 'ronfit-forte-ice-cold-gel-super-strength', 'RONFIT FORTE ICE COLD Gel — Super Strength', 'topical-pain-relief', 'ronfit-forte-ice-cold-gel-super-strength.png', 'RONFIT FORTE ICE COLD Gel Super Strength pack', 'Gel',
		'The Super Strength presentation within the Ronfit Forte Ice Cold gel line, as designated on the pack.',
		array(
			'Ice Cold gel line, Super Strength designation.',
			'One of four Ice Cold variants, allowing the line to be presented as a structured sub-range.',
		),
		true
	);
	$add( 'ronfit-forte-ice-cold-gel-extra-strong', 'RONFIT FORTE ICE COLD Gel — Extra Strong', 'topical-pain-relief', 'ronfit-forte-ice-cold-gel-extra-strong.png', 'RONFIT FORTE ICE COLD Gel Extra Strong pack', 'Gel',
		'The Extra Strong presentation of the Ronfit Forte Ice Cold gel line.',
		array(
			'Ice Cold gel line, Extra Strong designation.',
			'Variant naming supports a clear step structure across the Ice Cold sub-range.',
		)
	);
	$add( 'ronfit-forte-ice-cold-gel-aloe-vera', 'RONFIT FORTE ICE COLD Gel with Aloe Vera', 'topical-pain-relief', 'ronfit-forte-ice-cold-gel-aloe-vera.png', 'RONFIT FORTE ICE COLD Gel with Aloe Vera pack', 'Gel',
		'An Ice Cold gel variant presented with aloe vera, as stated on the pack.',
		array(
			'Ice Cold gel line, aloe vera variant.',
			'Adds a differentiated option within the Ice Cold sub-range.',
		)
	);
	$add( 'ronfit-forte-ice-cold-gel-menthol', 'RONFIT FORTE ICE COLD Gel with Menthol', 'topical-pain-relief', 'ronfit-forte-ice-cold-gel-menthol.png', 'RONFIT FORTE ICE COLD Gel with Menthol pack', 'Gel',
		'An Ice Cold gel variant presented with menthol, as stated on the pack.',
		array(
			'Ice Cold gel line, menthol variant.',
			'Completes the four-variant Ice Cold structure alongside the Super Strength, Extra Strong and aloe vera presentations.',
		)
	);
	$add( 'ronfit-forte-spray-instant-pain-relief', 'RONFIT FORTE Spray', 'topical-pain-relief', 'ronfit-forte-spray-instant-pain-relief.png', 'RONFIT FORTE instant pain relief spray pack', 'Spray',
		'A spray presentation that extends the topical range beyond gels into a no-touch application format.',
		array(
			'Spray format, distinct from the gel and balm presentations in the range.',
			'Descriptor on pack follows the supplied packaging.',
		)
	);
	$add( 'ronfit-forte-cold-pain-relief-balm', 'RONFIT FORTE Cold & Pain Relief Balm', 'topical-pain-relief', 'ronfit-forte-cold-pain-relief-balm.png', 'RONFIT FORTE cold and pain relief balm jar', 'Balm',
		'A balm presentation in a jar format, bridging the topical relief and cold care parts of the portfolio.',
		array(
			'Balm format in a jar presentation.',
			'Sits across two areas of the portfolio, which supports placement in more than one shelf location.',
		)
	);

	// Skin & Dermatology
	$add( 'ronfit-triple-action-cream', 'RONFIT Triple Action Cream', 'skin-dermatology', 'ronfit-triple-action-cream.png', 'RONFIT Triple Action Cream pack', 'Cream',
		'A cream presentation in the Ronfit Triple Action line, forming one half of a two-format skin care pairing.',
		array(
			'Cream format within the Triple Action line.',
			'Presented alongside the Triple Action dusting powder as a coherent two-format range.',
		),
		true
	);
	$add( 'ronfit-triple-action-dusting-powder', 'RONFIT Triple Action Dusting Powder', 'skin-dermatology', 'ronfit-triple-action-dusting-powder.png', 'RONFIT Triple Action Dusting Powder pack', 'Dusting powder',
		'A dusting powder presentation in the Ronfit Triple Action line, a format with established everyday use in warm and humid markets.',
		array(
			'Dusting powder format within the Triple Action line.',
			'Completes the Triple Action pairing with the cream presentation.',
		)
	);

	return $products;
}

/**
 * @param string $slug
 * @return array<string, mixed>|null
 */
function ronfit_get_category( $slug ) {
	$categories = ronfit_categories();
	return isset( $categories[ $slug ] ) ? $categories[ $slug ] : null;
}

/**
 * @param string $slug
 * @return array<string, mixed>|null
 */
function ronfit_get_product( $slug ) {
	$products = ronfit_products();
	return isset( $products[ $slug ] ) ? $products[ $slug ] : null;
}

/**
 * @param string $slug
 * @return array<int, array<string, mixed>>
 */
function ronfit_products_by_category( $slug ) {
	return array_values(
		array_filter(
			ronfit_products(),
			function ( $p ) use ( $slug ) {
				return $p['category'] === $slug;
			}
		)
	);
}

/**
 * @return array<int, array<string, mixed>>
 */
function ronfit_featured_products() {
	return array_values(
		array_filter(
			ronfit_products(),
			function ( $p ) {
				return ! empty( $p['featured'] );
			}
		)
	);
}

/**
 * @param array<string, mixed> $product
 * @param int                  $limit
 * @return array<int, array<string, mixed>>
 */
function ronfit_related_products( $product, $limit = 4 ) {
	$related = array_values(
		array_filter(
			ronfit_products(),
			function ( $p ) use ( $product ) {
				return $p['category'] === $product['category'] && $p['slug'] !== $product['slug'];
			}
		)
	);
	return array_slice( $related, 0, $limit );
}
