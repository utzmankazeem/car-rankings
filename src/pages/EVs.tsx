import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CarCard from "@/components/cars/CarCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import hondaPilotImage from "@/assets/honda-pilot-hero.jpg";
import toyotaHighlanderImage from "@/assets/toyota-highlander.jpg";
import mazdaCX9Image from "@/assets/mazda-cx9.jpg";

const EVs = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rank');

  // Mock data - in real app this would come from API
  const evs = [
    {
      id: "1",
      make: "Tesla",
      model: "Model Y",
      year: 2025,
      category: "Electric SUV",
      image: hondaPilotImage,
      startingPrice: 52890,
      score: 9.5,
      rank: 1,
      highlights: ["Best Range", "Supercharging Network"],
      specs: {
        mpg: "129 MPGe",
        seating: 7,
        safetyRating: 5,
        horsepower: 384,
      },
      badges: ["Best EV"],
    },
    {
      id: "2",
      make: "BMW",
      model: "iX",
      year: 2025,
      category: "Electric SUV",
      image: toyotaHighlanderImage,
      startingPrice: 87100,
      score: 9.3,
      rank: 2,
      highlights: ["Luxury Interior", "Advanced Tech"],
      specs: {
        mpg: "105 MPGe",
        seating: 5,
        safetyRating: 5,
        horsepower: 516,
      },
      badges: ["Luxury Choice"],
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang Mach-E",
      year: 2025,
      category: "Electric SUV",
      image: mazdaCX9Image,
      startingPrice: 42995,
      score: 9.1,
      rank: 3,
      highlights: ["Sporty Handling", "Value"],
      specs: {
        mpg: "101 MPGe",
        seating: 5,
        safetyRating: 5,
        horsepower: 346,
      },
    },
  ];

  const filterOptions = {
    range: ["200-300 miles", "300-400 miles", "400+ miles"],
    charging: ["Level 1", "Level 2", "DC Fast Charging"],
    bodyStyle: ["Sedan", "SUV", "Crossover", "Truck"],
    priceRange: ["Under $40k", "$40k-$60k", "$60k-$80k", "$80k+"],
    brands: ["Tesla", "BMW", "Ford", "Mercedes-EQS", "Audi", "Volkswagen", "Hyundai", "Kia"],
  };

  const handleCompare = (carId: string) => {
    console.log("Adding to compare:", carId);
  };

  const handleSave = (carId: string) => {
    console.log("Saving car:", carId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container-luxury">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Best Electric Cars 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Explore the future of driving with our comprehensive electric vehicle rankings. 
                Compare range, charging speed, performance, and value to find your perfect EV.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">EVs Ranked</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">400+</div>
                  <div className="text-sm text-muted-foreground">Max Range (miles)</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">18</div>
                  <div className="text-sm text-muted-foreground">Test Criteria</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Controls */}
        <section className="border-b border-border sticky top-header bg-background/95 backdrop-blur-md z-40">
          <div className="container-luxury py-4">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rank">Rank (Best First)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="range">Range (Highest First)</SelectItem>
                    <SelectItem value="efficiency">Efficiency (MPGe)</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>

                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Customize Rankings
                </Button>
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {evs.length} EVs found
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
            }>
              {evs.map((ev) => (
                <CarCard
                  key={ev.id}
                  car={ev}
                  onCompare={handleCompare}
                  onSave={handleSave}
                  showRank={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Electric Cars
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                EV Buying Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔋</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Range & Charging</h3>
                  <p className="text-muted-foreground text-sm">
                    Consider your daily driving needs and available charging infrastructure.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Incentives & Savings</h3>
                  <p className="text-muted-foreground text-sm">
                    Federal and state tax credits can significantly reduce the purchase price.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Environmental Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    EVs produce zero direct emissions and lower overall carbon footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EVs;