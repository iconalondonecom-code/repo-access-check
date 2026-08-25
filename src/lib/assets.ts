/**
 * Local public asset paths for product and website imagery.
 *
 * These replace the old Lovable-hosted `.asset.json` references (which pointed
 * at `/__l5e/assets-v1/...`, a path that only resolves inside Lovable's own
 * preview/hosting and 404s everywhere else). The real image files now live in
 * `public/ronfit-forte-products/`.
 *
 * Paths are prefixed with `import.meta.env.BASE_URL` (Vite's configured base,
 * e.g. `/repo-access-check/` on GitHub Pages) so they keep resolving when the
 * site is served from a subpath instead of the domain root.
 */

const PRODUCTS = "ronfit-forte-products/";
const WEBSITE = `${PRODUCTS}website-images/`;

const publicAsset = (path: string) => encodeURI(`${import.meta.env.BASE_URL}${path}`);

// ---------------------------------------------------------------------------
// Website / category imagery
// ---------------------------------------------------------------------------

export const infantImg = { url: publicAsset(`${WEBSITE}ronfit-infant-nutrition-category.png`) };
export const paediatricImg = { url: publicAsset(`${WEBSITE}ronfit-paediatric-care-category.png`) };
export const coldImg = { url: publicAsset(`${WEBSITE}ronfit-cold-flu-nasal-care-category.png`) };
export const coughImg = { url: publicAsset(`${WEBSITE}ronfit-cough-throat-care-category.png`) };
export const painImg = { url: publicAsset(`${WEBSITE}ronfit-pain-fever-headache-category.png`) };
export const topicalImg = { url: publicAsset(`${WEBSITE}ronfit-topical-pain-relief-category.png`) };
export const dermaImg = { url: publicAsset(`${WEBSITE}ronfit-skin-dermatology-category.png`) };

export const hero = { url: publicAsset(`${WEBSITE}ronfit-forte-homepage-hero.png`) };
export const mobileHero = { url: publicAsset(`${WEBSITE}ronfit-forte-mobile-hero.png`) };
export const lifeStages = { url: publicAsset(`${WEBSITE}ronfit-healthcare-life-stages.png`) };
export const globalBg = { url: publicAsset(`${WEBSITE}ronfit-global-business-background.png`) };
export const groupBg = { url: publicAsset(`${WEBSITE}ronak-group-section-background.png`) };
export const partnershipBg = { url: publicAsset(`${WEBSITE}ronfit-business-partnership-background.png`) };
export const brandStory = { url: publicAsset(`${WEBSITE}ronfit-forte-brand-story.png`) };
export const ogImage = { url: publicAsset(`${WEBSITE}ronfit-forte-og-image.png`) };

export const logo = { url: publicAsset(`${PRODUCTS}ronfit-forte-logo.png`) };
export const groupLogo = { url: publicAsset(`${PRODUCTS}ronak-group-logo.png`) };

// ---------------------------------------------------------------------------
// Product imagery
// ---------------------------------------------------------------------------

export const babyS1 = { url: publicAsset(`${PRODUCTS}ronfit-baby-stage-1--1-6 months.png`) };
export const babyS2 = { url: publicAsset(`${PRODUCTS}ronfit-baby-stage-2--6-12 months.png`) };
export const babyS3 = { url: publicAsset(`${PRODUCTS}ronfit-baby-stage-3--12-months-&-onwards.png`) };
export const junior = { url: publicAsset(`${PRODUCTS}ronfit-junior.png`) };
export const cJuniorSyrup = { url: publicAsset(`${PRODUCTS}ronfit-c-junior-syrup.png`) };
export const coldPSyrup = { url: publicAsset(`${PRODUCTS}ronfit-cold-p-syrup.png`) };
export const cold = { url: publicAsset(`${PRODUCTS}ronfit-cold.png`) };
export const coldExtra = { url: publicAsset(`${PRODUCTS}ronfit-cold-extra.png`) };
export const coldW = { url: publicAsset(`${PRODUCTS}ronfit-cold-w.png`) };
export const coldDSyrup = { url: publicAsset(`${PRODUCTS}ronfit-cold-d-syrup.png`) };
export const coldForteSyrup = { url: publicAsset(`${PRODUCTS}ronfit-cold-forte-syrup.png`) };
export const coldForteInhaler = { url: publicAsset(`${PRODUCTS}ronfit-cold-forte-inhaler.png`) };
export const coldFluNight = { url: publicAsset(`${PRODUCTS}ronfit-cold-flu-night-tablets.png`) };
export const coldInfluenza = {
  url: publicAsset(`${PRODUCTS}ronfit-cold-for-symptomatic-relief-of-influenza.png`),
};
export const lozenges = { url: publicAsset(`${PRODUCTS}ronfit-cold-&-flu-lozenges.png`) };
export const cSyrup = { url: publicAsset(`${PRODUCTS}ronfit-c-syrup.png`) };
export const cForte = { url: publicAsset(`${PRODUCTS}ronfit-c-forte.png`) };
export const forte = { url: publicAsset(`${PRODUCTS}ronfit-forte.png`) };
export const painFeverTablet = {
  url: publicAsset(`${PRODUCTS}ronfit-forte-pain-fever-heache-tablet.png`),
};
export const par = { url: publicAsset(`${PRODUCTS}ronfit-par.png`) };
export const extra = { url: publicAsset(`${PRODUCTS}ronfit-extra.png`) };
export const plus = { url: publicAsset(`${PRODUCTS}ronfit-plus.png`) };
export const plusEffective = { url: publicAsset(`${PRODUCTS}ronfit-plus-effective-relief.png`) };
export const quickRelief = { url: publicAsset(`${PRODUCTS}ronfit-forte-quick-relief.png`) };
export const painGel30 = { url: publicAsset(`${PRODUCTS}ronfit-forte-pain-gel-30g.png`) };
export const painGel50 = { url: publicAsset(`${PRODUCTS}ronfit-forte-pain-gel-50g.png`) };
export const iceSuper = { url: publicAsset(`${PRODUCTS}ronfit-forte-ice-cold gel-super-strength.png`) };
export const iceExtra = { url: publicAsset(`${PRODUCTS}ronfit-forte-ice-cold-gel-Extra-strong.png`) };
export const iceAloe = { url: publicAsset(`${PRODUCTS}ronfit-forte-ice-cold-gel-with-aloevera.png`) };
export const iceMenthol = { url: publicAsset(`${PRODUCTS}ronfit-forte-ice-cold-gel-with-menthol.png`) };
export const spray = { url: publicAsset(`${PRODUCTS}ronfit-forte-spray-instant-pain-relief.png`) };
export const balm = { url: publicAsset(`${PRODUCTS}ronfit-forte-cold-&-pain-relief-balm.png`) };
export const tripleCream = { url: publicAsset(`${PRODUCTS}ronfit-triple-action-cream.png`) };
export const triplePowder = {
  url: publicAsset(`${PRODUCTS}ronfit-triple-action-dusting-powder.png`),
};
