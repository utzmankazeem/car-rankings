import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Award, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedRankings = () => {
  const featuredRankings = [
    {
      title: "Best Family SUVs 2025",
      description: "Top-rated SUVs for families based on safety, space, and value",
      topPicks: [
        { name: "Honda Pilot", score: 9.2 },
        { name: "Toyota Highlander", score: 9.0 },
        { name: "Mazda CX-9", score: 8.8 },
      ],
      icon: Award,
      href: "/rankings/best-family-suvs",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Most Reliable Cars",
      description: "Vehicles with the highest reliability ratings and lowest maintenance costs",
      topPicks: [
        { name: "Toyota Camry", score: 9.5 },
        { name: "Honda Accord", score: 9.3 },
        { name: "Lexus ES", score: 9.1 },
      ],
      icon: TrendingUp,
      href: "/rankings/most-reliable",
      gradient: "from-green-600 to-green-700",
    },
    {
      title: "Best Value Trucks",
      description: "Trucks offering the best combination of capability and price",
      topPicks: [
        { name: "Ford F-150", score: 8.9 },
        { name: "Ram 1500", score: 8.7 },
        { name: "Chevrolet Silverado", score: 8.5 },
      ],
      icon: DollarSign,
      href: "/rankings/best-value-trucks",
      gradient: "from-orange-600 to-orange-700",
    },
  ];

  const getScoreClass = (score: number) => {
    if (score >= 9.0) return "score-excellent";
    if (score >= 8.5) return "score-good";
    if (score >= 8.0) return "score-average";
    return "score-poor";
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured Rankings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert team analyzes hundreds of vehicles to bring you the most trusted rankings in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredRankings.map((ranking, index) => (
            <div
              key={ranking.title}
              className="card-luxury p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${ranking.gradient} rounded-2xl mb-6`}>
                <ranking.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                {ranking.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {ranking.description}
              </p>

              <div className="space-y-3 mb-8">
                {ranking.topPicks.map((pick, i) => (
                  <div key={pick.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-6 h-6 bg-muted rounded-full text-sm font-medium">
                        {i + 1}
                      </span>
                      <span className="font-medium">{pick.name}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreClass(pick.score)}`}>
                      {pick.score}
                    </span>
                  </div>
                ))}
              </div>

              <Link to={ranking.href}>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  View Full Ranking
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/rankings">
            <Button size="lg" className="btn-luxury">
              Explore All Rankings
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRankings;