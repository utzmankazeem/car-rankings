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

const Sedans = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rank');

  // Mock data - in real app this would come from API
  const sedans = [
    {
      id: "1",
      make: "Honda",
      model: "Accord",
      year: 2025,
      category: "Mid-size Sedan",
      image: hondaPilotImage,
      startingPrice: 28800,
      score: 9.3,
      rank: 1,
      highlights: ["Best Value", "Most Reliable"],
      specs: {
        mpg: "32/42",
        seating: 5,
        safetyRating: 5,
        horsepower: 192,
      },
      badges: ["Editor's Choice"],
    },
    {
      id: "2",
      make: "Toyota",
      model: "Camry",
      year: 2025,
      category: "Mid-size Sedan",
      image: toyotaHighlanderImage,
      startingPrice: 26420,
      score: 9.1,
      rank: 2,
      highlights: ["Family Friendly", "Reliable"],
      specs: {
        mpg: "28/39",
        seating: 5,
        safetyRating: 5,
        horsepower: 203,
      },
      badges: ["Top Safety Pick"],
    },
    {
      id: "3",
      make: "Mazda",
      model: "Mazda6",
      year: 2025,
      category: "Mid-size Sedan",
      image: mazdaCX9Image,
      startingPrice: 25900,
      score: 8.9,
      rank: 3,
      highlights: ["Luxury Feel", "Handling"],
      specs: {
        mpg: "26/35",
        seating: 5,
        safetyRating: 5,
        horsepower: 187,
      },
    },
  ];

  const filterOptions = {
    size: ["Compact", "Mid-size", "Full-size"],
    powertrain: ["Gas", "Hybrid", "Electric"],
    priceRange: ["Under $25k", "$25k-$35k", "$35k-$45k", "$45k+"],
    brands: ["Honda", "Toyota", "Mazda", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Lexus"],
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
                Best Sedans 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the perfect sedan for your needs. Our expert rankings consider fuel economy, 
                comfort, technology, and value to help you find the ideal balance of efficiency and luxury.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">Sedans Ranked</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Size Classes</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">12</div>
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
                    <SelectItem value="safety">Safety Rating</SelectItem>
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
                  {sedans.length} Sedans found
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
              {sedans.map((sedan) => (
                <CarCard
                  key={sedan.id}
                  car={sedan}
                  onCompare={handleCompare}
                  onSave={handleSave}
                  showRank={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Sedans
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Sedan Buying Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⛽</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Fuel Efficiency</h3>
                  <p className="text-muted-foreground text-sm">
                    Sedans offer excellent fuel economy for daily commuting and long trips.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Comfort & Ride</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern sedans balance sporty handling with comfortable daily driving.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Value & Cost</h3>
                  <p className="text-muted-foreground text-sm">
                    Sedans typically offer lower ownership costs and strong resale value.
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

export default Sedans;