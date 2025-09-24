import { Link } from "react-router-dom";
import { Search, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    { label: "Cars Ranked", value: "500+", icon: TrendingUp },
    { label: "Expert Reviews", value: "1,200+", icon: Award },
    { label: "Monthly Users", value: "2.5M", icon: Users },
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container-luxury relative z-10">
        <div className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Find Your{" "}
                <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                  Best Car
                </span>
              </h1>
              {/* <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                Independent, data-driven car rankings and comparisons across all categories. 
                Make confident decisions with our expert analysis.
              </p> */}
            </div>

            {/* Search Bar */}
            {/* <div className="animate-fade-in-up max-w-2xl mx-auto mb-12" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input
                  placeholder="Search by make, model, or category..."
                  className="pl-16 pr-6 py-6 text-lg bg-background/95 backdrop-blur-sm border-0 rounded-2xl shadow-luxury text-foreground placeholder:text-muted-foreground"
                />
                <Button className="absolute right-2 top-2 bottom-2 px-8 btn-luxury">
                  Search
                </Button>
              </div>
            </div> */}

            {/* Quick Finder */}
            <div className="animate-fade-in-up mb-16" style={{animationDelay: '0.4s'}}>
              <p className="text-primary-foreground/70 mb-6">Browse by category:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {quickFinder.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="group bg-background/10 backdrop-blur-sm hover:bg-background/20 border border-primary-foreground/20 rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-primary-foreground font-medium">
                        {category.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;