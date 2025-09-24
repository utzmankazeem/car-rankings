import HeroSection from "@/components/home/HeroSection";
import FeaturedRankings from "@/components/home/FeaturedRankings";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRankings />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
