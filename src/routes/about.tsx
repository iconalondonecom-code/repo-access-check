import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">About</main>;
}
