import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MonasteryCardProps {
  name: string;
  description: string;
  image: string;
  location: string;
  established: string;
  features: string[];
}

const MonasteryCard = ({ name, description, image, location, established, features }: MonasteryCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-monastery-gold/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
          Est. {established}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">{location}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-foreground/80 leading-relaxed">{description}</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-monastery-burgundy">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button size="sm" className="flex-1">
            Learn More
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            360° View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonasteryCard;