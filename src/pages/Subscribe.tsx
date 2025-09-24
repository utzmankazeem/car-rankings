import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, User, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { sendSubscriptionEmail, type EmailData } from "@/lib/email-service";

const Subscribe = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  });

  const interests = [
    'SUVs',
    'Sedans', 
    'Trucks',
    'Electric Vehicles',
    'Hybrid Cars',
    'Luxury Cars',
    'Best Deals',
    'Car Reviews',
    'Buying Guides'
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...(prev.interests || []), interest]
        : (prev.interests || []).filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await sendSubscriptionEmail(formData);
      
      if (success) {
        toast({
          title: "Subscription Successful!",
          description: "Welcome to CAR-RANKINGS. You'll receive our latest updates and exclusive content.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: [],
          message: ''
        });
        // Redirect after a short delay
        setTimeout(() => navigate('/'), 2000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your subscription. Please try again.",
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
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <div className="text-center">
                <h1 className="text-4xl font-heading font-bold mb-4">
                  Stay Updated with CAR-RANKINGS
                </h1>
                <p className="text-xl text-muted-foreground">
                  Get exclusive rankings, deals, and expert insights delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Subscription Form */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Our Newsletter
                </CardTitle>
                <CardDescription>
                  Join thousands of car enthusiasts who trust our independent, data-driven rankings.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3">
                    <Label>What are you interested in? (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={(formData.interests || []).includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          />
                          <Label 
                            htmlFor={interest}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Comments (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what specific content you'd like to see..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full btn-luxury" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Subscribe to CAR-RANKINGS
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Weekly Rankings</h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest car rankings delivered every week.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Exclusive Deals</h3>
                <p className="text-sm text-muted-foreground">
                  Be the first to know about special offers and incentives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Access in-depth analysis and buying guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subscribe;