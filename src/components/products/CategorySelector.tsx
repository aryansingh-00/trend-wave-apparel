
import { useState } from "react";

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
    <div className="space-y-4 w-full py-4">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max px-1">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`category-chip ${
              selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
            } px-4 py-2 rounded-full text-sm font-medium transition-colors`}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`category-chip ${
                selectedCategory === category.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'
              } px-4 py-2 rounded-full text-sm font-medium transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory !== 'all' && (
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 min-w-max px-1">
            {subCategories.map((subCategory) => (
              <button
                key={subCategory.id}
                onClick={() => handleSubCategoryClick(subCategory.id)}
                className={`category-chip ${
                  selectedSubCategory === subCategory.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                } px-4 py-2 rounded-full text-sm font-medium transition-colors`}
              >
                {subCategory.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
