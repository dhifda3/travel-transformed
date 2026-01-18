import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import HajjSection from '@/components/HajjSection';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <HajjSection />
      <AboutSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
