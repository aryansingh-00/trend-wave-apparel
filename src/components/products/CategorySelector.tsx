
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
}

const subCategories: SubCategory[] = [
  { id: 'casual', name: 'Casual' },
  { id: 'formal', name: 'Formal' },
  { id: 'streetwear', name: 'Streetwear' }
];

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (categoryId: string, subCategory?: string) => void;
}

export default function CategorySelector({ categories, onSelect }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory('');
    onSelect(categoryId);
  };

  const handleSubCategoryClick = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
    onSelect(selectedCategory, subCategoryId);
  };
  
  return (
    <div className="space-y-3 w-full py-2">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max px-1 justify-center">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`flex flex-col items-center transition-colors`}
          >
            <div className={`h-14 w-14 rounded-full border flex items-center justify-center mb-1 ${
              selectedCategory === 'all' ? 'border-primary text-primary' : 'border-muted'
            }`}>
              <span className="text-lg font-bold">All</span>
            </div>
            <span className="text-xs">All Items</span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center transition-colors`}
            >
              <div className={`h-14 w-14 rounded-full border flex items-center justify-center mb-1 ${
                selectedCategory === category.id ? 'border-primary text-primary' : 'border-muted'
              }`}>
                <span className="text-lg font-bold">{category.name.charAt(0)}</span>
              </div>
              <span className="text-xs">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedCategory !== 'all' && (
        <div className="w-full overflow-x-auto scrollbar-hide border-t pt-3">
          <div className="flex gap-3 min-w-max px-1">
            {subCategories.map((subCategory) => (
              <Button
                key={subCategory.id}
                onClick={() => handleSubCategoryClick(subCategory.id)}
                variant={selectedSubCategory === subCategory.id ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {subCategory.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
