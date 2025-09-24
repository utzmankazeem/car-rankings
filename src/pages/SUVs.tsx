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
import subaruAscentImage from "@/assets/subaru-ascent.jpg";
import fordExplorerImage from "@/assets/ford-explorer.jpg";
import chevroletTraverseImage from "@/assets/chevrolet-traverse.jpg";

const SUVs = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rank');

  // Mock data - in real app this would come from API
  const suvs = [
    {
      id: "1",
      make: "Honda",
      model: "Pilot",
      year: 2025,
      category: "Mid-size SUV",
      image: hondaPilotImage,
      startingPrice: 39550,
      score: 9.2,
      rank: 1,
      highlights: ["Best Value", "Most Reliable"],
      specs: {
        mpg: "22/28",
        seating: 8,
        safetyRating: 5,
        horsepower: 280,
      },
      badges: ["Editor's Choice"],
    },
    {
      id: "2",
      make: "Toyota",
      model: "Highlander",
      year: 2025,
      category: "Mid-size SUV",
      image: toyotaHighlanderImage,
      startingPrice: 37755,
      score: 9.0,
      rank: 2,
      highlights: ["Family Friendly", "Reliable"],
      specs: {
        mpg: "21/29",
        seating: 8,
        safetyRating: 5,
        horsepower: 295,
      },
      badges: ["Top Safety Pick"],
    },
    {
      id: "3",
      make: "Mazda",
      model: "CX-9",
      year: 2025,
      category: "Mid-size SUV",
      image: mazdaCX9Image,
      startingPrice: 38550,
      score: 8.8,
      rank: 3,
      highlights: ["Luxury Feel", "Handling"],
      specs: {
        mpg: "20/26",
        seating: 7,
        safetyRating: 5,
        horsepower: 227,
      },
    },
    {
      id: "4",
      make: "Subaru",
      model: "Ascent",
      year: 2025,
      category: "Mid-size SUV",
      image: subaruAscentImage,
      startingPrice: 35045,
      score: 8.5,
      rank: 4,
      highlights: ["Standard AWD", "Value"],
      specs: {
        mpg: "21/27",
        seating: 8,
        safetyRating: 5,
        horsepower: 260,
      },
    },
    {
      id: "5",
      make: "Ford",
      model: "Explorer",
      year: 2025,
      category: "Mid-size SUV",
      image: fordExplorerImage,
      startingPrice: 37205,
      score: 8.3,
      rank: 5,
      highlights: ["Towing Capacity", "Interior Space"],
      specs: {
        mpg: "20/28",
        seating: 7,
        safetyRating: 4,
        horsepower: 300,
      },
    },
    {
      id: "6",
      make: "Chevrolet",
      model: "Traverse",
      year: 2025,
      category: "Mid-size SUV",
      image: chevroletTraverseImage,
      startingPrice: 35000,
      score: 8.1,
      rank: 6,
      highlights: ["Spacious", "Affordable"],
      specs: {
        mpg: "18/27",
        seating: 8,
        safetyRating: 4,
        horsepower: 310,
      },
    },
  ];

  const filterOptions = {
    size: ["Compact", "Mid-size", "Full-size"],
    powertrain: ["Gas", "Hybrid", "Electric"],
    seating: ["5 seats", "6+ seats", "7+ seats", "8+ seats"],
    priceRange: ["Under $30k", "$30k-$40k", "$40k-$50k", "$50k+"],
    brands: ["Honda", "Toyota", "Mazda", "Subaru", "Ford", "Chevrolet", "BMW", "Mercedes-Benz"],
  };

  const handleCompare = (carId: string) => {
    // Add to comparison logic
    console.log("Adding to compare:", carId);
  };

  const handleSave = (carId: string) => {
    // Save car logic
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
                Best SUVs 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Compare and find the perfect SUV for your needs. Our expert rankings consider safety, 
                reliability, value, and real-world performance to help you make the best choice.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">SUVs Ranked</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
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
                  {suvs.length} SUVs found
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
              {suvs.map((suv) => (
                <CarCard
                  key={suv.id}
                  car={suv}
                  onCompare={handleCompare}
                  onSave={handleSave}
                  showRank={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More SUVs
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                SUV Buying Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Safety First</h3>
                  <p className="text-muted-foreground text-sm">
                    Look for 5-star safety ratings and advanced driver assistance features.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Right Size</h3>
                  <p className="text-muted-foreground text-sm">
                    Consider your family size and cargo needs for both daily use and trips.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⛽</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Fuel Economy</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern SUVs offer excellent fuel economy, especially hybrid options.
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

export default SUVs;