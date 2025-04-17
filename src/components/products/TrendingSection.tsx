
import { useState } from "react";
import ProductCard from "./ProductCard";
import { dummyProducts } from "@/data/dummyData";

interface TrendingSectionProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

export default function TrendingSection({ title, subtitle, limit = 8 }: TrendingSectionProps) {
  // In a real app, we would fetch products from an API
  const products = dummyProducts.slice(0, limit);
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <a href="#" className="text-primary hover:underline mt-2 sm:mt-0">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="slide-up" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
