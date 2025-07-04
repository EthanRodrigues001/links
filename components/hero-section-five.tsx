import React from "react";
import { Link } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <MistKitLogo className="mx-auto" />
          <h1 className="mx-auto mt-16 max-w-xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Wisplabs Link Directory
          </h1>

          <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-base sm:text-lg md:text-xl">
            A curated list of Wisplabs domains, tools, and resources — all in
            one place.
          </p>
        </div>
      </div>
    </section>
  );
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "border-background bg-linear-to-b rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ring-black/10",
      className
    )}
  >
    <Link className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
    <Link className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    <div className="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"></div>
  </div>
);
