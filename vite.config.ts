// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves this repo from /repo-access-check/, not the domain root.
// The workflow (.github/workflows/deploy.yml) sets GITHUB_PAGES=true for the
// production build; local `npm run dev` / `npm run build` keep base "/" so
// nothing else about local usage changes.
const base = process.env["GITHUB_PAGES"] === "true" ? "/repo-access-check/" : "/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages can only serve static files — there is no server to run
    // TanStack Start's SSR handler at request time. SPA mode instead
    // prerenders every route (crawled from "/") to static HTML at build time
    // and ships a client-side router for hydration/navigation, so no Node
    // server is required at runtime.
    spa: {
      enabled: true,
      prerender: {
        crawlLinks: true,
      },
    },
  },
  // No server runtime target (Cloudflare/Vercel/etc.) — this deploys as a
  // static site, so Nitro's server bundling isn't needed.
  nitro: false,
});
