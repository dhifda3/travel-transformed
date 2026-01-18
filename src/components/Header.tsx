import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: language === 'FR' ? 'Accueil' : 'Home', href: '#home' },
    { label: language === 'FR' ? 'Services' : 'Services', href: '#services' },
    { label: language === 'FR' ? 'Hadj & Oumra' : 'Hajj & Umrah', href: '#hajj' },
    { label: language === 'FR' ? 'À Propos' : 'About Us', href: '#about' },
    { label: language === 'FR' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <span className="font-serif text-xl font-bold text-primary">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${
              isScrolled ? 'text-primary' : 'text-card'
            }`}>
              ASFAR
            </span>
            <span className={`text-xs tracking-[0.3em] uppercase transition-colors ${
              isScrolled ? 'text-secondary' : 'text-gold-light'
            }`}>
              Travel
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-card'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
              isScrolled
                ? 'border-border text-foreground hover:bg-muted'
                : 'border-card/30 text-card hover:bg-card/10'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language}</span>
          </button>

          {/* Phone */}
          <a
            href="tel:+237600000000"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isScrolled ? 'text-foreground' : 'text-card'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+237 6 00 00 00 00</span>
          </a>

          {/* CTA Button */}
          <Button variant="hero" size="lg">
            {language === 'FR' ? 'Réserver une Consultation' : 'Book a Consultation'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-card'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 border-b border-border hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
              <Button variant="hero">
                {language === 'FR' ? 'Réserver' : 'Book Now'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
