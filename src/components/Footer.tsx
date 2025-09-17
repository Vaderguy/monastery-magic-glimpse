const Footer = () => {
  return (
    <footer className="bg-monastery-burgundy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-monastery-gold">SrijanX</div>
              <span className="text-white/80">Sikkim Monasteries</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Discover the spiritual heritage of Sikkim through our comprehensive monastery exploration platform. 
              Experience the serenity and wisdom of Himalayan Buddhist traditions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-monastery-gold transition-colors">Facebook</a>
              <a href="#" className="text-white/60 hover:text-monastery-gold transition-colors">Instagram</a>
              <a href="#" className="text-white/60 hover:text-monastery-gold transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-monastery-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#monasteries" className="hover:text-white transition-colors">Monasteries</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-monastery-gold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Email: info@srijanx.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Gangtok, Sikkim, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 SrijanX. All rights reserved. | Technical approach for Sikkim Monastery Digital Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;