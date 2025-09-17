import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechnicalApproach = () => {
  const technologies = {
    frontend: [
      { name: "HTML5, CSS3, JavaScript", description: "Structure and design foundation" },
      { name: "React.js / Next.js", description: "Dynamic, SEO-friendly UI components" },
      { name: "Tailwind CSS", description: "Responsive styling framework" },
      { name: "Three.js / A-Frame", description: "360° monastery virtual tours" }
    ],
    backend: [
      { name: "Node.js with Express.js", description: "Fast, scalable REST API" },
      { name: "MongoDB", description: "Flexible multimedia content storage" },
      { name: "AWS/Azure/GCP", description: "Cloud hosting and CDN" },
      { name: "Firebase", description: "Real-time database authentication" }
    ],
    features: [
      "Tourist browsing with monastery details",
      "Blog section with historical content",
      "Map integration with location services", 
      "Booking system for travel packages",
      "Responsive design for all devices",
      "SEO optimization for search engines"
    ]
  };

  const phases = [
    "Requirement Gathering & Research",
    "Design & Prototyping", 
    "Development (Frontend → Backend)",
    "Testing & Quality Assurance",
    "Deployment & Maintenance"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Approach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive technical framework ensuring scalable, maintainable, and user-friendly monastery exploration platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-monastery-burgundy">Frontend Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technologies.frontend.map((tech, index) => (
                <div key={index} className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-monastery-burgundy">Backend & Infrastructure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technologies.backend.map((tech, index) => (
                <div key={index} className="border-l-4 border-accent/30 pl-4">
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-monastery-burgundy">Key Features & Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="p-3 justify-start text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-monastery-burgundy">Implementation Phases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="ml-3 text-foreground font-medium">{phase}</span>
                  {index < phases.length - 1 && (
                    <div className="w-8 h-px bg-muted-foreground/30 ml-4 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalApproach;