import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Award, DollarSign, Zap, Users, Wrench, Star, BarChart3 } from "lucide-react";

const Methodology = () => {
  const scoringCriteria = [
    {
      category: "Safety",
      weight: 25,
      icon: Shield,
      description: "IIHS Top Safety Pick, NHTSA 5-star rating, advanced safety features",
      subcriteria: [
        "Crash test ratings (40%)",
        "Safety features standard (35%)",
        "Driver assistance technology (25%)"
      ]
    },
    {
      category: "Reliability",
      weight: 20,
      icon: Award,
      description: "Long-term dependability, warranty coverage, repair frequency",
      subcriteria: [
        "Predicted reliability score (50%)",
        "Warranty coverage (25%)",
        "Service network quality (25%)"
      ]
    },
    {
      category: "Value",
      weight: 20,
      icon: DollarSign,
      description: "Price competitiveness, standard features, resale value",
      subcriteria: [
        "Price vs competitors (40%)",
        "Standard features value (35%)",
        "Resale value projection (25%)"
      ]
    },
    {
      category: "Performance",
      weight: 15,
      icon: Zap,
      description: "Acceleration, handling, fuel efficiency, driving dynamics",
      subcriteria: [
        "Acceleration & power (35%)",
        "Fuel economy (35%)",
        "Handling & ride quality (30%)"
      ]
    },
    {
      category: "Comfort",
      weight: 10,
      icon: Users,
      description: "Interior space, seat comfort, noise levels, climate control",
      subcriteria: [
        "Passenger space (40%)",
        "Seat comfort (35%)",
        "Cabin quietness (25%)"
      ]
    },
    {
      category: "Technology",
      weight: 10,
      icon: Star,
      description: "Infotainment, connectivity, user interface, smartphone integration",
      subcriteria: [
        "Infotainment system (45%)",
        "Smartphone integration (30%)",
        "User interface design (25%)"
      ]
    }
  ];

  const testingProcess = [
    {
      step: 1,
      title: "Data Collection",
      description: "We gather comprehensive data from manufacturers, safety agencies, and industry sources."
    },
    {
      step: 2,
      title: "Expert Testing",
      description: "Our team conducts real-world testing including driving dynamics and daily usability."
    },
    {
      step: 3,
      title: "Scoring Algorithm",
      description: "Each vehicle receives scores across our 6 core criteria using standardized metrics."
    },
    {
      step: 4,
      title: "Peer Review",
      description: "Independent experts review our methodology and findings for accuracy and bias."
    },
    {
      step: 5,
      title: "Regular Updates",
      description: "Rankings are updated quarterly with new data, recalls, and market changes."
    }
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
                Our Methodology
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
                How we evaluate and rank cars using data-driven analysis, 
                expert testing, and comprehensive scoring across key criteria.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  Comprehensive Evaluation Framework
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our rankings combine quantitative data analysis with real-world testing to provide 
                  unbiased, comprehensive vehicle evaluations. Each car is scored across six core 
                  criteria weighted by importance to most buyers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Data-Driven</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Objective analysis using standardized metrics and industry benchmarks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Expert Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Real-world evaluation by automotive professionals and engineers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Unbiased</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Independent evaluation with no manufacturer influence or paid rankings.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scoring Criteria */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                Scoring Criteria & Weights
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {scoringCriteria.map((criteria) => (
                  <Card key={criteria.category} className="card-luxury">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <criteria.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{criteria.category}</CardTitle>
                            <Badge variant="secondary">{criteria.weight}% Weight</Badge>
                          </div>
                        </div>
                      </div>
                      <Progress value={criteria.weight * 4} className="mb-4" />
                      <p className="text-muted-foreground">{criteria.description}</p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Evaluation Components:</h4>
                      <ul className="space-y-2">
                        {criteria.subcriteria.map((sub, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                Our Testing Process
              </h2>

              <div className="space-y-8">
                {testingProcess.map((process, index) => (
                  <div key={process.step} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {process.step}
                      </div>
                      {index < testingProcess.length - 1 && (
                        <div className="w-px h-12 bg-border ml-6 mt-4" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8">
                Transparency & Independence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Independence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We maintain editorial independence from all automotive manufacturers. 
                      Our rankings are never influenced by advertising relationships or 
                      financial incentives.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Open Methodology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our complete scoring methodology is publicly available. We believe 
                      in transparency about how we evaluate vehicles and welcome feedback 
                      on our approach.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;