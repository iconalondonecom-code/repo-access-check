import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">Privacy</main>;
}
