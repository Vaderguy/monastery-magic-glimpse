import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">SrijanX</div>
            <span className="text-monastery-burgundy font-medium">Sikkim Monasteries</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#monasteries" className="text-foreground hover:text-primary transition-colors">Monasteries</a>
            <a href="#history" className="text-foreground hover:text-primary transition-colors">History</a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors">Tourist Packages</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
          </div>
          
          <Button variant="default" className="hidden md:block">
            Book Travel
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;