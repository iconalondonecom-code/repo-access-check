import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">Contact</main>;
}
