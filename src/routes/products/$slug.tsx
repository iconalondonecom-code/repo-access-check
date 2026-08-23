import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$slug")({
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  return <main className="container-page py-24">{slug}</main>;
}
