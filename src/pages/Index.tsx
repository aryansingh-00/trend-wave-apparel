
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategorySelector from "@/components/products/CategorySelector";
import TrendingSection from "@/components/products/TrendingSection";
import { categories } from "@/data/dummyData";
import { ShoppingBag, Zap, Truck, Gift, Tag, CreditCard, Shield } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    title: "Top Selections",
    description: "Handpicked products"
  },
  {
    icon: <Tag className="h-6 w-6 text-primary" />,
    title: "Great Deals",
    description: "New deals every day"
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: "Easy Payment",
    description: "All payment methods"
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "100% Secure",
    description: "14-day return policy"
  },
  {
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "Fast Shipping",
    description: "Quick delivery"
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
    <div className="min-h-screen flex flex-col bg-[#f1f3f6]">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroCarousel />
        
        {/* Category Selector */}
        <div className="bg-white shadow-sm py-2">
          <div className="container mx-auto px-4">
            <CategorySelector 
              categories={categories} 
              onSelect={handleCategorySelect}
            />
          </div>
        </div>
        
        {/* Features Section */}
        <section className="py-4 bg-white shadow-sm mt-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className="mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Deal of the Day Section */}
        <div className="mt-2">
          <TrendingSection 
            title="Deal of the Day" 
            subtitle="Ends in 10:45:12"
            limit={5}
          />
        </div>
        
        {/* Products Sections - Now filtered by category */}
        <div className="mt-2 bg-white shadow-sm">
          <TrendingSection 
            title={selectedCategory === 'all' ? "Recommended Items" : `${selectedCategory} ${selectedSubCategory}`} 
            subtitle={selectedSubCategory ? `${selectedSubCategory} Collection` : "Products you may like"} 
            category={selectedCategory}
            subCategory={selectedSubCategory}
            limit={10}
          />
        </div>
        
        {/* Top Offers Section */}
        <div className="mt-2">
          <TrendingSection 
            title="Top Offers" 
            subtitle="Best Discounts"
            limit={5}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
