import { Link } from "react-router-dom";
import { BarChart3, Mail, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    categories: [
      { name: "SUVs", href: "/suvs" },
      { name: "Sedans", href: "/sedans" },
      { name: "Trucks", href: "/trucks" },
      { name: "Electric Vehicles", href: "/evs" },
      { name: "Hybrid Vehicles", href: "/hybrids" },
    ],
    rankings: [
      { name: "Best Family Cars", href: "/rankings/best-family-cars" },
      { name: "Most Reliable", href: "/rankings/most-reliable" },
      { name: "Best Value", href: "/rankings/best-value" },
      { name: "Luxury Cars", href: "/rankings/luxury-cars" },
      { name: "Fuel Efficient", href: "/rankings/fuel-efficient" },
    ],
    tools: [
      { name: "Car Comparison", href: "/compare" },
      { name: "Car Calculator", href: "/calculators" },
      { name: "Buying Guide", href: "/guides/buying-guide" },
      { name: "Best Deals", href: "/deals" },
      { name: "Methodology", href: "/methodology" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
      { name: "Careers", href: "/careers" },
      { name: "Awards", href: "/awards" },
    ],
  };

  return (
    <footer className="bg-black border-t border-border text-white">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
            <img 
              src={logo} 
              alt="Car Rankings Logo" 
              className="w-[117px] h-[113px] object-contain"
            />
              {/* <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-white">
                  CAR-RANKINGS
                </span>
                <span className="text-xs text-white -mt-1">
                  Independent • Data-Driven
                </span>
              </div> */}
            </Link>
            
            <p className="text-white mb-6 font-regular">
              Independent, data-driven car rankings and comparisons to help you find the best cars across all categories.
            </p>
            
            <div className="space-y-4">
              {/* <h3 className="font-regular font-semibold text-white">
                Stay Updated
              </h3> */}
              {/* <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary-hover">
                  <Mail className="w-4 h-4" />
                </Button>
              </div> */}
              {/* <p className="text-sm text-muted-foreground">
                Get weekly car news, rankings, and buying guides.
              </p> */}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Top Rankings
            </h3>
            <ul className="space-y-3">
              {footerLinks.rankings.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Tools & Guides
            </h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white">
              <span>© 2025 CAR-RANKINGS. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>Privacy</span>
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors flex items-center space-x-1">
                <FileText className="w-3 h-3" />
                <span>Terms</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-white">
              <span>Powered by Next-IT Services</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;