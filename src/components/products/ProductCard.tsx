
import { Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  originalPrice?: number;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category,
  rating,
  reviews,
  discount,
  originalPrice
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <Link to={`/product/${id}`} className="h-full block">
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 rounded-full bg-background/60 backdrop-blur-sm"
            onClick={toggleWishlist}
          >
            <Heart 
              className={`w-5 h-5 ${isWishlisted ? 'fill-accent text-accent' : ''}`} 
            />
            <span className="sr-only">Add to Wishlist</span>
          </Button>
          
          {discount && discount > 0 && (
            <Badge className="absolute bottom-2 left-2 bg-accent text-white font-semibold">
              {discount}% OFF
            </Badge>
          )}
        </div>
        
        <div className="p-3 flex flex-col flex-1 bg-white">
          <div className="text-xs text-muted-foreground mb-1">{category}</div>
          <h3 className="font-medium line-clamp-1 text-sm">{name}</h3>
          
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-base">₹{price.toFixed(0)}</span>
              {originalPrice && (
                <span className="text-muted-foreground line-through text-xs">₹{originalPrice.toFixed(0)}</span>
              )}
            </div>
          </div>
          
          {rating && (
            <div className="mt-1 flex items-center gap-1">
              <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded flex items-center">
                {rating} ★
              </span>
              {reviews && <span className="text-xs text-muted-foreground">({reviews})</span>}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
