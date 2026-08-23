import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">Products</main>;
}
