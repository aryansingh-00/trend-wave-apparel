
import { useParams } from "react-router-dom";
import { dummyProducts } from "@/data/dummyData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Heart, Truck, Gift, BadgePercent } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === id);
  const relatedProducts = dummyProducts.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return <div className="container py-8">Product not found</div>;
  }

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-medium mb-2">Select Size</h3>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className="h-10 w-10"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart />
            </Button>
          </div>

          {/* Offers Section */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <BadgePercent className="mr-2" />
              Available Offers
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Gift className="mr-2 h-4 w-4" />
                10% instant discount on VISA cards
              </li>
              <li className="flex items-center">
                <Truck className="mr-2 h-4 w-4" />
                Free shipping on orders above $50
              </li>
            </ul>
          </Card>

          {/* Product Description */}
          <div>
            <h3 className="font-semibold mb-2">Product Details</h3>
            <p className="text-muted-foreground">
              A premium quality clothing item perfect for any occasion. Made with high-quality materials
              for comfort and durability.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} {...relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}
