
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Way to Trend</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-icon">
            <Home className="w-5 h-5" />
            <span className="sr-only">Home</span>
          </Link>
          <Link to="/search" className="nav-icon">
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Link>
          <Link to="/cart" className="nav-icon">
            <ShoppingBag className="w-5 h-5" />
            <span className="sr-only">Cart</span>
          </Link>
          <Link to="/profile" className="nav-icon">
            <User className="w-5 h-5" />
            <span className="sr-only">Profile</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile menu button (right side) */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/search" className="nav-icon">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="nav-icon">
            <ShoppingBag className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 p-4 fade-in md:hidden">
          <div className="flex flex-col gap-4 text-lg">
            <Link 
              to="/" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link 
              to="/men" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link 
              to="/women" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link 
              to="/kids" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Kids
            </Link>
            <Link 
              to="/genz" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Gen Z
            </Link>
            <Link 
              to="/profile" 
              className="p-3 rounded-md hover:bg-secondary flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5" />
              Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
