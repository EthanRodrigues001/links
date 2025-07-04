import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const websites = [
  {
    id: 1,
    name: "LYX UI",
    displayUrl: "lyxui.wisplabs.xyz",
    description:
      "A curated collection of beautifully crafted, copy-and-paste components—accessible, customizable, and entirely open source.",
    url: "https://lyxui.wisplabs.xyz",
    image: "/lyxui.png",
    category: "UI Library",
  },
  {
    id: 2,
    name: "Blingo",
    displayUrl: "blingo.wisplabs.xyz",
    description:
      "AI-powered project planner that generates your roadmap, file structure, documentation, and complexity breakdown — in seconds.",
    url: "https://blingo.wisplabs.xyz/",
    image: "/blingo.png",
    category: "AI Tool",
  },
  {
    id: 3,
    name: "Wisplabs",
    displayUrl: "wisplabs.xyz",
    description:
      "Wisplabs creates fast, modern websites built to scale — with global support, real-time tracking, and seamless cross-platform performance.",
    url: "https://wisplabs.xyz",
    image: "/wisplabs.png",
    category: "Company",
  },
];

const LinksSection = () => {
  return (
    <section className="pt-0 py-20 mx-auto max-w-7xl px-6 md:px-12">
      <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-16">
        {websites.map((website) => (
          <Link
            key={website.id}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden p-6 group-hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={website.image || "/placeholder.svg"}
                    alt={website.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      {website.category}
                    </Badge>
                  </div>
                </div>
              </Card>
              <div className="sm:max-w-lg">
                <h3 className="text-foreground text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {website.name} ·{" "}
                  <span className="text-muted-foreground">
                    {website.displayUrl}
                  </span>
                </h3>
                <p className="text-muted-foreground my-4 text-base sm:text-lg md:text-xl">
                  {website.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
