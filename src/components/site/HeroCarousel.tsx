import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { site } from "@/lib/site";
import type { CategorySlug } from "@/lib/catalog";

export interface HeroSlide {
  id: string;
  headline: ReactNode;
  copy: string;
  image: { desktop: string; mobile?: string; alt: string };
  secondaryCta: { label: string; category: CategorySlug | null };
}

const ARROW_BUTTON =
  "absolute top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-transform hover:scale-105";

/**
 * Premium curved-brand hero carousel.
 *
 * Every source image was generated with empty space on the LEFT and the
 * product composition on the RIGHT, specifically so it can run edge-to-edge
 * as a background with copy overlaid on the clean left portion. The image
 * is never cropped: object-fit: contain + object-position: right means the
 * whole photo is always shown, anchored to the right edge, with the frame's
 * own background (which matches the images' light studio backdrop) filling
 * any letterboxed space on the left — exactly where the text sits.
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, i) => {
            const ctas = (
              <>
                <Link
                  to="/business-enquiry"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:text-sm lg:px-6 lg:py-3.5"
                >
                  Send Business Enquiry <ArrowRight className="size-3.5" aria-hidden />
                </Link>
                {slide.secondaryCta.category ? (
                  <Link
                    to="/product-category/$slug"
                    params={{ slug: slide.secondaryCta.category }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background px-5 py-3 text-xs font-semibold text-primary transition-colors hover:bg-accent sm:text-sm lg:px-6 lg:py-3.5"
                  >
                    {slide.secondaryCta.label} <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                ) : (
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background px-5 py-3 text-xs font-semibold text-primary transition-colors hover:bg-accent sm:text-sm lg:px-6 lg:py-3.5"
                  >
                    {slide.secondaryCta.label} <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                )}
              </>
            );

            const arrows = (
              <>
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => api?.scrollPrev()}
                  className={`${ARROW_BUTTON} left-3`}
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => api?.scrollNext()}
                  className={`${ARROW_BUTTON} right-3`}
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </>
            );

            return (
              <CarouselItem key={slide.id} className="pl-0">
                <div aria-hidden={i !== selected}>
                  {/* Mobile: text stacked above the product image (no overlay — the
                      narrow width doesn't leave room to keep both legible). */}
                  <div className="md:hidden">
                    <p className="pill-label">{site.tagline}</p>
                    <p className="mt-5 text-3xl font-semibold leading-[1.06] tracking-tight text-foreground">
                      {slide.headline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {slide.copy}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">{ctas}</div>

                    <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[3rem] bg-background shadow-lift">
                      <img
                        src={slide.image.mobile ?? slide.image.desktop}
                        alt={slide.image.alt}
                        width={1600}
                        height={1200}
                        className="absolute inset-0 size-full object-contain object-right"
                      />
                      {arrows}
                    </div>
                  </div>

                  {/* Tablet/desktop: the image runs full-width as the hero's own
                      background, with copy overlaid on its clean left portion. */}
                  <div className="relative hidden overflow-hidden rounded-[3rem] bg-background shadow-lift md:block md:h-[22rem] lg:h-[28rem] lg:rounded-[4rem] xl:h-[34rem]">
                    <img
                      src={slide.image.desktop}
                      alt={slide.image.alt}
                      width={1600}
                      height={1200}
                      className="absolute inset-0 size-full object-contain object-right [filter:contrast(1.05)_saturate(1.08)]"
                    />
                    {/* Legibility scrim for the text column only — fully opaque
                        behind the copy, then fades to fully transparent well
                        before the product area so the right ~58% of the image
                        stays at 100% opacity with no haze/blur/tint. */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, var(--background) 0%, var(--background) 26%, transparent 40%)",
                      }}
                    />

                    <div className="relative z-10 flex h-full items-center px-8 lg:px-14">
                      <div className="max-w-[38%]">
                        <p className="pill-label">{site.tagline}</p>
                        <p className="mt-4 text-xl font-semibold leading-[1.08] tracking-tight text-foreground lg:mt-5 lg:text-3xl xl:text-4xl">
                          {slide.headline}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground lg:mt-4 lg:text-sm">
                          {slide.copy}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2 lg:mt-6 lg:gap-3">{ctas}</div>
                      </div>
                    </div>

                    {arrows}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selected}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selected ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
