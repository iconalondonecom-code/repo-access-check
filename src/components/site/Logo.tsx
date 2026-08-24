import { Link } from "@tanstack/react-router";
import logo from "@/assets/products/ronfit-forte-logo.png.asset.json";
import { site } from "@/lib/site";

/**
 * Brand mark only — no text beside the logo.
 * `size` controls the rendered height so header and footer can differ.
 */
export function Logo({
  className = "",
  size = "header",
}: {
  className?: string;
  size?: "header" | "footer";
}) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label={`${site.name} — home`}>
      <img
        src={logo.url}
        alt="Ronfit Forte logo"
        width={320}
        height={96}
        className={
          size === "header"
            ? "h-12 w-auto md:h-16 lg:h-[4.25rem]"
            : "h-12 w-auto md:h-14"
        }
      />
    </Link>
  );
}
