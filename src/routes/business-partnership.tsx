import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-partnership")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">BusinessPartnership</main>;
}
