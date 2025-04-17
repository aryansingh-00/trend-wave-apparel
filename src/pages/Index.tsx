
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategorySelector from "@/components/products/CategorySelector";
import TrendingSection from "@/components/products/TrendingSection";
import { categories } from "@/data/dummyData";
import { ShoppingBag, Zap, Truck, Gift } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    title: "Curated Collections",
    description: "Hand-picked items from top brands"
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Fast Delivery",
    description: "Get your fashion fix quickly"
  },
  {
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: <Gift className="h-6 w-6 text-primary" />,
    title: "Exclusive Offers",
    description: "Special deals for members"
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // In a real app, we would filter products based on the selected category
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroCarousel />
        
        {/* Category Selector */}
        <div className="container mx-auto px-4 mt-8">
          <CategorySelector 
            categories={categories} 
            onSelect={handleCategorySelect}
          />
        </div>
        
        {/* Features Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Why Shop With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm card-hover"
                >
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Trending Now Section */}
        <TrendingSection 
          title="Trending Now" 
          subtitle="Discover what's hot this season" 
        />
        
        {/* Men's Collection */}
        <TrendingSection 
          title="Men's Collection" 
          subtitle="Stylish picks for him" 
          limit={4}
        />
        
        {/* Women's Collection */}
        <TrendingSection 
          title="Women's Collection" 
          subtitle="Elegant choices for her" 
          limit={4}
        />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of Trends</h2>
            <p className="mb-8 max-w-md mx-auto">
              Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                required
              />
              <button 
                type="submit"
                className="btn-hover bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
