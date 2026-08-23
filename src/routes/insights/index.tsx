import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">Insights</main>;
}
