import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-monastery.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Sacred Monasteries
          <span className="block text-monastery-gold">of Sikkim</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the spiritual heritage and breathtaking architecture of Himalayan monasteries, 
          where ancient wisdom meets stunning mountain landscapes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Explore Monasteries
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
            Virtual Tours
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;