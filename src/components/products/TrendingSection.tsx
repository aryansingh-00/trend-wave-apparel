
import { useState } from "react";
import ProductCard from "./ProductCard";
import { dummyProducts } from "@/data/dummyData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TrendingSectionProps {
  title: string;
  subtitle?: string;
  category?: string;
  subCategory?: string;
  limit?: number;
}

export default function TrendingSection({ 
  title, 
  subtitle, 
  category = 'all',
  subCategory = '',
  limit = 8 
}: TrendingSectionProps) {
  // Filter products based on category and subcategory
  const filteredProducts = dummyProducts
    .filter(product => {
      if (category === 'all') return true;
      if (!subCategory) return product.category === category;
      return product.category === category && product.subcategory === subCategory;
    })
    .slice(0, limit);
  
  return (
    <section className="py-6">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b pb-2">
          <div>
            <h2 className="text-xl font-semibold capitalize">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <ArrowLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Next <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
              VIEW ALL
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="slide-up">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
