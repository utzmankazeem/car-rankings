import { useState } from "react";
import { MapPin, Calendar, DollarSign, Percent, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [dealType, setDealType] = useState("all");

  const deals = [
    {
      id: "1",
      make: "Honda",
      model: "Pilot",
      year: 2025,
      dealType: "cashback",
      value: 2500,
      description: "$2,500 Cash Back + 1.9% APR Financing",
      validUntil: "2025-01-31",
      region: "National",
      badge: "Best Deal",
    },
    {
      id: "2", 
      make: "Toyota",
      model: "Highlander",
      year: 2025,
      dealType: "lease",
      value: 399,
      description: "Lease for $399/month, $2,999 due at signing",
      validUntil: "2025-02-15",
      region: "West Coast",
      badge: "Low Payment",
    },
    {
      id: "3",
      make: "Mazda",
      model: "CX-9",
      year: 2025,
      dealType: "financing",
      value: 0.9,
      description: "0.9% APR Financing for 60 months",
      validUntil: "2025-01-15",
      region: "National",
      badge: "Low Rate",
    },
  ];

  const formatDealValue = (deal: any) => {
    switch (deal.dealType) {
      case "cashback":
        return `$${deal.value.toLocaleString()} Cash Back`;
      case "lease":
        return `$${deal.value}/month`;
      case "financing":
        return `${deal.value}% APR`;
      default:
        return deal.description;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container-luxury py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-primary-foreground">
                Best Car Deals
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
                Current incentives, cash back offers, and special financing deals 
                from manufacturers and dealers nationwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">150+</div>
                  <div className="text-primary-foreground/70">Active Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">$5K</div>
                  <div className="text-primary-foreground/70">Avg Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">Daily</div>
                  <div className="text-primary-foreground/70">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-background/95 backdrop-blur-md sticky top-header z-40">
          <div className="container-luxury py-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-48">
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="northeast">Northeast</SelectItem>
                  <SelectItem value="southeast">Southeast</SelectItem>
                  <SelectItem value="midwest">Midwest</SelectItem>
                  <SelectItem value="southwest">Southwest</SelectItem>
                  <SelectItem value="west">West Coast</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dealType} onValueChange={setDealType}>
                <SelectTrigger className="w-48">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Deal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Deal Types</SelectItem>
                  <SelectItem value="cashback">Cash Back</SelectItem>
                  <SelectItem value="lease">Lease Specials</SelectItem>
                  <SelectItem value="financing">Low APR Financing</SelectItem>
                  <SelectItem value="rebate">Rebates</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deals.map((deal) => (
                <Card key={deal.id} className="card-luxury overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    {deal.badge && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {deal.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        {deal.year} {deal.make} {deal.model}
                      </CardTitle>
                      <Badge variant="outline">{deal.region}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {formatDealValue(deal)}
                      </div>
                      <p className="text-muted-foreground">{deal.description}</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Valid until {new Date(deal.validUntil).toLocaleDateString()}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Button className="w-full btn-luxury">
                        Get This Deal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Deals
              </Button>
            </div>
          </div>
        </section>

        {/* Deal Alert CTA */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Never Miss a Great Deal
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get notified when new deals are available for your favorite cars.
              </p>
              <Button size="lg" className="btn-luxury">
                Set Up Deal Alerts
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;