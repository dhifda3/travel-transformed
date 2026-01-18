import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';
import heroMecca from '@/assets/hero-mecca.jpg';
import heroAviation from '@/assets/hero-aviation.jpg';
import heroMedical from '@/assets/hero-medical.jpg';

const slides = [
  {
    image: heroMecca,
    title: 'Hajj & Umrah',
    subtitle: 'Votre Pèlerinage, Notre Engagement',
    description: 'Des forfaits tout compris pour un voyage spirituel inoubliable vers les lieux saints de l\'Islam.',
    cta: 'Découvrir nos Forfaits',
  },
  {
    image: heroAviation,
    title: 'Billetterie Premium',
    subtitle: 'Voyagez avec Élégance',
    description: 'Billets d\'avion au meilleur prix avec un service personnalisé et une assistance 24/7.',
    cta: 'Réserver un Vol',
  },
  {
    image: heroMedical,
    title: 'Tourisme Médical',
    subtitle: 'Soins de Qualité Mondiale',
    description: 'Accédez aux meilleurs établissements de santé avec un accompagnement complet.',
    cta: 'En Savoir Plus',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero-overlay)' }}
          />
        </div>
      ))}

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
            key={`title-${currentSlide}`}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-card font-bold mb-4 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-2xl md:text-3xl text-gold-light font-serif italic mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* Description */}
          <p 
            key={`desc-${currentSlide}`}
            className="text-lg text-card/90 mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="xl">
              {slides[currentSlide].cta}
            </Button>
            <Button variant="heroOutline" size="xl">
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 flex items-center justify-center text-card hover:bg-card/20 transition-all pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 flex items-center justify-center text-card hover:bg-card/20 transition-all pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gold'
                : 'w-6 bg-card/40 hover:bg-card/60'
            }`}
          />
        ))}
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
