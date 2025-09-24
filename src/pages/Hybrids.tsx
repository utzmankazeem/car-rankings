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

const Hybrids = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rank');

  // Mock data - in real app this would come from API
  const hybrids = [
    {
      id: "1",
      make: "Toyota",
      model: "Prius",
      year: 2025,
      category: "Hybrid Sedan",
      image: hondaPilotImage,
      startingPrice: 28545,
      score: 9.4,
      rank: 1,
      highlights: ["Best MPG", "Most Reliable"],
      specs: {
        mpg: "57/56",
        seating: 5,
        safetyRating: 5,
        horsepower: 196,
      },
      badges: ["Efficiency Leader"],
    },
    {
      id: "2",
      make: "Honda",
      model: "Accord Hybrid",
      year: 2025,
      category: "Hybrid Sedan",
      image: toyotaHighlanderImage,
      startingPrice: 38090,
      score: 9.2,
      rank: 2,
      highlights: ["Performance", "Spacious"],
      specs: {
        mpg: "48/48",
        seating: 5,
        safetyRating: 5,
        horsepower: 204,
      },
      badges: ["Best Performance"],
    },
    {
      id: "3",
      make: "Toyota",
      model: "RAV4 Hybrid",
      year: 2025,
      category: "Hybrid SUV",
      image: mazdaCX9Image,
      startingPrice: 33440,
      score: 9.0,
      rank: 3,
      highlights: ["AWD Standard", "Versatile"],
      specs: {
        mpg: "41/38",
        seating: 5,
        safetyRating: 5,
        horsepower: 219,
      },
    },
  ];

  const filterOptions = {
    type: ["Standard Hybrid", "Plug-in Hybrid"],
    bodyStyle: ["Sedan", "SUV", "Crossover", "Hatchback"],
    mpg: ["40+ MPG", "45+ MPG", "50+ MPG"],
    priceRange: ["Under $30k", "$30k-$40k", "$40k-$50k", "$50k+"],
    brands: ["Toyota", "Honda", "Ford", "Hyundai", "Kia", "Lexus", "Acura"],
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
                Best Hybrid Cars 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the perfect balance of efficiency and convenience. Our hybrid rankings 
                evaluate fuel economy, reliability, performance, and value for eco-conscious drivers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">35+</div>
                  <div className="text-sm text-muted-foreground">Hybrids Ranked</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Best MPG</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">14</div>
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
                    <SelectItem value="mpg">Fuel Economy</SelectItem>
                    <SelectItem value="reliability">Reliability</SelectItem>
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
                  {hybrids.length} Hybrids found
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
              {hybrids.map((hybrid) => (
                <CarCard
                  key={hybrid.id}
                  car={hybrid}
                  onCompare={handleCompare}
                  onSave={handleSave}
                  showRank={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Hybrids
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Hybrid Buying Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Hybrid vs Plug-in</h3>
                  <p className="text-muted-foreground text-sm">
                    Standard hybrids charge automatically, plug-ins offer electric-only range.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⛽</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Fuel Savings</h3>
                  <p className="text-muted-foreground text-sm">
                    Hybrids typically achieve 40-50+ MPG for significant fuel cost savings.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Maintenance</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern hybrids are reliable with proven technology and low maintenance.
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

export default Hybrids;