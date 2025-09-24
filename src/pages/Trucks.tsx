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

const Trucks = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rank');

  // Mock data - in real app this would come from API
  const trucks = [
    {
      id: "1",
      make: "Ford",
      model: "F-150",
      year: 2025,
      category: "Full-size Pickup",
      image: hondaPilotImage,
      startingPrice: 37240,
      score: 9.4,
      rank: 1,
      highlights: ["Best Towing", "Most Capable"],
      specs: {
        mpg: "20/24",
        seating: 6,
        safetyRating: 5,
        horsepower: 400,
      },
      badges: ["Best in Class"],
    },
    {
      id: "2",
      make: "Chevrolet",
      model: "Silverado",
      year: 2025,
      category: "Full-size Pickup",
      image: toyotaHighlanderImage,
      startingPrice: 35500,
      score: 9.2,
      rank: 2,
      highlights: ["Strong Value", "Reliable"],
      specs: {
        mpg: "19/23",
        seating: 6,
        safetyRating: 5,
        horsepower: 355,
      },
      badges: ["Editor's Pick"],
    },
    {
      id: "3",
      make: "Toyota",
      model: "Tundra",
      year: 2025,
      category: "Full-size Pickup",
      image: mazdaCX9Image,
      startingPrice: 38965,
      score: 9.0,
      rank: 3,
      highlights: ["Off-Road Ready", "Reliability"],
      specs: {
        mpg: "18/24",
        seating: 6,
        safetyRating: 5,
        horsepower: 389,
      },
    },
  ];

  const filterOptions = {
    size: ["Mid-size", "Full-size"],
    powertrain: ["Gas", "Hybrid", "Electric"],
    bed: ["5.5 ft", "6.5 ft", "8 ft"],
    drivetrain: ["RWD", "4WD", "AWD"],
    towing: ["Under 5,000 lbs", "5,000-10,000 lbs", "10,000+ lbs"],
    brands: ["Ford", "Chevrolet", "Toyota", "Ram", "GMC", "Nissan"],
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
                Best Trucks 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find the perfect truck for work and play. Our comprehensive rankings evaluate towing capacity, 
                payload, fuel economy, and reliability to help you choose the right pickup truck.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Trucks Ranked</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Size Classes</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">15</div>
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
                    <SelectItem value="towing">Towing Capacity</SelectItem>
                    <SelectItem value="payload">Payload</SelectItem>
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
                  {trucks.length} Trucks found
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
              {trucks.map((truck) => (
                <CarCard
                  key={truck.id}
                  car={truck}
                  onCompare={handleCompare}
                  onSave={handleSave}
                  showRank={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Trucks
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Truck Buying Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚛</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Towing & Payload</h3>
                  <p className="text-muted-foreground text-sm">
                    Consider your hauling needs - boats, trailers, equipment, and cargo weight.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Work vs Play</h3>
                  <p className="text-muted-foreground text-sm">
                    Choose between work-focused capability or comfort-oriented daily driving.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛣️</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Bed Size & Cab</h3>
                  <p className="text-muted-foreground text-sm">
                    Balance crew cab comfort with bed length for your specific needs.
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

export default Trucks;