import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TouristPackages = () => {
  const packages = [
    {
      name: "Spiritual Journey",
      duration: "3 Days / 2 Nights",
      price: "₹15,000",
      description: "A peaceful pilgrimage covering the most sacred monasteries of Sikkim",
      highlights: [
        "Rumtek Monastery guided tour",
        "Meditation sessions with monks",
        "Traditional prayer ceremony participation",
        "Local Buddhist cuisine experience"
      ],
      included: ["Accommodation", "Meals", "Transport", "Guide"]
    },
    {
      name: "Cultural Heritage",
      duration: "5 Days / 4 Nights", 
      price: "₹28,000",
      description: "Comprehensive exploration of Sikkim's monastic heritage and culture",
      highlights: [
        "All major monasteries tour",
        "Traditional craft workshops",
        "Mountain trekking to remote monasteries",
        "Cultural performance evenings"
      ],
      included: ["Accommodation", "All Meals", "Transport", "Guide", "Activities"]
    },
    {
      name: "Photography Expedition",
      duration: "7 Days / 6 Nights",
      price: "₹45,000", 
      description: "Perfect package for photography enthusiasts and nature lovers",
      highlights: [
        "Sunrise/sunset monastery photography",
        "Professional photography guidance",
        "Access to restricted monastery areas",
        "Himalayan landscape photography"
      ],
      included: ["Luxury Stay", "All Meals", "Private Transport", "Photography Guide", "Equipment"]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tourist <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated packages designed to offer you the most authentic 
            and enriching monastery experience in Sikkim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg">
                <span className="font-bold text-lg">{pkg.price}</span>
              </div>
              
              <CardHeader className="pt-12">
                <CardTitle className="text-2xl text-monastery-burgundy">{pkg.name}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {pkg.duration}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Package Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-monastery-gold rounded-full mr-3 mt-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.included.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full mt-6">
                  Book Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom package? We can create personalized itineraries based on your preferences.
          </p>
          <Button variant="outline" size="lg">
            Customize Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TouristPackages;