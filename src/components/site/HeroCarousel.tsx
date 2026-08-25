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

/**
 * Premium curved-brand hero carousel. Every slide shares the same decorative
 * swoosh/frame treatment (see the parent section) so the brand system reads
 * as one identity across slides, not five unrelated banners.
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
          {slides.map((slide, i) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div
                aria-hidden={i !== selected}
                className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.3fr] lg:gap-6"
              >
                <div className="relative z-10">
                  <p className="pill-label">{site.tagline}</p>
                  <p className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
                    {slide.headline}
                  </p>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    {slide.copy}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      to="/business-enquiry"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                    >
                      Send Business Enquiry <ArrowRight className="size-4" aria-hidden />
                    </Link>
                    {slide.secondaryCta.category ? (
                      <Link
                        to="/product-category/$slug"
                        params={{ slug: slide.secondaryCta.category }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        {slide.secondaryCta.label} <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    ) : (
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        {slide.secondaryCta.label} <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-16 -z-10 hidden h-[38rem] w-[38rem] rounded-[50%] bg-primary/90 lg:block"
                  />
                  <div
                    aria-hidden
                    className="absolute -bottom-10 -left-10 -z-10 hidden h-64 w-64 rounded-[50%] bg-charcoal/10 lg:block"
                  />

                  {/* Fixed-size, clipped frame — identical for every slide. object-contain
                      guarantees the full product composition is always visible (no
                      cropping, no stretching); any letterbox space is filled by the
                      frame's own background rather than distorting the image. */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] bg-secondary/50 shadow-lift sm:aspect-[16/11] lg:aspect-auto lg:h-[32rem] lg:rounded-[4rem]">
                    <picture>
                      {slide.image.mobile ? (
                        <source media="(min-width: 768px)" srcSet={slide.image.desktop} />
                      ) : null}
                      <img
                        src={slide.image.mobile ?? slide.image.desktop}
                        alt={slide.image.alt}
                        width={1600}
                        height={1200}
                        className="absolute inset-0 size-full object-contain object-right"
                      />
                    </picture>

                    {/* Arrows: confined to this image frame only, never over the text column. */}
                    <button
                      type="button"
                      aria-label="Previous slide"
                      onClick={() => api?.scrollPrev()}
                      className="absolute left-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-transform hover:scale-105"
                    >
                      <ArrowLeft className="size-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      aria-label="Next slide"
                      onClick={() => api?.scrollNext()}
                      className="absolute right-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-transform hover:scale-105"
                    >
                      <ArrowRight className="size-4" aria-hidden />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
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
