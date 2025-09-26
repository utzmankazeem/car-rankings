import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Star, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchBox from "@/components/common/SearchBox";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navCategories = [
    { name: "SUVs", href: "/suvs" },
    { name: "Sedans", href: "/sedans" },
    { name: "Trucks", href: "/trucks" },
    { name: "EVs", href: "/evs" },
    { name: "Hybrids", href: "/hybrids" },
  ];

  const megaMenuItems = [
    {
      title: "Popular Rankings",
      items: [
        "Best Family SUVs",
        "Most Reliable Sedans",
        "Top Luxury Cars",
        "Best Value Trucks",
      ],
    },
    {
      title: "Tools & Guides",
      items: [
        "Compare Tool",
        "Car Calculator",
        "Buying Guide",
        "Methodology",
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-header">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            
          <img 
            src={logo} 
            alt="Car Rankings Logo" 
            className="w-[90px] h-[86px] object-contain"
          />

            {/* <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground">
                CAR-RANKINGS
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Independent • Data-Driven
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navCategories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="nav-link"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            <div className="w-px h-6 bg-border" />
            
            <div className="flex items-center space-x-4">
              <Link to="/rankings" className="nav-link">
                Rankings
              </Link>
              <Link to="/compare" className="nav-link">
                Compare
              </Link>
              <Link to="/deals" className="nav-link">
                Best Deals
              </Link>
              <Link to="/guides" className="nav-link">
                Guides
              </Link>
            </div>
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBox className="w-64" />
            <a
              href="https://wa.me/2349034737321?text=Hi%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button className="btn-luxury">
              Talk to an Expert
            </Button>
</a>

          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg">Categories</h3>
                  {navCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg">Tools</h3>
                  <Link
                    to="/rankings"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Rankings
                  </Link>
                  <Link
                    to="/compare"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Compare
                  </Link>
                  <Link
                    to="/deals"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Best Deals
                  </Link>
                </div>

                <div className="pt-6 border-t border-border">
                  <Link to="/subscribe" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-luxury">
                      Subscribe
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;