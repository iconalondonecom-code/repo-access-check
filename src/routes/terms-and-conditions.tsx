import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">Terms</main>;
}
