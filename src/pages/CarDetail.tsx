import { useParams } from "react-router-dom";
import { Star, Download, Share2, Heart, Award, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hondaPilotImage from "@/assets/honda-pilot-hero.jpg";

const CarDetail = () => {
  const { make, model } = useParams();

  // Mock data - in real app this would come from API based on params
  const car = {
    make: "Honda",
    model: "Pilot",
    year: 2025,
    category: "Mid-size SUV",
    image: hondaPilotImage,
    startingPrice: 39150,
    score: 9.4,
    rank: 1,
    awards: ["Best Family SUV 2025", "Top Safety Pick+"],
    highlights: ["Best-in-class safety", "Spacious 8-seater", "Strong reliability"],
    pros: [
      "Excellent safety ratings",
      "Spacious interior with 8 seats",
      "Strong predicted reliability",
      "Competitive pricing for the segment",
      "Good fuel economy for size"
    ],
    cons: [
      "Engine can feel underpowered when fully loaded",
      "Road noise at highway speeds",
      "Infotainment system could be more intuitive"
    ],
    specs: {
      mpg: "22/28",
      seating: 8,
      safetyRating: 5,
      horsepower: 280,
      torque: "262 lb-ft",
      transmission: "10-Speed Automatic",
      drivetrain: "AWD Available",
      cargoSpace: "16.5 cu ft"
    },
    trims: [
      { name: "LX", price: 39150, highlights: ["LED headlights", "Honda Sensing"] },
      { name: "EX", price: 42950, highlights: ["Sunroof", "Remote start"] },
      { name: "EX-L", price: 46350, highlights: ["Leather trim", "Navigation"] },
      { name: "Touring", price: 49700, highlights: ["Premium audio", "Ventilated seats"] }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-luxury">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-6">
              Home / SUVs / {car.make} / {car.model}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                  <img 
                    src={car.image} 
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Brochure
                  </Button>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge className="bg-primary text-primary-foreground">
                      #{car.rank} {car.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{car.score}</span>
                      <span className="text-muted-foreground">/10</span>
                    </div>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
                    {car.year} {car.make} {car.model}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Starting at {formatPrice(car.startingPrice)} MSRP
                  </p>
                </div>

                {/* Awards */}
                <div className="space-y-2">
                  {car.awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{award}</span>
                    </div>
                  ))}
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{car.specs.mpg}</div>
                    <div className="text-sm text-muted-foreground">City/Hwy MPG</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{car.specs.seating}</div>
                    <div className="text-sm text-muted-foreground">Seating</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{car.specs.horsepower}</div>
                    <div className="text-sm text-muted-foreground">Horsepower</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{car.specs.safetyRating}★</div>
                    <div className="text-sm text-muted-foreground">Safety Rating</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full btn-luxury">
                    Get Pricing & Deals
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Compare with Similar Cars
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="section-padding">
          <div className="container-luxury">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="trims">Trims</TabsTrigger>
                <TabsTrigger value="specs">Specs</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Pros
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {car.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-red-500" />
                        Considerations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {car.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Editor's Verdict</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      The {car.year} {car.make} {car.model} stands out as our top choice in the mid-size SUV category, 
                      earning its #1 ranking through exceptional safety ratings, impressive interior space, and strong 
                      value proposition. With seating for eight and a comprehensive suite of safety features standard, 
                      it's particularly well-suited for families seeking a reliable, practical vehicle.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trims">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {car.trims.map((trim, index) => (
                    <Card key={index} className="relative">
                      <CardHeader>
                        <CardTitle>{trim.name}</CardTitle>
                        <div className="text-2xl font-bold text-primary">
                          {formatPrice(trim.price)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          {trim.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full mt-4">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specs">
                <Card>
                  <CardHeader>
                    <CardTitle>Full Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Performance</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Horsepower:</span>
                            <span>{car.specs.horsepower}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Torque:</span>
                            <span>{car.specs.torque}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transmission:</span>
                            <span>{car.specs.transmission}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Efficiency</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>City/Highway:</span>
                            <span>{car.specs.mpg} MPG</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Drivetrain:</span>
                            <span>{car.specs.drivetrain}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Interior</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Seating:</span>
                            <span>{car.specs.seating} passengers</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cargo Space:</span>
                            <span>{car.specs.cargoSpace}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="safety">
                <div className="text-center py-8">
                  <div className="text-6xl font-bold text-primary mb-4">{car.specs.safetyRating}</div>
                  <div className="text-xl text-muted-foreground mb-8">Overall Safety Rating</div>
                  <p>Detailed safety information coming soon...</p>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                  <p className="text-muted-foreground">Reviews and ratings coming soon...</p>
                </div>
              </TabsContent>

              <TabsContent value="photos">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Photo gallery coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetail;