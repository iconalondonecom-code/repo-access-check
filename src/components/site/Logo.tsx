import { Link } from "@tanstack/react-router";
import { logo } from "@/lib/assets";
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
        width={480}
        height={144}
        className={
          size === "header"
            ? "h-28 w-auto sm:h-32 md:h-36 lg:h-40"
            : "h-20 w-auto md:h-24"
        }
      />
    </Link>
  );
}
