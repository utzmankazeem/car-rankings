import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { searchCars, getPopularSearches, type SearchResult } from "@/lib/search-utils";

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
}

const SearchBox = ({ className = "", placeholder = "Search cars..." }: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = getPopularSearches();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowPopular(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim()) {
      const searchResults = searchCars(searchQuery);
      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
      setShowPopular(false);
    } else {
      setResults([]);
      setIsOpen(false);
      setShowPopular(false);
    }
  };

  const handleFocus = () => {
    if (!query.trim()) {
      setShowPopular(true);
      setIsOpen(true);
    } else if (results.length > 0) {
      setIsOpen(true);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    setShowPopular(false);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setShowPopular(false);
    setQuery("");
  };

  const handlePopularClick = (search: string) => {
    setQuery(search);
    handleSearch(search);
  };

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'car':
        return '🚗';
      case 'ranking':
        return '🏆';
      case 'guide':
        return '📖';
      case 'deal':
        return '💰';
      default:
        return '🔍';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleFocus}
          className="pl-10 pr-10 bg-muted/50 border-0"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {showPopular ? (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Popular Searches</h3>
                <div className="space-y-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularClick(search)}
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">🔍</span>
                        <span className="text-sm">{search}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-2">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    to={result.url}
                    onClick={handleResultClick}
                    className="block px-3 py-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-3 text-lg">{getResultIcon(result.type)}</span>
                        <div>
                          <div className="font-medium text-sm">{result.title}</div>
                          {result.subtitle && (
                            <div className="text-xs text-muted-foreground">{result.subtitle}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {result.score && (
                          <Badge variant="secondary" className="text-xs">
                            {result.score}/10
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs capitalize">
                          {result.type}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                ))}
                
                {results.length === 0 && query && (
                  <div className="px-3 py-4 text-center text-muted-foreground text-sm">
                    No results found for "{query}"
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBox;