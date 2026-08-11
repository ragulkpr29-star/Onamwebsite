import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { EventSelector } from "@/components/EventSelector";
import { getEventCounts } from "@/lib/registration.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ONAM 2K26 — Kongu Engineering College Cultural Club",
      },
      {
        name: "description",
        content:
          "Celebrate ONAM 2K26 at Kongu Engineering College. Pookkolam, Fashion Parade, Tug of War, Editing and Dual Dance — register your team today.",
      },
      {
        property: "og:title",
        content: "ONAM 2K26 — Kongu Engineering College",
      },
      {
        property: "og:description",
        content:
          "Onam celebrations at KEC. Five events, one festival. Register your team for ONAM 2K26.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
  const fetchCounts = useServerFn(getEventCounts);

  const { data: counts } = useQuery({
    queryKey: ["eventCounts"],
    queryFn: () => fetchCounts(),
    initialData: {} as Record<string, number>,
  });

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />

        <EventSelector counts={counts} />
      </main>

      <Footer />
    </div>
  );
}