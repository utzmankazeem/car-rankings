import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Last updated: January 2025
              </p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul>
                      <li>Create an account or profile</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Use our comparison tools</li>
                      <li>Contact us for support</li>
                      <li>Participate in surveys or feedback</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide and improve our services</li>
                      <li>Send you newsletters and updates (with your consent)</li>
                      <li>Respond to your comments and questions</li>
                      <li>Analyze usage patterns to improve user experience</li>
                      <li>Protect against fraud and abuse</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                    <ul>
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>With service providers who assist in our operations (under strict confidentiality)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cookies and Tracking</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We use cookies and similar technologies to:</p>
                    <ul>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Improve website functionality</li>
                      <li>Provide personalized content recommendations</li>
                    </ul>
                    <p>You can control cookie preferences through your browser settings.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Delete your account and data</li>
                      <li>Opt out of marketing communications</li>
                      <li>Data portability (receive your data in a standard format)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>If you have questions about this Privacy Policy, please contact us at:</p>
                    <div className="mt-4">
                      <p><strong>Email:</strong> privacy@car-rankings.com</p>
                      <p><strong>Address:</strong> CAR-RANKINGS Privacy Team<br />
                      123 Auto Review Lane<br />
                      Detroit, MI 48201</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;