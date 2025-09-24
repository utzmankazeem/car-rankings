import { Link } from "react-router-dom";
import { TrendingUp, Award, DollarSign, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Rankings = () => {
  const rankingCategories = [
    {
      title: "Overall Best",
      icon: Award,
      color: "from-blue-600 to-blue-700",
      rankings: [
        { name: "Best Cars Overall 2025", count: "50 cars", href: "/rankings/best-cars-overall" },
        { name: "Best Family Cars", count: "30 cars", href: "/rankings/best-family-cars" },
        { name: "Best Luxury Cars", count: "25 cars", href: "/rankings/best-luxury-cars" },
        { name: "Best First Cars", count: "20 cars", href: "/rankings/best-first-cars" },
      ],
    },
    {
      title: "By Value",
      icon: DollarSign,
      color: "from-green-600 to-green-700",
      rankings: [
        { name: "Best Value Cars", count: "40 cars", href: "/rankings/best-value" },
        { name: "Best Cars Under $25K", count: "15 cars", href: "/rankings/under-25k" },
        { name: "Best Cars Under $35K", count: "20 cars", href: "/rankings/under-35k" },
        { name: "Best Lease Deals", count: "30 cars", href: "/rankings/best-lease-deals" },
      ],
    },
    {
      title: "By Reliability",
      icon: TrendingUp,
      color: "from-emerald-600 to-emerald-700",
      rankings: [
        { name: "Most Reliable Cars", count: "35 cars", href: "/rankings/most-reliable" },
        { name: "Lowest Maintenance Cost", count: "25 cars", href: "/rankings/low-maintenance" },
        { name: "Best Resale Value", count: "30 cars", href: "/rankings/best-resale-value" },
        { name: "Longest Lasting Cars", count: "20 cars", href: "/rankings/longest-lasting" },
      ],
    },
    {
      title: "By Safety",
      icon: Shield,
      color: "from-red-600 to-red-700",
      rankings: [
        { name: "Safest Cars 2025", count: "40 cars", href: "/rankings/safest-cars" },
        { name: "Top Safety Pick Winners", count: "25 cars", href: "/rankings/top-safety-picks" },
        { name: "Best Family Safety Features", count: "20 cars", href: "/rankings/family-safety" },
        { name: "Advanced Driver Assistance", count: "30 cars", href: "/rankings/driver-assistance" },
      ],
    },
    {
      title: "Electric & Hybrid",
      icon: Zap,
      color: "from-purple-600 to-purple-700",
      rankings: [
        { name: "Best Electric Cars", count: "20 cars", href: "/rankings/best-electric" },
        { name: "Best Hybrid Cars", count: "25 cars", href: "/rankings/best-hybrid" },
        { name: "Longest Range EVs", count: "15 cars", href: "/rankings/longest-range-ev" },
        { name: "Fastest Charging EVs", count: "18 cars", href: "/rankings/fastest-charging" },
      ],
    },
    {
      title: "By Category",
      icon: Users,
      color: "from-orange-600 to-orange-700",
      rankings: [
        { name: "Best SUVs", count: "35 cars", href: "/rankings/best-suvs" },
        { name: "Best Sedans", count: "25 cars", href: "/rankings/best-sedans" },
        { name: "Best Trucks", count: "20 cars", href: "/rankings/best-trucks" },
        { name: "Best Sports Cars", count: "15 cars", href: "/rankings/best-sports-cars" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container-luxury py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-primary-foreground">
                Car Rankings Hub
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
                Discover the best cars in every category with our comprehensive, 
                data-driven rankings based on safety, reliability, value, and performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
                  <div className="text-primary-foreground/70">Ranking Lists</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
                  <div className="text-primary-foreground/70">Cars Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">12</div>
                  <div className="text-primary-foreground/70">Test Criteria</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {rankingCategories.map((category) => (
                <div key={category.title} className="card-luxury p-8">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.rankings.map((ranking) => (
                      <Link
                        key={ranking.name}
                        to={ranking.href}
                        className="block p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                              {ranking.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {ranking.count}
                            </p>
                          </div>
                          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="outline" className="w-full">
                      View All {category.title} Rankings
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                How We Rank Cars
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our rankings are based on comprehensive testing and analysis across 
                12 key criteria, including safety, reliability, performance, and value.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-medium">Expert Testing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-medium">Data Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <div className="font-medium">Real-World Use</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚖️</div>
                  <div className="font-medium">Unbiased Review</div>
                </div>
              </div>
              <Link to="/methodology">
                <Button size="lg" className="btn-luxury">
                  Learn About Our Methodology
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rankings;