/**
 * Ronfit Forte product catalogue.
 *
 * WordPress portability note: `categories` maps to the `product_category`
 * taxonomy and `products` maps to a `product` custom post type. Every field
 * below corresponds to an editable field (title, featured image, taxonomy
 * term, ACF text fields), so the catalogue can be migrated without code.
 *
 * Content rule: only information visible on supplied packaging or confirmed by
 * the brand is stated. No ingredients, strengths, indications, dosages, pack
 * sizes, regulatory status or manufacturing claims are invented.
 */

import infantImg from "@/assets/site/ronfit-infant-nutrition-category.png.asset.json";
import paediatricImg from "@/assets/site/ronfit-paediatric-care-category.png.asset.json";
import coldImg from "@/assets/site/ronfit-cold-flu-nasal-care-category.png.asset.json";
import coughImg from "@/assets/site/ronfit-cough-throat-care-category.png.asset.json";
import painImg from "@/assets/site/ronfit-pain-fever-headache-category.png.asset.json";
import topicalImg from "@/assets/site/ronfit-topical-pain-relief-category.png.asset.json";
import dermaImg from "@/assets/site/ronfit-skin-dermatology-category.png.asset.json";

import babyS1 from "@/assets/products/ronfit-baby-stage-1-1-6-months.png.asset.json";
import babyS2 from "@/assets/products/ronfit-baby-stage-2-6-12-months.png.asset.json";
import babyS3 from "@/assets/products/ronfit-baby-stage-3-12-months-onwards.png.asset.json";
import junior from "@/assets/products/ronfit-junior.png.asset.json";
import cJuniorSyrup from "@/assets/products/ronfit-c-junior-syrup.png.asset.json";
import coldPSyrup from "@/assets/products/ronfit-cold-p-syrup.png.asset.json";
import cold from "@/assets/products/ronfit-cold.png.asset.json";
import coldExtra from "@/assets/products/ronfit-cold-extra.png.asset.json";
import coldW from "@/assets/products/ronfit-cold-w.png.asset.json";
import coldDSyrup from "@/assets/products/ronfit-cold-d-syrup.png.asset.json";
import coldForteSyrup from "@/assets/products/ronfit-cold-forte-syrup.png.asset.json";
import coldForteInhaler from "@/assets/products/ronfit-cold-forte-inhaler.png.asset.json";
import coldFluNight from "@/assets/products/ronfit-cold-flu-night-tablets.png.asset.json";
import coldInfluenza from "@/assets/products/ronfit-cold-for-symptomatic-relief-of-influenza.png.asset.json";
import lozenges from "@/assets/products/ronfit-cold-flu-lozenges.png.asset.json";
import cSyrup from "@/assets/products/ronfit-c-syrup.png.asset.json";
import cForte from "@/assets/products/ronfit-c-forte.png.asset.json";
import forte from "@/assets/products/ronfit-forte.png.asset.json";
import painFeverTablet from "@/assets/products/ronfit-forte-pain-fever-heache-tablet.png.asset.json";
import par from "@/assets/products/ronfit-par.png.asset.json";
import extra from "@/assets/products/ronfit-extra.png.asset.json";
import plus from "@/assets/products/ronfit-plus.png.asset.json";
import plusEffective from "@/assets/products/ronfit-plus-effective-relief.png.asset.json";
import quickRelief from "@/assets/products/ronfit-forte-quick-relief.png.asset.json";
import painGel30 from "@/assets/products/ronfit-forte-pain-gel-30g.png.asset.json";
import painGel50 from "@/assets/products/ronfit-forte-pain-gel-50g.png.asset.json";
import iceSuper from "@/assets/products/ronfit-forte-ice-cold-gel-super-strength.png.asset.json";
import iceExtra from "@/assets/products/ronfit-forte-ice-cold-gel-extra-strong.png.asset.json";
import iceAloe from "@/assets/products/ronfit-forte-ice-cold-gel-with-aloevera.png.asset.json";
import iceMenthol from "@/assets/products/ronfit-forte-ice-cold-gel-with-menthol.png.asset.json";
import spray from "@/assets/products/ronfit-forte-spray-instant-pain-relief.png.asset.json";
import balm from "@/assets/products/ronfit-forte-cold-pain-relief-balm.png.asset.json";
import tripleCream from "@/assets/products/ronfit-triple-action-cream.png.asset.json";
import triplePowder from "@/assets/products/ronfit-triple-action-dusting-powder.png.asset.json";

export type CategorySlug =
  | "infant-nutrition"
  | "paediatric-care"
  | "cold-flu-nasal-care"
  | "cough-throat-care"
  | "pain-fever-headache"
  | "topical-pain-relief"
  | "skin-dermatology";

export interface Category {
  slug: CategorySlug;
  number: string;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  accentClass: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  editorial: { heading: string; body: string[] };
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  image: string;
  imageAlt: string;
  format: string;
  summary: string;
  details: string[];
  featured?: boolean;
}

export const categories: Category[] = [
  {
    slug: "infant-nutrition",
    number: "01",
    name: "Infant Nutrition",
    shortName: "Infant Nutrition",
    image: infantImg.url,
    imageAlt: "Ronfit infant nutrition product range",
    accentClass: "bg-cat-infant",
    intro:
      "The Ronfit infant nutrition range is organised by feeding stage, giving buyers a clear, age-structured shelf story rather than a single undifferentiated product. Stage-based packaging helps distributors and pharmacy networks present the range logically and helps retail teams guide customers to the correct pack without confusion.",
    seoTitle: "Infant Nutrition Products | Ronfit",
    seoDescription:
      "Stage-structured Ronfit infant nutrition packs for distributors, importers and pharmacy networks. Explore the range and send a B2B enquiry to the Ronfit Forte team.",
    editorial: {
      heading: "Infant Nutrition in a B2B Portfolio",
      body: [
        "Infant nutrition is one of the most tightly regulated and closely scrutinised categories a healthcare buyer can carry, and it is also one where clear category architecture makes an immediate commercial difference. The Ronfit range is built around distinct feeding stages so that each pack occupies its own place on shelf, in a catalogue and in a distributor's order file.",
        "For importers and wholesalers, a stage-based structure simplifies several practical tasks at once: forecasting by stage, training retail staff, arranging planograms, and preparing market-specific documentation. Because each stage is a separate product record with its own packaging, teams can discuss availability and requirements stage by stage rather than negotiating around a single generic reference.",
        "Ronfit does not publish feeding guidance, comparative nutritional claims or market-specific regulatory status on this website. Requirements differ substantially between territories, and infant nutrition in particular is governed by national rules covering labelling, marketing and importation. Buyers evaluating this category should raise their market's requirements directly with our team so the conversation starts from accurate, market-specific information rather than assumptions.",
        "If your business is assessing infant nutrition as an addition to an existing healthcare portfolio, the most useful next step is a short enquiry describing your market, channel and the stages you are interested in. Our team can then respond with the information relevant to your territory.",
      ],
    },
  },
  {
    slug: "paediatric-care",
    number: "02",
    name: "Paediatric Care",
    shortName: "Paediatric Care",
    image: paediatricImg.url,
    imageAlt: "Ronfit paediatric care product range",
    accentClass: "bg-cat-paediatric",
    intro:
      "Ronfit paediatric presentations are packaged and named so that they are clearly distinguishable from adult products on the same shelf. For business buyers, this separation matters commercially as well as practically: it reduces selection errors at the counter and gives the paediatric range its own identity within a broader healthcare portfolio.",
    seoTitle: "Paediatric Healthcare Products | Ronfit",
    seoDescription:
      "Ronfit paediatric care presentations for pharmacy networks, distributors and healthcare businesses. Review the range and contact the Ronfit Forte team for B2B enquiries.",
    editorial: {
      heading: "Positioning a Paediatric Range for Business Buyers",
      body: [
        "Paediatric presentations behave differently from adult products in almost every part of the commercial chain. They are chosen with more caution, they attract closer scrutiny from regulators and retailers, and they depend heavily on unambiguous packaging. A well-organised paediatric range therefore carries value beyond the individual products in it.",
        "Within the Ronfit portfolio, paediatric presentations sit as their own category rather than being scattered across cold, cough and pain groupings. That structure helps buyers see the paediatric offer as a coherent block they can evaluate, quote and position, and it helps retail partners create a clearly delineated section in store.",
        "This website does not provide dosing information, age recommendations or clinical guidance for any paediatric product. Those details belong on approved labelling and in market-specific documentation, and they vary by territory. Business buyers should treat the catalogue as a portfolio overview and raise documentation questions with our team directly.",
        "Distributors and pharmacy networks assessing the paediatric category are welcome to send an enquiry outlining their market and the presentations of interest, and our team will respond with the appropriate business information.",
      ],
    },
  },
  {
    slug: "cold-flu-nasal-care",
    number: "03",
    name: "Cold, Flu & Nasal Care",
    shortName: "Cold & Flu",
    image: coldImg.url,
    imageAlt: "Ronfit cold, flu and nasal care product range",
    accentClass: "bg-cat-cold",
    intro:
      "This is the broadest group in the Ronfit portfolio, spanning tablets, syrups, day and night presentations and an inhaler format. That breadth is deliberate: cold and flu demand is seasonal, highly format-driven and shaped by strong local habits, so buyers benefit from a range they can adapt to their own market rather than a single hero product.",
    seoTitle: "Cold, Flu & Nasal Care Products | Ronfit",
    seoDescription:
      "Explore the Ronfit cold, flu and nasal care range across tablets, syrups and inhaler formats. B2B enquiries welcome from distributors, importers and wholesalers.",
    editorial: {
      heading: "Building a Seasonal Cold and Flu Offer",
      body: [
        "Cold and flu is often the first category an international healthcare buyer looks at, because it combines predictable seasonal volume with a purchasing pattern that rewards a well-composed range. Customers arrive with a format preference already in mind — a tablet, a syrup, something for the night, something portable — and a portfolio that can meet several of those preferences captures more of the season.",
        "The Ronfit range reflects that reality. Multiple tablet presentations sit alongside syrups and an inhaler format, which gives a distributor room to build a shelf that covers different formats and price positions without leaning on a single reference. It also gives pharmacy networks a coherent set of products from one brand family, which simplifies ordering and merchandising.",
        "Seasonality has real consequences for planning. Orders placed close to peak demand rarely arrive in time to benefit from it, so the useful conversations happen well before the season starts. Buyers evaluating this category typically want to discuss lead times, pack configurations and market documentation early in the year.",
        "No product on this page carries efficacy, comparative or regulatory claims. Formulation and labelling information is provided through approved documentation on request. Send an enquiry with your market and preferred formats, and our team will follow up with the relevant details.",
      ],
    },
  },
  {
    slug: "cough-throat-care",
    number: "04",
    name: "Cough & Throat Care",
    shortName: "Cough & Throat",
    image: coughImg.url,
    imageAlt: "Ronfit cough and throat care product range",
    accentClass: "bg-cat-cough",
    intro:
      "Cough and throat presentations in the Ronfit range cover both syrup and lozenge formats. The two formats serve noticeably different purchase moments — one at home, one carried through the day — and stocking both allows retail partners to serve the same customer need in the two ways it is most often expressed.",
    seoTitle: "Cough & Throat Care Products | Ronfit",
    seoDescription:
      "Ronfit cough and throat care syrups and lozenges for international B2B buyers. Review the portfolio and contact the Ronfit Forte team about distribution enquiries.",
    editorial: {
      heading: "Format Choice in Cough and Throat Care",
      body: [
        "Cough and throat care is a category where format is not a detail but the primary decision the customer makes. Syrups are bought for use at home, usually for a course of several days. Lozenges are bought to be carried, and are frequently an impulse purchase at the counter. The same underlying need produces two very different retail behaviours.",
        "For a distributor, that split has direct commercial consequences. Lozenges suit front-of-counter placement, smaller basket sizes and higher purchase frequency. Syrups suit the shelf, larger unit values and pharmacist recommendation. Carrying both formats from a single brand family lets a partner address both positions without adding a second supplier relationship.",
        "The Ronfit range provides syrup and lozenge presentations within the same brand architecture, which keeps packaging recognisable across the two formats and supports a consistent brand block in store.",
        "This site does not describe indications, active ingredients or usage instructions for any product in this category. Those details sit in approved product documentation and are shared with business partners on request through the enquiry process.",
      ],
    },
  },
  {
    slug: "pain-fever-headache",
    number: "05",
    name: "Pain, Fever & Headache",
    shortName: "Pain & Fever",
    image: painImg.url,
    imageAlt: "Ronfit pain, fever and headache product range",
    accentClass: "bg-cat-pain",
    intro:
      "Pain, fever and headache products form the year-round core of most OTC healthcare portfolios, and the Ronfit range provides several distinct presentations within this group. Steady, non-seasonal demand makes the category a reliable base against which more seasonal categories can be planned.",
    seoTitle: "Pain, Fever & Headache Products | Ronfit",
    seoDescription:
      "The Ronfit pain, fever and headache range for distributors, wholesalers and pharmacy networks. Explore presentations and send a business enquiry.",
    editorial: {
      heading: "The Commercial Role of a Pain and Fever Range",
      body: [
        "Where cold and flu demand rises and falls with the season, pain and fever demand is largely constant. That difference is what makes the category strategically useful to a distributor: it produces predictable baseline volume, keeps a brand present on shelf through quiet months, and gives sales teams a reason to visit accounts outside peak periods.",
        "The Ronfit range covers this category with several separate presentations rather than a single line. For a business partner, multiple presentations mean the range can be positioned across more than one price point and more than one channel, and can be adapted to the naming and format conventions customers in a given market already recognise.",
        "Pain and fever products are also among the most closely regulated in a general healthcare portfolio, with labelling and pack-size rules that differ from country to country. Buyers should expect this to be one of the more documentation-intensive parts of any portfolio discussion, and it is worth raising market requirements early.",
        "No product page in this category states strengths, indications or dosing. Approved documentation is provided directly to business partners. Send an enquiry describing your market and channel to begin that conversation.",
      ],
    },
  },
  {
    slug: "topical-pain-relief",
    number: "06",
    name: "Topical Pain Relief",
    shortName: "Topical Relief",
    image: topicalImg.url,
    imageAlt: "Ronfit topical pain relief product range",
    accentClass: "bg-cat-topical",
    intro:
      "Topical relief is the most format-rich part of the Ronfit portfolio, with gels in multiple variants and sizes, a spray and a balm. Because these products are visible, tactile and easy to display, they perform strongly in pharmacy, sports retail and general trade alike.",
    seoTitle: "Topical Pain Relief Products | Ronfit Forte",
    seoDescription:
      "Ronfit Forte topical pain relief gels, sprays and balms across multiple variants and pack sizes. International B2B enquiries welcome.",
    editorial: {
      heading: "Formats, Variants and Shelf Presence",
      body: [
        "Topical products earn their place in a portfolio partly through their physical presence. Gels, sprays and balms occupy visible shelf space, invite handling, and communicate their purpose at a glance — advantages that tablets and syrups in a carton simply do not have.",
        "The Ronfit Forte topical range is built around variation. Ice cold gels appear in several strengths and formulations, pain gels are offered in more than one pack size, and a spray and balm extend the range into different application methods. For a buyer, this creates a genuine range architecture: an entry presentation, step-ups, and alternative formats for customers who prefer them.",
        "Pack size variation is commercially significant in its own right. A smaller tube supports trial and travel purchases; a larger tube supports repeat users and better value perception. Stocking both allows a partner to serve the same customer at different stages without changing brand.",
        "Formulation details, application guidance and market-specific claims are not published here. They are provided to business partners through approved documentation. Tell our team which variants and sizes fit your market and we will respond accordingly.",
      ],
    },
  },
  {
    slug: "skin-dermatology",
    number: "07",
    name: "Skin & Dermatology",
    shortName: "Skin & Derma",
    image: dermaImg.url,
    imageAlt: "Ronfit skin and dermatology product range",
    accentClass: "bg-cat-derma",
    intro:
      "The Ronfit skin and dermatology presentations extend the portfolio into everyday topical skin care, in both cream and dusting powder formats. The category complements the topical relief range and gives partners an additional adjacent segment to develop.",
    seoTitle: "Skin & Dermatology Products | Ronfit",
    seoDescription:
      "Ronfit skin and dermatology creams and powders for healthcare distributors and pharmacy networks. Explore the range and submit a B2B enquiry.",
    editorial: {
      heading: "Dermatology as an Adjacent Category",
      body: [
        "Skin and dermatology sits naturally beside topical relief in a healthcare portfolio. The two categories share a shelf area, a purchasing logic and often the same buyer inside a retail organisation, which makes dermatology a low-friction extension for a partner already carrying topical products.",
        "The Ronfit presentations in this category cover cream and dusting powder formats. Powder formats in particular perform well in warm and humid markets, where they answer an everyday need and see steady repeat purchase rather than occasional use.",
        "Because skin products are applied directly and used regularly, packaging clarity and pack integrity carry more weight here than in many other categories. Buyers evaluating dermatology lines typically look closely at closure type, pack size and how clearly the presentation communicates its purpose.",
        "Ronfit does not publish claims about specific skin conditions, treatment outcomes or comparative performance. Product documentation is shared with business partners on request; send an enquiry describing your market to receive the relevant information.",
      ],
    },
  },
];

export const products: Product[] = [
  // Infant Nutrition
  {
    slug: "ronfit-baby-stage-1",
    name: "RONFIT BABY Stage 1",
    category: "infant-nutrition",
    image: babyS1.url,
    imageAlt: "RONFIT BABY Stage 1 infant nutrition pack",
    format: "Infant nutrition — Stage 1",
    summary:
      "The opening pack in the Ronfit Baby stage structure, presented as Stage 1 for the earliest feeding period covered by the range.",
    details: [
      "Presented as the first stage in a three-stage infant nutrition structure.",
      "Stage designation is shown clearly on the front of pack to support correct selection at the point of sale.",
    ],
  },
  {
    slug: "ronfit-baby-stage-2",
    name: "RONFIT BABY Stage 2",
    category: "infant-nutrition",
    image: babyS2.url,
    imageAlt: "RONFIT BABY Stage 2 infant nutrition pack",
    format: "Infant nutrition — Stage 2",
    summary:
      "The middle pack in the Ronfit Baby range, positioned as Stage 2 and packaged to sit visually between the Stage 1 and Stage 3 presentations.",
    details: [
      "Second stage within the Ronfit Baby three-stage structure.",
      "Shares the Ronfit Baby pack architecture, with the stage number as the primary differentiator on shelf.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-baby-stage-3",
    name: "RONFIT BABY Stage 3",
    category: "infant-nutrition",
    image: babyS3.url,
    imageAlt: "RONFIT BABY Stage 3 infant nutrition pack",
    format: "Infant nutrition — Stage 3",
    summary:
      "The final pack in the Ronfit Baby stage sequence, completing a range that can be merchandised as a continuous progression.",
    details: [
      "Third stage in the Ronfit Baby structure.",
      "Completes the stage sequence, allowing the range to be displayed as a single connected block.",
    ],
  },

  // Paediatric Care
  {
    slug: "ronfit-junior",
    name: "RONFIT Junior",
    category: "paediatric-care",
    image: junior.url,
    imageAlt: "RONFIT Junior paediatric healthcare pack",
    format: "Paediatric presentation",
    summary:
      "A paediatric presentation carrying the Junior descriptor, which separates it clearly from the adult presentations in the Ronfit range.",
    details: [
      "Named and packaged specifically as a paediatric presentation.",
      "Junior descriptor is prominent on pack to reduce selection errors where adult and paediatric products share a shelf.",
    ],
  },
  {
    slug: "ronfit-c-junior-syrup",
    name: "RONFIT-C Junior Syrup",
    category: "paediatric-care",
    image: cJuniorSyrup.url,
    imageAlt: "RONFIT-C Junior Syrup paediatric pack",
    format: "Syrup — paediatric presentation",
    summary:
      "The paediatric syrup presentation within the RONFIT-C line, sharing the line's identity while being distinguished as a Junior product.",
    details: [
      "Syrup format, presented under the RONFIT-C line as a Junior product.",
      "Allows a partner to carry the RONFIT-C line across both adult and paediatric presentations.",
    ],
  },
  {
    slug: "ronfit-cold-p-syrup",
    name: "RONFIT COLD-P Syrup",
    category: "paediatric-care",
    image: coldPSyrup.url,
    imageAlt: "RONFIT COLD-P Syrup pack",
    format: "Syrup",
    summary:
      "A syrup presentation within the Ronfit Cold family, identified by the COLD-P designation on pack.",
    details: [
      "Syrup format within the wider Ronfit Cold family.",
      "Variant designation appears on the front of pack, distinguishing it from the other Cold syrups in the range.",
    ],
  },

  // Cold, Flu & Nasal Care
  {
    slug: "ronfit-cold",
    name: "RONFIT COLD",
    category: "cold-flu-nasal-care",
    image: cold.url,
    imageAlt: "RONFIT COLD pack",
    format: "Cold and flu presentation",
    summary:
      "The core presentation of the Ronfit Cold family and the reference point around which the other Cold variants are structured.",
    details: [
      "Base presentation of the Ronfit Cold family.",
      "Establishes the pack design that the Extra, W and Forte variants build on.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-cold-extra",
    name: "RONFIT COLD EXTRA",
    category: "cold-flu-nasal-care",
    image: coldExtra.url,
    imageAlt: "RONFIT COLD EXTRA pack",
    format: "Cold and flu presentation",
    summary:
      "A step-up presentation within the Ronfit Cold family, carrying the Extra descriptor on pack.",
    details: [
      "Extra variant within the Ronfit Cold family.",
      "Supports a tiered shelf presentation alongside the base RONFIT COLD pack.",
    ],
  },
  {
    slug: "ronfit-cold-w",
    name: "RONFIT COLD-W",
    category: "cold-flu-nasal-care",
    image: coldW.url,
    imageAlt: "RONFIT COLD-W pack",
    format: "Cold and flu presentation",
    summary:
      "A distinct variant in the Ronfit Cold family identified by the W designation on pack.",
    details: [
      "Variant presentation within the Ronfit Cold family.",
      "Variant code is shown on pack, keeping it clearly separable from other Cold references in a catalogue or order file.",
    ],
  },
  {
    slug: "ronfit-cold-d-syrup",
    name: "RONFIT COLD-D Syrup",
    category: "cold-flu-nasal-care",
    image: coldDSyrup.url,
    imageAlt: "RONFIT COLD-D Syrup pack",
    format: "Syrup",
    summary:
      "A syrup presentation in the Ronfit Cold family, carrying the COLD-D designation.",
    details: [
      "Syrup format within the Ronfit Cold family.",
      "Extends the Cold family beyond solid dose formats for markets where syrups are the preferred presentation.",
    ],
  },
  {
    slug: "ronfit-cold-forte-syrup",
    name: "RONFIT COLD FORTE Syrup",
    category: "cold-flu-nasal-care",
    image: coldForteSyrup.url,
    imageAlt: "RONFIT COLD FORTE Syrup pack",
    format: "Syrup",
    summary:
      "The Forte-designated syrup presentation within the Ronfit Cold family.",
    details: [
      "Syrup format carrying the Forte designation.",
      "Sits above the standard Cold syrup presentations in the range hierarchy.",
    ],
  },
  {
    slug: "ronfit-cold-forte-inhaler",
    name: "RONFIT COLD FORTE Inhaler",
    category: "cold-flu-nasal-care",
    image: coldForteInhaler.url,
    imageAlt: "RONFIT COLD FORTE Inhaler pack",
    format: "Inhaler",
    summary:
      "A compact inhaler format that extends the Ronfit Cold family into a portable, carry-with-you presentation.",
    details: [
      "Inhaler format, distinct from the tablet and syrup presentations in the range.",
      "Small format suits counter-side and impulse placement rather than shelf-only merchandising.",
    ],
  },
  {
    slug: "ronfit-cold-flu-night-tablets",
    name: "RONFIT Cold & Flu Night Tablets",
    category: "cold-flu-nasal-care",
    image: coldFluNight.url,
    imageAlt: "RONFIT Cold and Flu Night Tablets pack",
    format: "Tablets",
    summary:
      "A night-designated tablet presentation, allowing the cold and flu offer to be split into day and night positions on shelf.",
    details: [
      "Tablet format, presented specifically as a Night product.",
      "Enables a day/night shelf structure within a single brand family.",
    ],
  },
  {
    slug: "ronfit-cold-influenza",
    name: "RONFIT COLD — Symptomatic Relief of Influenza",
    category: "cold-flu-nasal-care",
    image: coldInfluenza.url,
    imageAlt: "RONFIT COLD pack for symptomatic relief of influenza",
    format: "Cold and flu presentation",
    summary:
      "A Ronfit Cold presentation whose pack is described for the symptomatic relief of influenza, as printed on the packaging.",
    details: [
      "Pack description follows the wording carried on the supplied packaging.",
      "Approved labelling and market documentation are provided to business partners on request.",
    ],
  },

  // Cough & Throat Care
  {
    slug: "ronfit-cold-flu-lozenges",
    name: "RONFIT Cold & Flu Lozenges",
    category: "cough-throat-care",
    image: lozenges.url,
    imageAlt: "RONFIT Cold and Flu Lozenges pack",
    format: "Lozenges",
    summary:
      "A lozenge presentation suited to counter placement and carry-with-you purchase, in a format customers typically buy on the move.",
    details: [
      "Lozenge format in a compact pack.",
      "Format and pack size suit front-of-counter and impulse positions.",
    ],
  },
  {
    slug: "ronfit-c-syrup",
    name: "RONFIT-C Syrup",
    category: "cough-throat-care",
    image: cSyrup.url,
    imageAlt: "RONFIT-C Syrup pack",
    format: "Syrup",
    summary:
      "The standard adult syrup presentation of the RONFIT-C line, the reference pack for that line on shelf.",
    details: [
      "Syrup format within the RONFIT-C line.",
      "Pairs with the RONFIT-C Junior Syrup to cover both adult and paediatric presentations.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-c-forte",
    name: "RONFIT-C FORTE",
    category: "cough-throat-care",
    image: cForte.url,
    imageAlt: "RONFIT-C FORTE pack",
    format: "Cough and throat presentation",
    summary:
      "The Forte-designated presentation within the RONFIT-C line, positioned above the standard RONFIT-C pack.",
    details: [
      "Forte designation within the RONFIT-C line.",
      "Supports a tiered structure across the cough and throat range.",
    ],
  },

  // Pain, Fever & Headache
  {
    slug: "ronfit-forte",
    name: "RONFIT FORTE",
    category: "pain-fever-headache",
    image: forte.url,
    imageAlt: "RONFIT FORTE pack",
    format: "Pain, fever and headache presentation",
    summary:
      "The presentation that carries the Ronfit Forte name directly, and the anchor product of the brand's pain and fever offer.",
    details: [
      "Carries the Ronfit Forte brand name on pack.",
      "Acts as the reference presentation for the pain, fever and headache category.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-forte-pain-fever-headache-tablet",
    name: "RONFIT FORTE Pain, Fever & Headache Tablets",
    category: "pain-fever-headache",
    image: painFeverTablet.url,
    imageAlt: "RONFIT FORTE pain, fever and headache tablets pack",
    format: "Tablets",
    summary:
      "A tablet presentation whose pack states the pain, fever and headache positioning explicitly, making its purpose immediately legible on shelf.",
    details: [
      "Tablet format.",
      "Category positioning is printed on the front of pack rather than implied by the brand name alone.",
    ],
  },
  {
    slug: "ronfit-par",
    name: "RONFIT-PAR",
    category: "pain-fever-headache",
    image: par.url,
    imageAlt: "RONFIT-PAR pack",
    format: "Pain and fever presentation",
    summary:
      "A separately designated presentation within the Ronfit pain and fever group, identified by the PAR suffix on pack.",
    details: [
      "Distinct variant within the pain and fever group.",
      "Variant code is shown on pack for clear identification in catalogues and order files.",
    ],
  },
  {
    slug: "ronfit-extra",
    name: "RONFIT EXTRA",
    category: "pain-fever-headache",
    image: extra.url,
    imageAlt: "RONFIT EXTRA pack",
    format: "Pain and fever presentation",
    summary:
      "A step-up presentation in the pain and fever group, carrying the Extra descriptor.",
    details: [
      "Extra variant within the pain and fever group.",
      "Allows a tiered range to be presented from a single brand family.",
    ],
  },
  {
    slug: "ronfit-plus",
    name: "RONFIT PLUS",
    category: "pain-fever-headache",
    image: plus.url,
    imageAlt: "RONFIT PLUS pack",
    format: "Pain and fever presentation",
    summary:
      "A Plus-designated presentation sitting alongside the standard and Extra packs in the pain and fever range.",
    details: [
      "Plus variant within the pain and fever group.",
      "Supports a three-step presentation structure across the category.",
    ],
  },
  {
    slug: "ronfit-plus-effective-relief",
    name: "RONFIT PLUS — Effective Relief",
    category: "pain-fever-headache",
    image: plusEffective.url,
    imageAlt: "RONFIT PLUS Effective Relief pack",
    format: "Pain and fever presentation",
    summary:
      "A Ronfit Plus presentation whose packaging carries the Effective Relief descriptor, as printed on the supplied pack.",
    details: [
      "Pack descriptor follows the wording carried on the supplied packaging.",
      "Approved labelling and documentation are shared with business partners on request.",
    ],
  },
  {
    slug: "ronfit-forte-quick-relief",
    name: "RONFIT FORTE Quick Relief",
    category: "pain-fever-headache",
    image: quickRelief.url,
    imageAlt: "RONFIT FORTE Quick Relief pack",
    format: "Pain and fever presentation",
    summary:
      "A Ronfit Forte presentation carrying the Quick Relief descriptor on pack.",
    details: [
      "Descriptor is taken directly from the supplied packaging.",
      "Sits within the Ronfit Forte pain and fever group.",
    ],
  },

  // Topical Pain Relief
  {
    slug: "ronfit-forte-pain-gel-30g",
    name: "RONFIT FORTE Pain Gel 30g",
    category: "topical-pain-relief",
    image: painGel30.url,
    imageAlt: "RONFIT FORTE Pain Gel 30g tube and carton",
    format: "Gel — 30g",
    summary:
      "The smaller of the two Ronfit Forte pain gel tubes, at 30g. A compact size that suits trial purchase and travel-oriented retail positions.",
    details: [
      "Gel format in a 30g tube, as stated on pack.",
      "Pairs with the 50g tube to give the range two price positions within one presentation.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-forte-pain-gel-50g",
    name: "RONFIT FORTE Pain Gel 50g",
    category: "topical-pain-relief",
    image: painGel50.url,
    imageAlt: "RONFIT FORTE Pain Gel 50g tube and carton",
    format: "Gel — 50g",
    summary:
      "The larger Ronfit Forte pain gel tube at 50g, positioned for repeat users and for markets where larger packs are the norm.",
    details: [
      "Gel format in a 50g tube, as stated on pack.",
      "Larger size supports better value perception against the 30g presentation.",
    ],
  },
  {
    slug: "ronfit-forte-ice-cold-gel-super-strength",
    name: "RONFIT FORTE ICE COLD Gel — Super Strength",
    category: "topical-pain-relief",
    image: iceSuper.url,
    imageAlt: "RONFIT FORTE ICE COLD Gel Super Strength pack",
    format: "Gel",
    summary:
      "The Super Strength presentation within the Ronfit Forte Ice Cold gel line, as designated on the pack.",
    details: [
      "Ice Cold gel line, Super Strength designation.",
      "One of four Ice Cold variants, allowing the line to be presented as a structured sub-range.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-forte-ice-cold-gel-extra-strong",
    name: "RONFIT FORTE ICE COLD Gel — Extra Strong",
    category: "topical-pain-relief",
    image: iceExtra.url,
    imageAlt: "RONFIT FORTE ICE COLD Gel Extra Strong pack",
    format: "Gel",
    summary:
      "The Extra Strong presentation of the Ronfit Forte Ice Cold gel line.",
    details: [
      "Ice Cold gel line, Extra Strong designation.",
      "Variant naming supports a clear step structure across the Ice Cold sub-range.",
    ],
  },
  {
    slug: "ronfit-forte-ice-cold-gel-aloe-vera",
    name: "RONFIT FORTE ICE COLD Gel with Aloe Vera",
    category: "topical-pain-relief",
    image: iceAloe.url,
    imageAlt: "RONFIT FORTE ICE COLD Gel with Aloe Vera pack",
    format: "Gel",
    summary:
      "An Ice Cold gel variant presented with aloe vera, as stated on the pack.",
    details: [
      "Ice Cold gel line, aloe vera variant.",
      "Adds a differentiated option within the Ice Cold sub-range.",
    ],
  },
  {
    slug: "ronfit-forte-ice-cold-gel-menthol",
    name: "RONFIT FORTE ICE COLD Gel with Menthol",
    category: "topical-pain-relief",
    image: iceMenthol.url,
    imageAlt: "RONFIT FORTE ICE COLD Gel with Menthol pack",
    format: "Gel",
    summary:
      "An Ice Cold gel variant presented with menthol, as stated on the pack.",
    details: [
      "Ice Cold gel line, menthol variant.",
      "Completes the four-variant Ice Cold structure alongside the Super Strength, Extra Strong and aloe vera presentations.",
    ],
  },
  {
    slug: "ronfit-forte-spray-instant-pain-relief",
    name: "RONFIT FORTE Spray",
    category: "topical-pain-relief",
    image: spray.url,
    imageAlt: "RONFIT FORTE instant pain relief spray pack",
    format: "Spray",
    summary:
      "A spray presentation that extends the topical range beyond gels into a no-touch application format.",
    details: [
      "Spray format, distinct from the gel and balm presentations in the range.",
      "Descriptor on pack follows the supplied packaging.",
    ],
  },
  {
    slug: "ronfit-forte-cold-pain-relief-balm",
    name: "RONFIT FORTE Cold & Pain Relief Balm",
    category: "topical-pain-relief",
    image: balm.url,
    imageAlt: "RONFIT FORTE cold and pain relief balm jar",
    format: "Balm",
    summary:
      "A balm presentation in a jar format, bridging the topical relief and cold care parts of the portfolio.",
    details: [
      "Balm format in a jar presentation.",
      "Sits across two areas of the portfolio, which supports placement in more than one shelf location.",
    ],
  },

  // Skin & Dermatology
  {
    slug: "ronfit-triple-action-cream",
    name: "RONFIT Triple Action Cream",
    category: "skin-dermatology",
    image: tripleCream.url,
    imageAlt: "RONFIT Triple Action Cream pack",
    format: "Cream",
    summary:
      "A cream presentation in the Ronfit Triple Action line, forming one half of a two-format skin care pairing.",
    details: [
      "Cream format within the Triple Action line.",
      "Presented alongside the Triple Action dusting powder as a coherent two-format range.",
    ],
    featured: true,
  },
  {
    slug: "ronfit-triple-action-dusting-powder",
    name: "RONFIT Triple Action Dusting Powder",
    category: "skin-dermatology",
    image: triplePowder.url,
    imageAlt: "RONFIT Triple Action Dusting Powder pack",
    format: "Dusting powder",
    summary:
      "A dusting powder presentation in the Ronfit Triple Action line, a format with established everyday use in warm and humid markets.",
    details: [
      "Dusting powder format within the Triple Action line.",
      "Completes the Triple Action pairing with the cream presentation.",
    ],
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);

export const featuredProducts = products.filter((p) => p.featured);

export const relatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
