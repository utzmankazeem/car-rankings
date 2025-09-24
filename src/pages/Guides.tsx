import { useState } from "react";
import { BookOpen, Download, Calculator, Award, Search, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const guides = [
    {
      id: "1",
      title: "Complete SUV Buying Guide 2025",
      description: "Everything you need to know about buying an SUV, from size considerations to fuel efficiency.",
      category: "Buying Guides",
      readTime: "12 min read",
      downloads: "25K",
      badge: "Most Popular",
      type: "guide"
    },
    {
      id: "2",
      title: "Electric vs Hybrid vs Gas Calculator",
      description: "Compare total cost of ownership across different powertrains based on your driving habits.",
      category: "Calculators", 
      readTime: "5 min",
      downloads: "18K",
      badge: "Interactive",
      type: "calculator"
    },
    {
      id: "3",
      title: "Car Safety Ratings Explained",
      description: "Understanding IIHS, NHTSA ratings and what they mean for your family's safety.",
      category: "Safety",
      readTime: "8 min",
      downloads: "15K",
      badge: "Essential",
      type: "guide"
    },
    {
      id: "4",
      title: "Lease vs Buy Calculator",
      description: "Determine whether leasing or buying makes more financial sense for your situation.",
      category: "Calculators",
      readTime: "3 min", 
      downloads: "22K",
      badge: "Top Tool",
      type: "calculator"
    },
    {
      id: "5",
      title: "Car Maintenance Cost Guide",
      description: "Comprehensive breakdown of maintenance costs by brand, model, and vehicle age.",
      category: "Ownership",
      readTime: "15 min",
      downloads: "12K",
      badge: "Data-Rich",
      type: "guide"
    },
    {
      id: "6",
      title: "Award Winners 2025",
      description: "Our annual awards recognizing the best cars in every category.",
      category: "Awards",
      readTime: "20 min",
      downloads: "35K",
      badge: "Annual Awards",
      type: "awards"
    }
  ];

  const categories = ["all", "Buying Guides", "Calculators", "Safety", "Ownership", "Awards"];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "calculator":
        return <Calculator className="w-6 h-6" />;
      case "awards":
        return <Award className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
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
                Car Buying Guides
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
                Expert insights, calculators, and comprehensive guides to help you 
                make informed car buying decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">25+</div>
                  <div className="text-primary-foreground/70">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">8</div>
                  <div className="text-primary-foreground/70">Calculators</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">100K+</div>
                  <div className="text-primary-foreground/70">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="border-b border-border bg-background/95 backdrop-blur-md sticky top-header z-40">
          <div className="container-luxury py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search guides and calculators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <Card key={guide.id} className="card-luxury group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {getIcon(guide.type)}
                      </div>
                      {guide.badge && (
                        <Badge variant="secondary">{guide.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{guide.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{guide.readTime}</span>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <Badge variant="outline">{guide.category}</Badge>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {guide.type === "calculator" ? "Use Tool" : "Read Guide"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No guides found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-muted/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Stay Updated with New Guides
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get notified when we publish new buying guides and calculators.
              </p>
              <Button size="lg" className="btn-luxury">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;