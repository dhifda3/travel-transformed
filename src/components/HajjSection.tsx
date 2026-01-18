import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';
import heroMecca from '@/assets/hero-mecca.jpg';

const packages = [
  {
    name: 'Oumra Économique',
    duration: '10 jours',
    price: 'À partir de 1,500,000 FCFA',
    features: [
      'Vol aller-retour',
      'Hébergement 3 étoiles',
      'Transferts aéroport',
      'Guide francophone',
      'Visite des lieux saints',
    ],
    popular: false,
  },
  {
    name: 'Oumra Premium',
    duration: '14 jours',
    price: 'À partir de 2,500,000 FCFA',
    features: [
      'Vol direct premium',
      'Hébergement 5 étoiles',
      'Pension complète',
      'Guide personnel',
      'Excursions Médine',
      'Assistance VIP',
    ],
    popular: true,
  },
  {
    name: 'Hadj Complet',
    duration: '21 jours',
    price: 'À partir de 4,000,000 FCFA',
    features: [
      'Tout inclus',
      'Hébergement Mina & Arafat',
      'Restauration complète',
      'Accompagnement spirituel',
      'Visa & Assurance',
      'Sacrifice inclus',
    ],
    popular: false,
  },
];

const HajjSection = () => {
  return (
    <section id="hajj" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroMecca}
          alt="Mecca background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
            Hadj & Oumra
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Réalisez Votre Pèlerinage
          </h2>
          <p className="text-lg text-muted-foreground">
            ASFAR Travel est agréé par le Ministère du Hadj d'Arabie Saoudite. Nous organisons des pèlerinages depuis plus de 10 ans avec un taux de satisfaction de 98%.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-card transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? 'ring-2 ring-gold shadow-gold'
                  : 'border border-border'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-gold text-primary px-4 py-1.5 rounded-full shadow-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Le Plus Populaire</span>
                  </div>
                </div>
              )}

              {/* Package Info */}
              <div className="text-center mb-6 pt-4">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.duration}</p>
                <div className="text-secondary font-semibold text-lg">
                  {pkg.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? 'hero' : 'outline'}
                className="w-full"
                size="lg"
              >
                Réserver
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous avez des questions ou besoin d'un forfait personnalisé?
          </p>
          <Button variant="link" className="text-secondary">
            Contactez un conseiller →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HajjSection;
