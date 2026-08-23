import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-enquiry")({
  component: Page,
});

function Page() {
  return <main className="container-page py-24">BusinessEnquiry</main>;
}
