import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FilterValues {
  search: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  baths: string;
  location: string;
}

interface PropertyFiltersProps {
  filters: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
  locations: string[];
}

export const PropertyFilters = ({ filters, onFilterChange, locations }: PropertyFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const updateFilter = (key: keyof FilterValues, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({
      search: "",
      minPrice: "",
      maxPrice: "",
      beds: "",
      baths: "",
      location: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== "");

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-10 h-12 bg-card border-border"
          />
        </div>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filters
        </Button>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="lg"
            className="h-12 px-4 text-muted-foreground hover:text-foreground"
            onClick={clearFilters}
          >
            <X className="w-5 h-5 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 bg-card rounded-xl border border-border animate-fade-in">
          {/* Min Price */}
          <Select value={filters.minPrice} onValueChange={(v) => updateFilter("minPrice", v)}>
            <SelectTrigger className="h-11 bg-background">
              <SelectValue placeholder="Min Price" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="500000">$500K+</SelectItem>
              <SelectItem value="1000000">$1M+</SelectItem>
              <SelectItem value="1500000">$1.5M+</SelectItem>
              <SelectItem value="2000000">$2M+</SelectItem>
              <SelectItem value="3000000">$3M+</SelectItem>
            </SelectContent>
          </Select>

          {/* Max Price */}
          <Select value={filters.maxPrice} onValueChange={(v) => updateFilter("maxPrice", v)}>
            <SelectTrigger className="h-11 bg-background">
              <SelectValue placeholder="Max Price" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="1000000">Up to $1M</SelectItem>
              <SelectItem value="2000000">Up to $2M</SelectItem>
              <SelectItem value="3000000">Up to $3M</SelectItem>
              <SelectItem value="5000000">Up to $5M</SelectItem>
              <SelectItem value="10000000">Up to $10M</SelectItem>
            </SelectContent>
          </Select>

          {/* Beds */}
          <Select value={filters.beds} onValueChange={(v) => updateFilter("beds", v)}>
            <SelectTrigger className="h-11 bg-background">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="1">1+ Beds</SelectItem>
              <SelectItem value="2">2+ Beds</SelectItem>
              <SelectItem value="3">3+ Beds</SelectItem>
              <SelectItem value="4">4+ Beds</SelectItem>
              <SelectItem value="5">5+ Beds</SelectItem>
            </SelectContent>
          </Select>

          {/* Baths */}
          <Select value={filters.baths} onValueChange={(v) => updateFilter("baths", v)}>
            <SelectTrigger className="h-11 bg-background">
              <SelectValue placeholder="Baths" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="1">1+ Baths</SelectItem>
              <SelectItem value="2">2+ Baths</SelectItem>
              <SelectItem value="3">3+ Baths</SelectItem>
              <SelectItem value="4">4+ Baths</SelectItem>
            </SelectContent>
          </Select>

          {/* Location */}
          <Select value={filters.location} onValueChange={(v) => updateFilter("location", v)}>
            <SelectTrigger className="h-11 bg-background">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
