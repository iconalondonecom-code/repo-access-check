// Runs after `vite build`. TanStack Start's SPA prerender writes a generic
// app shell to dist/client/_shell.html (used as the client-side fallback for
// any route not individually prerendered) but does not emit it as index.html
// or 404.html. GitHub Pages needs both:
//   - index.html so the site root has something to serve
//   - 404.html so a direct load/refresh of a route GitHub Pages doesn't have
//     a matching file for still serves the app shell instead of a bare 404,
//     letting the client-side router take over and render the right page.
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const clientDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)), "dist/client");
const shellPath = path.join(clientDir, "_shell.html");

if (!existsSync(shellPath)) {
  throw new Error(
    `Expected the prerendered SPA shell at ${shellPath} but it was missing. ` +
      "Check that tanstackStart.spa.enabled is still set in vite.config.ts.",
  );
}

copyFileSync(shellPath, path.join(clientDir, "index.html"));
copyFileSync(shellPath, path.join(clientDir, "404.html"));

console.log("Copied dist/client/_shell.html -> index.html and 404.html");
