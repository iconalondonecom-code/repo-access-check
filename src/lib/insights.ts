/**
 * Ronfit Forte Insights (editorial / SEO articles).
 *
 * WordPress portability note: each entry maps to a standard `post` record —
 * title, slug, date, excerpt, featured image and body paragraphs.
 *
 * Content rule: these are general industry commentary pieces. They contain no
 * medical claims, no certifications, no market statistics and no references to
 * territories or facilities.
 */

import {
  globalBg as globalImg,
  partnershipBg as partnershipImg,
  lifeStages as lifeStagesImg,
  brandStory as brandStoryImg,
  groupBg as groupImg,
  coldImg,
  coughImg,
  infantImg,
  paediatricImg,
  topicalImg,
  dermaImg,
  painImg,
} from "@/lib/assets";

export interface Insight {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  topic: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "what-distributors-look-for-in-a-healthcare-brand",
    title: "What Distributors Really Look For in a Healthcare Brand Partner",
    date: "2026-08-04",
    dateLabel: "4 August 2026",
    topic: "Distribution",
    image: partnershipImg.url,
    imageAlt: "Healthcare business partnership discussion visual",
    excerpt:
      "Range clarity, consistent packaging and a responsive counterpart matter more to distributors than a long product list.",
    seoTitle: "What Distributors Look For in a Healthcare Brand Partner",
    seoDescription:
      "How distributors evaluate a healthcare brand: portfolio clarity, packaging consistency, category structure and responsive communication.",
    body: [
      "Distributors assess new healthcare brands far more quickly than most suppliers expect. Long before commercial terms are discussed, a buyer is asking a simpler question: can I explain this range to my own sales team in five minutes? A portfolio that answers yes has already cleared the first hurdle.",
      "Clarity begins with structure. When products are grouped into recognisable therapeutic categories, a distributor can map them onto the shelf sets and buyer conversations they already have. When they are presented as a flat list, every product becomes a separate argument to make.",
      "Packaging consistency is the second signal. A range that shares a visual system reads as a brand, not a collection of unrelated items. That consistency also reduces friction downstream — pharmacy staff recognise the family, and retail buyers can see how a block of shelf space would look.",
      "The third factor is responsiveness. Territory requirements, documentation and availability differ from market to market, so distributors expect to have a working conversation rather than read a claim on a website. A single, named point of contact who responds with market-relevant information is often the deciding advantage.",
      "None of this requires exaggeration. A brand that presents its range honestly, keeps its category logic tight and answers questions promptly gives a distributor exactly what they need to make an internal case.",
    ],
  },
  {
    slug: "structuring-a-healthcare-portfolio-by-category",
    title: "Structuring a Healthcare Portfolio by Category, Not by Product Count",
    date: "2026-07-28",
    dateLabel: "28 July 2026",
    topic: "Portfolio strategy",
    image: painImg.url,
    imageAlt: "Ronfit pain, fever and headache category products",
    excerpt:
      "Category architecture turns a product list into a portfolio a buyer can evaluate and merchandise.",
    seoTitle: "Structuring a Healthcare Portfolio by Category",
    seoDescription:
      "Why category architecture — not product count — determines how quickly healthcare buyers understand and adopt a portfolio.",
    body: [
      "Suppliers often lead with a number: how many products are in the range. Buyers rarely care. What they need to know is which needs the range covers and how those needs are grouped, because grouping is what determines how the products will be bought, stocked and sold.",
      "A category-first structure gives each product a role. Instead of competing for attention inside one long list, a syrup, a tablet and a topical gel each sit within the therapeutic area a buyer already plans around. That makes gaps visible too, which is useful in a negotiation rather than embarrassing.",
      "Category structure also improves internal operations. Forecasting, training and catalogue production all become easier when a range has stable, meaningful groupings that do not change every season.",
      "For international conversations there is an added benefit: categories translate. Terminology and requirements vary, but the underlying grouping of cold and flu, cough, pain relief or topical care is recognisable almost everywhere, which shortens the explanation a partner has to give internally.",
      "The practical test is simple. If a new team member can look at the portfolio and correctly assign an unfamiliar product to a category on their first attempt, the architecture is doing its job.",
    ],
  },
  {
    slug: "why-packaging-consistency-builds-brand-trust",
    title: "Why Packaging Consistency Builds Trust Faster Than Advertising",
    date: "2026-07-19",
    dateLabel: "19 July 2026",
    topic: "Brand",
    image: brandStoryImg.url,
    imageAlt: "Ronfit Forte brand packaging system visual",
    excerpt:
      "A shared pack architecture makes a range recognisable on shelf and easier for retail staff to recommend.",
    seoTitle: "Why Packaging Consistency Builds Healthcare Brand Trust",
    seoDescription:
      "How a consistent pack architecture helps healthcare ranges perform on shelf and simplifies retail staff recommendations.",
    body: [
      "In healthcare retail, most purchase decisions happen in front of a shelf, often with a pharmacist or shop assistant guiding the choice. In that moment, recognition matters more than recall of any campaign.",
      "A consistent pack architecture — shared logo placement, colour discipline, a predictable position for the product descriptor — lets a customer identify a family of products instantly. It also lets them navigate within the family, which is exactly what a stage-based or strength-based range needs.",
      "For retail staff, consistency reduces the risk of the wrong recommendation. When the differentiating element is always in the same place on the pack, staff can point to it confidently rather than reading the whole front panel each time.",
      "For distributors, consistency has commercial value: a coherent range can be presented as a block, which is easier to justify in a planogram conversation than several unrelated items competing for individual facings.",
      "Consistency is not sameness. Within a shared system, each category can carry its own accent so the range remains navigable while still reading as one brand.",
    ],
  },
  {
    slug: "cold-and-flu-category-planning-for-buyers",
    title: "Cold and Flu Category Planning: What Buyers Prepare For",
    date: "2026-07-08",
    dateLabel: "8 July 2026",
    topic: "Category insight",
    image: coldImg.url,
    imageAlt: "Ronfit cold, flu and nasal care category products",
    excerpt:
      "Seasonal categories reward suppliers who can be discussed early and planned around with confidence.",
    seoTitle: "Cold and Flu Category Planning for Healthcare Buyers",
    seoDescription:
      "How healthcare buyers plan seasonal cold and flu ranges, and what suppliers can do to support early planning conversations.",
    body: [
      "Cold and flu is one of the most planned categories in healthcare retail. Buyers commit to ranges well ahead of demand, which means supplier conversations happen months before the products move.",
      "That timing shapes what a buyer values. Early clarity on which formats exist within a range — tablets, syrups, inhalers, lozenges — is more useful than detail delivered late, because format mix determines how much shelf space the category will need.",
      "Format breadth matters for another reason: households rarely need a single presentation. A range that covers different formats supports a fuller basket without asking the buyer to source from multiple suppliers.",
      "Suppliers can help by being explicit about what is and is not confirmed for a given territory. Buyers plan around certainty; ambiguity gets deferred to the following season.",
      "The categories that perform best are usually the ones where supplier and buyer agreed the shape of the range early and then simply executed it.",
    ],
  },
  {
    slug: "cough-and-throat-care-format-mix",
    title: "Cough and Throat Care: Why Format Mix Drives the Category",
    date: "2026-06-26",
    dateLabel: "26 June 2026",
    topic: "Category insight",
    image: coughImg.url,
    imageAlt: "Ronfit cough and throat care category products",
    excerpt:
      "Syrups, lozenges and adult-strength variants each serve a different shopper moment within one category.",
    seoTitle: "Cough and Throat Care: Format Mix in a B2B Portfolio",
    seoDescription:
      "Why format variety across syrups, lozenges and adult variants shapes how cough and throat care ranges are stocked and sold.",
    body: [
      "Cough and throat care looks like a single category on a shelf plan, but shoppers approach it with quite different needs: something for a child at night, something portable for a working day, something stronger for an adult.",
      "That is why format mix, rather than product count, tends to define how well the category performs. A range that offers syrups alongside lozenges covers more of those moments without duplicating the same presentation.",
      "For distributors, a mixed-format range simplifies the order file. One supplier conversation can populate several shelf positions, which reduces administrative overhead and improves the commercial case for taking the range on.",
      "Presentation should make the differences obvious. Where a range includes both junior and adult variants, the distinction belongs on the front of pack in a fixed position so retail staff never have to interpret it.",
      "Handled well, a cough and throat range becomes a compact, self-explanatory block that buyers can plan and staff can sell.",
    ],
  },
  {
    slug: "infant-nutrition-stage-based-ranges",
    title: "Stage-Based Infant Nutrition Ranges and Why Buyers Prefer Them",
    date: "2026-06-14",
    dateLabel: "14 June 2026",
    topic: "Category insight",
    image: infantImg.url,
    imageAlt: "Ronfit infant nutrition stage-based product range",
    excerpt:
      "Stage structure gives each pack a clear place on shelf and makes forecasting and staff training simpler.",
    seoTitle: "Stage-Based Infant Nutrition Ranges for Distributors",
    seoDescription:
      "How stage-structured infant nutrition ranges support clearer merchandising, simpler forecasting and confident retail recommendations.",
    body: [
      "Infant nutrition is scrutinised closely by everyone in the chain — importers, pharmacists and parents. Clarity is therefore not a design preference but an operational requirement.",
      "A stage-based structure delivers that clarity. Each pack corresponds to a defined feeding period, occupies its own place in the sequence and can be discussed as a distinct product record rather than a variant of something else.",
      "For buyers, stage structure improves forecasting. Demand behaves differently across stages, and separate records make that visible instead of hiding it inside a single aggregate figure.",
      "For retail teams, the stage number is the whole conversation. When it is the dominant element on the pack, staff can guide a parent to the right product without needing detailed product training.",
      "Merchandised as a progression, a stage range also communicates something useful about the brand: that it intends to accompany a customer over time rather than sell a single item.",
    ],
  },
  {
    slug: "paediatric-care-presentation-standards",
    title: "Paediatric Ranges: Presentation Standards That Reassure Buyers",
    date: "2026-06-02",
    dateLabel: "2 June 2026",
    topic: "Category insight",
    image: paediatricImg.url,
    imageAlt: "Ronfit paediatric care category products",
    excerpt:
      "In paediatric care, unambiguous pack presentation is the feature buyers examine most closely.",
    seoTitle: "Paediatric Healthcare Ranges: Presentation Standards",
    seoDescription:
      "Why unambiguous packaging and clear junior designations matter most when buyers evaluate paediatric healthcare ranges.",
    body: [
      "Paediatric products carry an additional layer of responsibility, and buyers know it. When a range is reviewed, the first thing examined is whether the packaging leaves any room for misinterpretation.",
      "Clear designation is the core requirement. Where a product is intended for children, that should be legible at a glance and positioned consistently across every pack in the range.",
      "Consistency across the family also helps avoid the most common retail error: reaching for the adult presentation of a familiar brand. A predictable visual difference between junior and adult variants reduces that risk materially.",
      "Buyers also value restraint in the claims a supplier makes. Territory-specific requirements govern what may be stated, so a range that presents itself factually and leaves regulatory detail to the partner conversation is easier to take forward.",
      "Presentation discipline, in this category more than any other, is what earns a second meeting.",
    ],
  },
  {
    slug: "topical-pain-relief-in-modern-trade",
    title: "Topical Pain Relief and the Rise of Modern Trade Shelves",
    date: "2026-05-21",
    dateLabel: "21 May 2026",
    topic: "Category insight",
    image: topicalImg.url,
    imageAlt: "Ronfit topical pain relief category products",
    excerpt:
      "Gels, sprays and balms sit comfortably in both pharmacy and modern trade, provided the range is coherent.",
    seoTitle: "Topical Pain Relief in Pharmacy and Modern Trade",
    seoDescription:
      "How coherent topical pain relief ranges — gels, sprays and balms — perform across pharmacy and modern trade channels.",
    body: [
      "Topical pain relief has moved well beyond the pharmacy counter. Gels, sprays and balms now appear in supermarkets, convenience formats and sports retail, which widens the buyer audience for any supplier in the category.",
      "That breadth rewards a coherent range. When variants share a pack system and differ in a clearly labelled way — strength, format, added ingredient — the range can be listed in several channels without confusing shoppers.",
      "Format also affects placement. Sprays and gels suit different display fixtures, so a range that includes both gives a buyer more options when shelf space is constrained.",
      "For distributors working across channels, the practical benefit is consolidation: one range, one supplier relationship, multiple listings.",
      "The risk to avoid is variant sprawl. A range where the differences are not immediately visible on pack becomes hard to merchandise, however strong the individual products are.",
    ],
  },
  {
    slug: "dermatology-adjacent-daily-care-ranges",
    title: "Daily Skin Care Ranges Inside a Healthcare Portfolio",
    date: "2026-05-09",
    dateLabel: "9 May 2026",
    topic: "Category insight",
    image: dermaImg.url,
    imageAlt: "Ronfit skin and dermatology category products",
    excerpt:
      "Everyday skin and dermatology products extend a healthcare portfolio into repeat-purchase territory.",
    seoTitle: "Daily Skin Care Ranges in a Healthcare Portfolio",
    seoDescription:
      "Why everyday skin and dermatology products complement a healthcare portfolio and support repeat purchase behaviour.",
    body: [
      "Most healthcare purchases are episodic: a customer buys when a symptom appears. Daily care products behave differently, generating repeat purchase without a triggering event.",
      "That makes a skin and dermatology block a useful complement to symptom-led categories. It smooths demand across the year and gives a distributor something to sell between seasonal peaks.",
      "Presentation matters here too. Daily care products are judged partly on how they look in a bathroom cabinet, so pack quality carries more weight than in strictly functional categories.",
      "Keeping these products inside the same brand system is the key decision. A daily care range that visually belongs to the healthcare portfolio borrows its credibility instead of starting from zero.",
      "For buyers, the appeal is straightforward: an additional, steadier line item within a supplier relationship they have already established.",
    ],
  },
  {
    slug: "preparing-for-a-first-b2b-healthcare-enquiry",
    title: "Preparing for a First B2B Healthcare Enquiry",
    date: "2026-04-27",
    dateLabel: "27 April 2026",
    topic: "Partnership",
    image: globalImg.url,
    imageAlt: "Global healthcare business network visual",
    excerpt:
      "The most productive first enquiries state the market, the channel and the categories of interest.",
    seoTitle: "Preparing a First B2B Healthcare Enquiry",
    seoDescription:
      "What to include in a first B2B healthcare enquiry so a supplier can respond with information relevant to your market and channel.",
    body: [
      "A first enquiry sets the pace of everything that follows. When it contains the essentials, a supplier can respond substantively rather than with a list of clarifying questions.",
      "Three details carry most of the weight: the market you operate in, the channel you serve, and the categories you are interested in. Together they let a supplier judge fit immediately.",
      "It also helps to state your role clearly — distributor, importer, wholesaler, pharmacy network, retail chain — because the practical next steps differ for each.",
      "Volume expectations, even as a rough indication, are useful but rarely required at the first exchange. Fit comes first; quantities follow.",
      "Suppliers that reply with territory-relevant information rather than generic brochures are usually the ones worth continuing with. Making that possible starts with a well-formed enquiry.",
    ],
  },
  {
    slug: "healthcare-across-life-stages",
    title: "Building a Portfolio That Follows Customers Across Life Stages",
    date: "2026-04-15",
    dateLabel: "15 April 2026",
    topic: "Portfolio strategy",
    image: lifeStagesImg.url,
    imageAlt: "Healthcare across life stages visual",
    excerpt:
      "A portfolio spanning infancy to adulthood keeps a brand relevant to the same household over decades.",
    seoTitle: "Healthcare Portfolios Across Life Stages",
    seoDescription:
      "How a portfolio spanning infant, paediatric and adult categories keeps a healthcare brand relevant to the same household over time.",
    body: [
      "Households do not buy by category; they buy by need, and needs change with age. A portfolio that follows those changes stays relevant to the same customer far longer than a single-category range.",
      "The commercial logic is familiarity. A parent who trusted a brand for infant nutrition has a reason to look for it again in paediatric care, and later in adult pain relief.",
      "For distributors, life-stage coverage means a broader conversation with the same retail buyer. One supplier relationship can support several shelf sets rather than one.",
      "The requirement is that the connection is visible. If the packs across life stages do not read as one family, the familiarity advantage disappears.",
      "Coverage should not be confused with completeness. A portfolio needs enough presence in each stage to be credible, not every possible product.",
    ],
  },
  {
    slug: "working-with-a-brand-backed-by-a-group",
    title: "Working With a Brand Backed by a Larger Group",
    date: "2026-04-02",
    dateLabel: "2 April 2026",
    topic: "Partnership",
    image: groupImg.url,
    imageAlt: "Ronak Group corporate visual",
    excerpt:
      "Group backing tends to mean settled processes and a single accountable point of contact for partners.",
    seoTitle: "Working With a Healthcare Brand Backed by a Group",
    seoDescription:
      "What group backing means in practice for healthcare distributors and importers: settled processes and clear accountability.",
    body: [
      "When a healthcare brand sits within a larger group, partners often assume the benefit is scale. In practice the more useful benefit is process.",
      "Established groups tend to have settled ways of handling documentation requests, brand assets and commercial correspondence. For a distributor, that predictability is worth more than any headline claim.",
      "Accountability is the second advantage. A brand within a group usually has a defined owner for partner relationships, so enquiries do not circulate without resolution.",
      "It also affects how a brand is presented. Group-backed brands generally maintain a consistent identity across markets, which reduces the work a local partner has to do to make materials usable.",
      "For Ronfit Forte, this is the practical shape of the relationship: a focused healthcare portfolio, presented consistently, with the process discipline of Ronak Group behind it.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

export const relatedInsights = (slug: string, limit = 3) =>
  insights.filter((i) => i.slug !== slug).slice(0, limit);
