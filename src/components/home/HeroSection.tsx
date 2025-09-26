// File: src/components/HeroSection.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gen1 from "@/assets/gen1.png"

const HeroSection = () => {
  const quickFinder = [
    { name: "SUVs", href: "/suvs", icon: "🚙" },
    { name: "Sedans", href: "/sedans", icon: "🚗" },
    { name: "Trucks", href: "/trucks", icon: "🛻" },
    { name: "EVs", href: "/evs", icon: "⚡" },
    { name: "Hybrids", href: "/hybrids", icon: "🌱" },
    { name: "Luxury", href: "/luxury", icon: "✨" },
  ];

  const stats = [
    { label: "Cars Parked", value: "500+", icon: TrendingUp },
    { label: "Expert Reviews", value: "1,200+", icon: Award },
    { label: "Monthly Users", value: "2.5M", icon: Users },
  ];

  // --- Carousel logic ---
  const images = [
    "src/assets/hero-image-1.jpg",
    "src/assets/gen1.png",
    "src/assets/gen2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5s delay, feels natural
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Top white nav spacer */}
      <div className="w-full bg-white h-14 shadow-sm z-10" />

      {/* Hero carousel wrapper */}
      <div className="relative h-[520px] sm:h-[520px] md:h-[640px] overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 z-30" />

        {/* Centered hero content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-40">
          <div className="max-w-4xl text-center">
            {/* Example headline (uncomment if needed) */}
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-white">
              Find Your{" "}
              <span className="bg-gradient-to-r from-[#00A3FF] to-[#6C5CE7] bg-clip-text text-transparent">
                Best Car
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/85 max-w-2xl mx-auto">
              Independent, data-driven car rankings and comparisons across all categories.
              Make confident decisions with our expert analysis.
            </p> */}
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="bg-gray-100">
        <div className="max-w-4xl mx-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-black shadow flex items-center justify-center mb-3">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-heading font-bold text-black">{s.value}</div>
                <div className="text-sm text-black mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
