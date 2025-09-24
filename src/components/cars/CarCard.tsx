import { Link } from "react-router-dom";
import { Heart, GitCompare, Star, Fuel, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    category: string;
    image: string;
    startingPrice: number;
    score: number;
    rank?: number;
    highlights: string[];
    specs: {
      mpg?: string;
      seating?: number;
      safetyRating?: number;
      horsepower?: number;
    };
    badges?: string[];
  };
  onCompare?: (carId: string) => void;
  onSave?: (carId: string) => void;
  showRank?: boolean;
}

const CarCard = ({ car, onCompare, onSave, showRank = false }: CarCardProps) => {
  const getScoreClass = (score: number) => {
    if (score >= 9.0) return "score-excellent";
    if (score >= 8.5) return "score-good";
    if (score >= 8.0) return "score-average";
    return "score-poor";
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="card-luxury overflow-hidden group">
      {/* Image & Rank */}
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {showRank && car.rank && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-bold text-lg px-3 py-1">
              #{car.rank}
            </Badge>
          </div>
        )}
        
        {car.badges && car.badges.length > 0 && (
          <div className="absolute top-4 right-4 space-y-2">
            {car.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-accent text-accent-foreground">
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {onSave && (
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-background"
              onClick={(e) => {
                e.preventDefault();
                onSave(car.id);
              }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          )}
          {onCompare && (
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-background"
              onClick={(e) => {
                e.preventDefault();
                onCompare(car.id);
              }}
            >
              <GitCompare className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-muted-foreground text-sm">{car.category}</p>
          </div>
          <div className="text-right">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getScoreClass(car.score)}`}>
              {car.score}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Score</div>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {car.specs.mpg && (
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg mb-2 mx-auto">
                <Fuel className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-medium">{car.specs.mpg}</div>
              <div className="text-xs text-muted-foreground">MPG</div>
            </div>
          )}
          {car.specs.seating && (
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg mb-2 mx-auto">
                <Users className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-medium">{car.specs.seating}</div>
              <div className="text-xs text-muted-foreground">Seats</div>
            </div>
          )}
          {car.specs.safetyRating && (
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-lg mb-2 mx-auto">
                <Shield className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-medium">{car.specs.safetyRating}/5</div>
              <div className="text-xs text-muted-foreground">Safety</div>
            </div>
          )}
        </div>

        {/* Highlights */}
        {car.highlights.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {car.highlights.slice(0, 2).map((highlight) => (
                <Badge key={highlight} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-sm text-muted-foreground">Starting at</div>
            <div className="text-lg font-bold">{formatPrice(car.startingPrice)}</div>
          </div>
          <Link to={`/cars/${car.make.toLowerCase()}/${car.model.toLowerCase().replace(/\s+/g, '-')}`}>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;