import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer=() => {
    return (
 <footer className="bg-foreground/5 py-12 border-t border-border mt-auto">
        <div className="container mx-auto px-4 space-y-6 text-center">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-6 h-6 inline" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6 inline" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6 inline" />
            </a>
          </div>

          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="px-4 py-2 rounded-l-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-2 bg-primary text-background rounded-r-lg font-semibold hover:bg-primary/80 transition-colors">
              Subscribe
            </button>
          </div>

          <p className="text-muted-foreground text-sm mt-4">
            © 2025 Ethiopian Orthodox Church Historical Platform. Preserving sacred heritage.
          </p>
        </div>
      </footer>
    );
};
export default Footer;