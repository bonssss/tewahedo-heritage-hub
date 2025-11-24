import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sacred-gold to-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg">✝</span>
            </div>
            <span className="font-bold text-xl text-foreground">የኢትዮጵያ ኦርቶዶክስ</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/places" className="text-foreground hover:text-primary transition-colors">
              Holy Places
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-2">
            <Link to="/" className="py-2 text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/places" className="py-2 text-foreground hover:text-primary transition-colors">
              Holy Places
            </Link>
            <Link to="/about" className="py-2 text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
