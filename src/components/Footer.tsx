import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Send, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="relative -top-12">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Restez Informé
                </h3>
                <p className="text-muted-foreground">
                  Recevez nos offres exclusives et les dernières actualités directement dans votre boîte mail.
                </p>
              </div>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1"
                />
                <Button variant="hero" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary">A</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold">ASFAR</span>
                <span className="block text-xs tracking-[0.3em] text-gold-light uppercase">Travel</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Votre partenaire de confiance pour tous vos voyages. Expertise, qualité et service personnalisé depuis 2010.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Hadj & Oumra', 'Tourisme Médical', 'À Propos', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {['Billetterie Aérienne', 'Réservation Hôtels', 'Assistance Visa', 'Location Véhicules', 'Assurance Voyage', 'Tourisme Médical'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Yaoundé, Cameroun<br />
                  Quartier Bastos, Rue 1234
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+237600000000" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  +237 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:contact@asfartravel.cm" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  contact@asfartravel.cm
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/80">
                  Lun - Sam: 8h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 ASFAR Travel. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-gold transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
