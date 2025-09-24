import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calculator, DollarSign, Percent, Phone, Mail, Download } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { sendDealInquiry } from "@/lib/email-service";

const PricingDeals = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState("national");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get car info from URL params
  const carQuery = searchParams.get('search') || searchParams.get('car') || '';
  const [make, model] = carQuery.split('+').map(part => part || '');

  // Mock pricing data - in real app, this would come from API
  const pricingData = {
    car: {
      make: make || "Honda",
      model: model || "Pilot",
      year: 2025,
      basePrice: 39150,
      topPrice: 51900
    },
    deals: [
      {
        type: "Cash Back",
        value: "$2,500",
        description: "$2,500 cash back on all 2025 Honda Pilot models",
        validUntil: "2025-01-31",
        region: "National"
      },
      {
        type: "APR Financing",
        value: "1.9%",
        description: "1.9% APR financing for qualified buyers",
        validUntil: "2025-01-31",
        region: "National"
      },
      {
        type: "Lease Special",
        value: "$399/mo",
        description: "Lease for $399/month, $2,999 due at signing",
        validUntil: "2025-02-15",
        region: "Select Markets"
      }
    ],
    trims: [
      { name: "LX", price: 39150, features: ["LED Headlights", "Honda Sensing", "8-inch Display"] },
      { name: "Sport", price: 41950, features: ["Sport Styling", "20-inch Wheels", "Wireless CarPlay"] },
      { name: "EX-L", price: 46400, features: ["Leather Seats", "Navigation", "Panoramic Sunroof"] },
      { name: "Touring", price: 51900, features: ["Premium Audio", "Rear Entertainment", "Ventilated Seats"] }
    ]
  };

  const handleInquiry = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to receive pricing information.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const carInfo = `${pricingData.car.year} ${pricingData.car.make} ${pricingData.car.model}`;
      const success = await sendDealInquiry(carInfo, email);
      
      if (success) {
        toast({
          title: "Inquiry Sent!",
          description: "We'll send you the latest pricing and deals for this vehicle.",
        });
        setEmail("");
      } else {
        throw new Error('Inquiry failed');
      }
    } catch (error) {
      toast({
        title: "Inquiry Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-luxury">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
                {pricingData.car.year} {pricingData.car.make} {pricingData.car.model} Pricing & Deals
              </h1>
              <p className="text-xl text-muted-foreground">
                Current incentives, financing options, and dealer pricing for your area.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Pricing Overview */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    MSRP Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${pricingData.car.basePrice.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Starting Price</div>
                    </div>
                    <div className="text-center p-6 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${pricingData.car.topPrice.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Fully Loaded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Deals */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Percent className="w-5 h-5 mr-2" />
                    Current Incentives & Deals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingData.deals.map((deal, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">{deal.type}</Badge>
                            <span className="font-bold text-primary text-lg">{deal.value}</span>
                          </div>
                          <Badge variant="outline">{deal.region}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{deal.description}</p>
                        <div className="text-sm text-muted-foreground">
                          Valid until: {new Date(deal.validUntil).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trim Levels */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Available Trim Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingData.trims.map((trim, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{trim.name}</h3>
                          <div className="text-right">
                            <div className="font-bold text-xl">${trim.price.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">MSRP</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {trim.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Get Pricing Form */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Local Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="region">Your Region</Label>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="national">National</SelectItem>
                        <SelectItem value="northeast">Northeast</SelectItem>
                        <SelectItem value="southeast">Southeast</SelectItem>
                        <SelectItem value="midwest">Midwest</SelectItem>
                        <SelectItem value="southwest">Southwest</SelectItem>
                        <SelectItem value="west">West Coast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={handleInquiry}
                    className="w-full btn-luxury"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Get Local Pricing
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Calculator */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Payment Estimator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">$689/mo</div>
                      <div className="text-sm text-muted-foreground">Est. Financing Payment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$399/mo</div>
                      <div className="text-sm text-muted-foreground">Est. Lease Payment</div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Calculator className="w-4 h-4 mr-2" />
                      Full Calculator
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Compare Actions */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Compare & Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to={`/compare?cars=${pricingData.car.make.toLowerCase()}-${pricingData.car.model.toLowerCase()}`}>
                    <Button variant="outline" className="w-full">
                      Compare Similar Cars
                    </Button>
                  </Link>
                  <Link to={`/cars/${pricingData.car.make.toLowerCase()}/${pricingData.car.model.toLowerCase()}`}>
                    <Button variant="outline" className="w-full">
                      View Full Review
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Generate pricing PDF
                      const element = document.createElement('a');
                      element.href = '#';
                      element.download = `${pricingData.car.year}-${pricingData.car.make}-${pricingData.car.model}-pricing.pdf`;
                      element.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Pricing Sheet
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Speak with our automotive experts
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (555) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingDeals;