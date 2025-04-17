
import { useParams } from "react-router-dom";
import { dummyProducts } from "@/data/dummyData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Heart, Truck, Gift, BadgePercent, Star, ShoppingBag } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/layout/BackButton";
import { Badge } from "@/components/ui/badge";

export default function ProductDetails() {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === id);
  const relatedProducts = dummyProducts.filter(p => p.category === product?.category && p.id !== id).slice(0, 5);

  if (!product) {
    return <div className="container py-8">Product not found</div>;
  }

  const discountPercentage = product.discount || 0;
  const originalPrice = product.originalPrice || (product.price * 1.2);
  const savings = originalPrice - product.price;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <div className="container max-w-7xl mx-auto py-4 px-4 flex-1">
        <BackButton />
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Product Image Column */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="border p-2 bg-white rounded-md">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-md"
                />
              </div>
              
              <div className="flex gap-3 mt-4">
                <Button className="flex-1 h-12 font-semibold bg-[#ff9f00] hover:bg-[#ff9f00]/90 text-white">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  ADD TO CART
                </Button>
                <Button className="flex-1 h-12 font-semibold bg-[#fb641b] hover:bg-[#fb641b]/90 text-white">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{product.category} / {product.subcategory}</span>
              </div>
              <h1 className="text-xl md:text-2xl font-medium mt-1">{product.name}</h1>
              
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-green-600 text-white px-2">
                  {product.rating || 4.5} <Star className="h-3 w-3 ml-1 fill-white" />
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {product.reviews || 150} Ratings & Reviews
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-white rounded-md py-3">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold">₹{product.price.toFixed(0)}</span>
                {discountPercentage > 0 && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">₹{originalPrice.toFixed(0)}</span>
                    <span className="text-sm text-green-600 font-medium">{discountPercentage}% off</span>
                  </>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">inclusive of all taxes</div>
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-md p-3">
              <h3 className="text-base font-medium mb-3">Select Size</h3>
              <div className="flex gap-3 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="rounded-full h-10 w-10 border-gray-300"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Offers Section */}
            <Card className="p-4 bg-white">
              <h3 className="font-semibold mb-3 flex items-center">
                <BadgePercent className="mr-2 h-5 w-5 text-green-600" />
                Available Offers
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Badge className="mr-2 bg-green-600 h-5 w-5 rounded-full flex items-center justify-center p-0 mt-0.5">%</Badge>
                  <div>
                    <span className="font-medium">Bank Offer:</span> 10% off on HDFC Bank Credit Cards, up to ₹1500 on orders of ₹5,000 and above
                  </div>
                </li>
                <li className="flex items-start">
                  <Badge className="mr-2 bg-green-600 h-5 w-5 rounded-full flex items-center justify-center p-0 mt-0.5">%</Badge>
                  <div>
                    <span className="font-medium">Special Price:</span> Get extra ₹100 off (price inclusive of discount)
                  </div>
                </li>
                <li className="flex items-start">
                  <Truck className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                  <div>Free shipping on orders above ₹599</div>
                </li>
              </ul>
            </Card>

            {/* Delivery Section */}
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-medium mb-2">Delivery Options</h3>
              <div className="flex border rounded-md p-2">
                <input type="text" placeholder="Enter delivery pincode" className="flex-1 outline-none text-sm" />
                <Button variant="ghost" size="sm" className="text-primary">Check</Button>
              </div>
              <div className="flex items-center text-sm mt-3">
                <Truck className="mr-2 h-4 w-4 text-muted-foreground" />
                Delivery by 3-5 business days | Free delivery
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-medium mb-2">Product Details</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  A premium quality {product.name.toLowerCase()} perfect for any occasion. Made with high-quality materials
                  for comfort and durability.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Material: Cotton Blend</li>
                  <li>Fit: Regular Fit</li>
                  <li>Pattern: Solid</li>
                  <li>Care Instructions: Machine Wash</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <div className="flex items-center justify-between border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold">Similar Products</h2>
            <Button variant="link" className="text-primary">View All</Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
