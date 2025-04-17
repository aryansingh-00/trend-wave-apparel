
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Way to Trend</h3>
            <p className="text-muted-foreground">
              Discover the latest fashion trends and express your unique style with our curated collections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/men" className="text-muted-foreground hover:text-foreground">Men</Link></li>
              <li><Link to="/women" className="text-muted-foreground hover:text-foreground">Women</Link></li>
              <li><Link to="/kids" className="text-muted-foreground hover:text-foreground">Kids</Link></li>
              <li><Link to="/genz" className="text-muted-foreground hover:text-foreground">Gen Z</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="nav-icon">
                <Instagram />
              </a>
              <a href="#" aria-label="Facebook" className="nav-icon">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="nav-icon">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Way to Trend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
