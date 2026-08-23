import { Link } from "@tanstack/react-router";
import logo from "@/assets/products/ronfit-forte-logo.png.asset.json";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  showTagline = true,
  invert = false,
}: {
  className?: string;
  showTagline?: boolean;
  invert?: boolean;
}) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label={`${site.name} — home`}>
      <img
        src={logo.url}
        alt="Ronfit Forte logo"
        width={160}
        height={48}
        className="h-9 w-auto md:h-10"
      />
      {showTagline ? (
        <span
          className={`hidden text-[0.6rem] font-medium uppercase leading-tight tracking-[0.14em] lg:block ${
            invert ? "text-charcoal-foreground/60" : "text-muted-foreground"
          }`}
        >
          A Brand of
          <br />
          Ronak Group
        </span>
      ) : null}
    </Link>
  );
}
