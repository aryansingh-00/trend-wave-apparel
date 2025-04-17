
import { Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 rounded-full bg-background/60 backdrop-blur-sm"
            onClick={toggleWishlist}
          >
            <Heart 
              className={`w-5 h-5 ${isWishlisted ? 'fill-accent text-accent' : 'wishlist-btn'}`} 
            />
            <span className="sr-only">Add to Wishlist</span>
          </Button>
          <div className="absolute bottom-0 left-0 bg-background/60 backdrop-blur-sm px-2 py-1 text-xs">
            {category}
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-medium line-clamp-2 flex-1">{name}</h3>
          
          <div className="flex items-center justify-between mt-2">
            <p className="font-semibold">${price.toFixed(2)}</p>
            <Button size="sm" className="btn-hover">
              View
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
