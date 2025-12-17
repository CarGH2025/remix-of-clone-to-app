import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AgentProfile } from "@/components/AgentProfile";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AgentProfile />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="properties">
        <FeaturedProperties />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
