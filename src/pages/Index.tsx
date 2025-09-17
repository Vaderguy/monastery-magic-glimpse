import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MonasteriesSection from "@/components/MonasteriesSection";
import TechnicalApproach from "@/components/TechnicalApproach";
import TouristPackages from "@/components/TouristPackages";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MonasteriesSection />
      <TechnicalApproach />
      <TouristPackages />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
