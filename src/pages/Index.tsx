import HeroSection from "@/components/home/HeroSection";
import FeaturedRankings from "@/components/home/FeaturedRankings";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PowerBeyondSection from "@/components/home/PowerBeyondSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRankings />
        <PowerBeyondSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
