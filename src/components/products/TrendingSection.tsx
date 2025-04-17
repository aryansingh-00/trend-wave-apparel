
import { useState } from "react";
import ProductCard from "./ProductCard";
import { dummyProducts } from "@/data/dummyData";

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
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold capitalize">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
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
