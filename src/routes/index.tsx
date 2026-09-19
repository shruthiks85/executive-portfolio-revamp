import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shruthi Sridhara — Senior Engineering Leader" },
      {
        name: "description",
        content:
          "Senior engineering leader with 18+ years of experience building high-performing teams and delivering complex global technology programmes.",
      },
      { property: "og:title", content: "Shruthi Sridhara — Senior Engineering Leader" },
      {
        property: "og:description",
        content: "Building teams that ship complex things reliably. Engineering leadership, global programmes, and technology transformation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
