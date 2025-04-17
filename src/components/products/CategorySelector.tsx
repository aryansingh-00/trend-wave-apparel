
import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
}

export default function CategorySelector({ categories, onSelect }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onSelect(categoryId);
  };
  
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex gap-3 min-w-max px-1">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`category-chip ${
            selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : ''
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-chip ${
              selectedCategory === category.id ? 'bg-primary text-primary-foreground' : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
