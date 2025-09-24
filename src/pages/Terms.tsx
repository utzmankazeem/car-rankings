import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Last updated: January 2025
              </p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      By accessing and using CAR-RANKINGS ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Use License</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>Permission is granted to temporarily access the materials on CAR-RANKINGS for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul>
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content and Rankings</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      Our car rankings and reviews are based on our methodology and expert analysis. While we strive for accuracy, rankings are opinions and should be considered alongside other sources when making purchasing decisions.
                    </p>
                    <ul>
                      <li>Rankings are updated regularly but may not reflect the most current information</li>
                      <li>Vehicle specifications and pricing may change without notice</li>
                      <li>We are not responsible for decisions made based solely on our rankings</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Account</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
                    <ul>
                      <li>Safeguarding the password and all activities under your account</li>
                      <li>Immediately notifying us of any unauthorized use of your account</li>
                      <li>Ensuring your account information remains current and accurate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prohibited Uses</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>You may not use our service:</p>
                    <ul>
                      <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                      <li>To violate any international, federal, provincial, or state regulations or laws</li>
                      <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                      <li>To impersonate or attempt to impersonate the company, employees, or other users</li>
                      <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Disclaimer</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      The materials on CAR-RANKINGS are provided on an 'as is' basis. CAR-RANKINGS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <div className="mt-4">
                      <p><strong>Email:</strong> legal@car-rankings.com</p>
                      <p><strong>Address:</strong> CAR-RANKINGS Legal Team<br />
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

export default Terms;