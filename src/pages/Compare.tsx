import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, X, Download, Share2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateComparisonPDF, type CarData } from "@/lib/pdf-utils";
import { useToast } from "@/components/ui/use-toast";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  mpg: string;
  horsepower: string;
  seatingCapacity: number;
  safetyRating: string;
  score: number;
  image: string;
  pros: string[];
  cons: string[];
}

const Compare = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([]);

  const availableCars: Car[] = [
    {
      id: "honda-pilot",
      make: "Honda",
      model: "Pilot",
      year: 2025,
      price: "$39,150 - $51,900",
      mpg: "22/28 mpg",
      horsepower: "280 hp",
      seatingCapacity: 8,
      safetyRating: "5-Star NHTSA",
      score: 8.5,
      image: "/api/placeholder/300/200",
      pros: ["Excellent reliability", "Spacious interior", "Strong safety ratings"],
      cons: ["CVT transmission feel", "Road noise"]
    },
    {
      id: "toyota-highlander",
      make: "Toyota",
      model: "Highlander",
      year: 2025,
      price: "$37,950 - $50,400",
      mpg: "21/29 mpg",
      horsepower: "295 hp",
      seatingCapacity: 8,
      safetyRating: "5-Star NHTSA",
      score: 8.2,
      image: "/api/placeholder/300/200",
      pros: ["Outstanding reliability", "Hybrid available", "Strong resale value"],
      cons: ["CVT feel", "Third row tight"]
    },
    {
      id: "mazda-cx9",
      make: "Mazda",
      model: "CX-9",
      year: 2025,
      price: "$38,200 - $46,900",
      mpg: "20/26 mpg",
      horsepower: "227 hp",
      seatingCapacity: 7,
      safetyRating: "5-Star NHTSA",
      score: 8.0,
      image: "/api/placeholder/300/200",
      pros: ["Premium interior", "Excellent handling", "Beautiful design"],
      cons: ["Less cargo space", "Requires premium fuel"]
    }
  ];

  // Initialize with URL params
  useEffect(() => {
    const carsParam = searchParams.get('cars');
    if (carsParam) {
      const carIds = carsParam.split(',').slice(0, 3);
      const initialCars: (Car | null)[] = [];
      
      carIds.forEach(carId => {
        const car = availableCars.find(c => c.id === carId || 
          `${c.make.toLowerCase()}-${c.model.toLowerCase().replace(/\s+/g, '-')}` === carId
        );
        initialCars.push(car || null);
      });
      
      setSelectedCars(initialCars);
    }
  }, [searchParams]);

  const addCar = () => {
    if (selectedCars.length < 3) {
      setSelectedCars([...selectedCars, null]);
    }
  };

  const removeCar = (index: number) => {
    setSelectedCars(selectedCars.filter((_, i) => i !== index));
  };

  const selectCar = (index: number, carId: string) => {
    const car = availableCars.find(c => c.id === carId);
    if (car) {
      const newCars = [...selectedCars];
      newCars[index] = car;
      setSelectedCars(newCars);
    }
  };

  const handleExportPDF = () => {
    const validCars = selectedCars.filter((car): car is Car => car !== null);
    if (validCars.length === 0) {
      toast({
        title: "No Cars Selected",
        description: "Please select at least one car to export comparison.",
        variant: "destructive"
      });
      return;
    }

    const carsForPDF: CarData[] = validCars.map(car => ({
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
      cons: car.cons
    }));
    
    generateComparisonPDF(carsForPDF, "Car Comparison");
    
    toast({
      title: "PDF Downloaded",
      description: "Your car comparison has been downloaded as a PDF.",
    });
  };

  const handleShare = async () => {
    const validCarIds = selectedCars
      .filter((car): car is Car => car !== null)
      .map(car => car.id)
      .join(',');
    
    const shareUrl = `${window.location.origin}/compare?cars=${validCarIds}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Car Comparison - CAR-RANKINGS",
          text: "Check out this car comparison",
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link Copied",
        description: "Comparison link copied to clipboard.",
      });
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
                Compare Cars
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
                Side-by-side comparison of specifications, features, and performance 
                to help you make the right choice.
              </p>
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="section-padding">
          <div className="container-luxury">
            {selectedCars.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plus className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Start Your Comparison
                </h2>
                <p className="text-muted-foreground mb-8">
                  Add up to 3 cars to compare their features, specs, and pricing side-by-side.
                </p>
                <Button onClick={addCar} size="lg" className="btn-luxury">
                  Add First Car
                </Button>
              </div>
            ) : (
              <div>
                {/* Controls */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-heading font-bold">
                      Comparing {selectedCars.length} {selectedCars.length === 1 ? 'Car' : 'Cars'}
                    </h2>
                    {selectedCars.length < 3 && (
                      <Button onClick={addCar} variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Car
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleExportPDF}>
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </div>
                </div>

                {/* Comparison Grid */}
                <div className={`grid gap-6 ${selectedCars.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : selectedCars.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                  {selectedCars.map((car, index) => (
                    <Card key={index} className="relative">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Select Vehicle {index + 1}</CardTitle>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeCar(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Select 
                          value={car?.id || ""} 
                          onValueChange={(value) => selectCar(index, value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a car" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableCars.map((availableCar) => (
                              <SelectItem key={availableCar.id} value={availableCar.id}>
                                {availableCar.year} {availableCar.make} {availableCar.model}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        {car && (
                          <div className="mt-6 space-y-4">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <img 
                                src={car.image} 
                                alt={`${car.year} ${car.make} ${car.model}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">
                                {car.year} {car.make} {car.model}
                              </h3>
                              <p className="text-muted-foreground">{car.price}</p>
                              <Badge variant="secondary" className="mt-2">
                                Score: {car.score}/10
                              </Badge>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Comparison Table */}
                {selectedCars.filter(car => car !== null).length > 1 && (
                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle>Detailed Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold">Feature</th>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <th key={index} className="text-center py-3 px-4 font-semibold">
                                  {car?.make} {car?.model}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Overall Score</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">
                                  <Badge className="score-good text-white">
                                    {car?.score}/10
                                  </Badge>
                                </td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Price Range</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">{car?.price}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Fuel Economy</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">{car?.mpg}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Horsepower</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">{car?.horsepower}</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Seating</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">{car?.seatingCapacity} passengers</td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Safety Rating</td>
                              {selectedCars.filter(car => car !== null).map((car, index) => (
                                <td key={index} className="text-center py-3 px-4">{car?.safetyRating}</td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Pros and Cons Comparison */}
                      <div className="mt-8 grid gap-6" style={{gridTemplateColumns: `repeat(${selectedCars.filter(car => car !== null).length}, 1fr)`}}>
                        {selectedCars.filter(car => car !== null).map((car, index) => (
                          <div key={index}>
                            <h4 className="font-semibold mb-3">{car?.make} {car?.model}</h4>
                            <div className="space-y-3">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <ul className="text-xs space-y-1">
                                  {car?.pros.map((pro, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-green-600 mr-1">•</span>
                                      {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-orange-600 mb-2">Cons</h5>
                                <ul className="text-xs space-y-1">
                                  {car?.cons.map((con, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-orange-600 mr-1">•</span>
                                      {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;