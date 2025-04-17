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
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  
  const handleCategorySelect = (categoryId: string, subCategoryId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryId || "");
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
        
        {/* Products Sections - Now filtered by category */}
        <TrendingSection 
          title={selectedCategory === 'all' ? "All Products" : `${selectedCategory} ${selectedSubCategory}`} 
          subtitle={selectedSubCategory ? `${selectedSubCategory} Collection` : "Latest Collection"} 
          category={selectedCategory}
          subCategory={selectedSubCategory}
        />
      </main>
      
      <Footer />
    </div>
  );
}
