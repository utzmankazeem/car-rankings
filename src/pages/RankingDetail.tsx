import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Share2, Star, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateComparisonPDF, type CarData } from "@/lib/pdf-utils";

const RankingDetail = () => {
  const { slug } = useParams();
  
  // Mock ranking data - in real app, this would come from API/CMS
  const ranking = {
    id: "best-family-suvs",
    title: "Best Family SUVs 2025",
    description: "Top-rated family SUVs based on safety, reliability, space, and value",
    methodology: "Ranked using our comprehensive scoring system that weighs safety (30%), reliability (25%), space & comfort (20%), value (15%), and fuel efficiency (10%)",
    lastUpdated: "2024-12-15",
    cars: [
      {
        rank: 1,
        make: "Honda",
        model: "Pilot",
        year: 2025,
        score: 9.2,
        price: "$39,150 - $51,900",
        mpg: "22/28 mpg",
        horsepower: "280 hp",
        seatingCapacity: 8,
        safetyRating: "5-Star NHTSA",
        pros: ["Excellent reliability", "Spacious interior", "Strong safety ratings", "Good fuel economy"],
        cons: ["CVT transmission feel", "Road noise at highway speeds"],
        specifications: {
          "Engine": "3.5L V6",
          "Transmission": "10-speed automatic",
          "Drivetrain": "FWD/AWD",
          "Cargo Space": "16.5 cu ft",
          "Towing Capacity": "3,500 - 5,000 lbs"
        }
      },
      {
        rank: 2,
        make: "Toyota",
        model: "Highlander",
        year: 2025,
        score: 8.8,
        price: "$37,950 - $50,400",
        mpg: "21/29 mpg",
        horsepower: "295 hp",
        seatingCapacity: 8,
        safetyRating: "5-Star NHTSA",
        pros: ["Outstanding reliability", "Hybrid available", "Strong resale value", "Comprehensive safety features"],
        cons: ["CVT feel", "Third row tight for adults"],
        specifications: {
          "Engine": "3.5L V6",
          "Transmission": "8-speed automatic",
          "Drivetrain": "FWD/AWD",
          "Cargo Space": "16.0 cu ft",
          "Towing Capacity": "5,000 lbs"
        }
      },
      {
        rank: 3,
        make: "Mazda",
        model: "CX-9",
        year: 2025,
        score: 8.5,
        price: "$38,200 - $46,900",
        mpg: "20/26 mpg",
        horsepower: "227 hp",
        seatingCapacity: 7,
        safetyRating: "5-Star NHTSA",
        pros: ["Premium interior", "Excellent handling", "Beautiful design", "Strong build quality"],
        cons: ["Less cargo space", "Turbocharged engine requires premium fuel"],
        specifications: {
          "Engine": "2.5L Turbo I4",
          "Transmission": "6-speed automatic",
          "Drivetrain": "FWD/AWD",
          "Cargo Space": "14.4 cu ft",
          "Towing Capacity": "3,500 lbs"
        }
      }
    ].slice(0, 15) // Limit to 15 cars
  };

  const getScoreClass = (score: number) => {
    if (score >= 9) return "score-excellent";
    if (score >= 8) return "score-good";
    if (score >= 7) return "score-average";
    return "score-poor";
  };

  const handleDownloadPDF = () => {
    const carsForPDF: CarData[] = ranking.cars.map(car => ({
      make: car.make,
      model: car.model,
      year: car.year,
      score: car.score,
      price: car.price,
      mpg: car.mpg,
      horsepower: car.horsepower,
      seatingCapacity: car.seatingCapacity,
      safetyRating: car.safetyRating,
      pros: car.pros,
      cons: car.cons,
      specifications: car.specifications
    }));
    
    generateComparisonPDF(carsForPDF, ranking.title);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: ranking.title,
          text: ranking.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-luxury">
          {/* Header */}
          <div className="mb-8">
            <Link to="/rankings" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rankings
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
                  {ranking.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {ranking.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Last updated: {new Date(ranking.lastUpdated).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{ranking.cars.length} vehicles ranked</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button onClick={handleDownloadPDF} className="btn-luxury">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ranking.methodology}</p>
            </CardContent>
          </Card>

          {/* Rankings List */}
          <div className="space-y-6">
            {ranking.cars.map((car) => (
              <Card key={`${car.make}-${car.model}`} className="card-luxury overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Rank & Basic Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                            #{car.rank}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-heading font-bold">
                              {car.year} {car.make} {car.model}
                            </h3>
                            <Badge className={`${getScoreClass(car.score)} text-white font-semibold`}>
                              {car.score}/10
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Price:</span>
                              <div className="font-semibold">{car.price}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">MPG:</span>
                              <div className="font-semibold">{car.mpg}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Power:</span>
                              <div className="font-semibold">{car.horsepower}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Seating:</span>
                              <div className="font-semibold">{car.seatingCapacity} passengers</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                      <ul className="text-sm space-y-1">
                        {car.pros.slice(0, 3).map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-orange-600 mb-2 mt-4">Cons</h4>
                      <ul className="text-sm space-y-1">
                        {car.cons.slice(0, 2).map((con, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      <Link 
                        to={`/cars/${car.make.toLowerCase()}/${car.model.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Link 
                        to={`/compare?cars=${car.make.toLowerCase()}-${car.model.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full">
                          Compare
                        </Button>
                      </Link>
                      <Link 
                        to={`/deals?search=${car.make}+${car.model}`}
                        className="w-full"
                      >
                        <Button className="w-full btn-luxury">
                          Get Pricing
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Related Rankings */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Related Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/rankings/most-reliable-cars" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Most Reliable Cars</h3>
                  <p className="text-sm text-muted-foreground">Long-term dependability rankings</p>
                </Link>
                <Link to="/rankings/best-value-trucks" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Best Value Trucks</h3>
                  <p className="text-sm text-muted-foreground">Top truck recommendations</p>
                </Link>
                <Link to="/rankings/top-luxury-cars" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Top Luxury Cars</h3>
                  <p className="text-sm text-muted-foreground">Premium vehicle rankings</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RankingDetail;