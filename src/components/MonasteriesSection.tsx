import MonasteryCard from "./MonasteryCard";
import rumtekImage from "@/assets/rumtek-monastery.jpg";
import pemayangtseImage from "@/assets/pemayangtse-monastery.jpg";
import encheyImage from "@/assets/enchey-monastery.jpg";

const MonasteriesSection = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      description: "One of the most significant monasteries in Sikkim, Rumtek serves as the seat of the Karmapa Lama and houses precious relics and artifacts.",
      image: rumtekImage,
      location: "Gangtok, East Sikkim",
      established: "1966",
      features: [
        "Seat of the Karmapa Lama",
        "Golden Stupa with relics",
        "Traditional Tibetan architecture",
        "Prayer wheels and murals"
      ]
    },
    {
      name: "Pemayangtse Monastery",
      description: "A premier monastery of Sikkim, Pemayangtse is known for its ancient wooden sculptures and panoramic views of the Himalayas.",
      image: pemayangtseImage,
      location: "Pelling, West Sikkim",
      established: "1705",
      features: [
        "Ancient wooden sculptures",
        "Himalayan panoramic views",
        "Sacred Buddhist texts",
        "Traditional meditation halls"
      ]
    },
    {
      name: "Enchey Monastery",
      description: "Built on a site blessed by Lama Drupthob Karpo, Enchey Monastery is a beautiful example of traditional Sikkimese architecture.",
      image: encheyImage,
      location: "Gangtok, East Sikkim",
      established: "1909",
      features: [
        "Traditional Sikkimese architecture",
        "Sacred ritual ceremonies",
        "Beautiful mountain views",
        "Prayer flag courtyard"
      ]
    }
  ];

  return (
    <section id="monasteries" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sacred <span className="text-primary">Monasteries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the spiritual heart of Sikkim through its magnificent monasteries, 
            each telling a unique story of faith, tradition, and architectural brilliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries.map((monastery, index) => (
            <MonasteryCard key={index} {...monastery} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonasteriesSection;