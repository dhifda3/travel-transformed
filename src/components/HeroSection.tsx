import { Button } from '@/components/ui/button';
import { Award, Star } from 'lucide-react';
import heroMecca from '@/assets/hero-mecca.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroMecca}
          alt="Hajj & Umrah"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero-overlay)' }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          {/* IATA Badge */}
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-card text-sm font-medium">Agent IATA Certifié</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold fill-gold" />
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-card font-bold mb-4 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Hajj & Umrah
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl md:text-3xl text-gold-light font-serif italic mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Votre Pèlerinage, Notre Engagement
          </p>

          {/* Description */}
          <p 
            className="text-lg text-card/90 mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Des forfaits tout compris pour un voyage spirituel inoubliable vers les lieux saints de l'Islam.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="xl">
              Découvrir nos Forfaits
            </Button>
            <Button variant="heroOutline" size="xl">
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-card/60">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-card/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
