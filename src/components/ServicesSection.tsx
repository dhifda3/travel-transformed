import { Plane, FileCheck, Car, Shield, CreditCard, MapPin, Stethoscope, Building } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Billetterie Aérienne',
    description: 'Réservation de vols nationaux et internationaux aux meilleurs tarifs avec toutes les compagnies.',
    features: ['Toutes compagnies', 'E-Tickets', 'Support 24/7'],
  },
  {
    icon: FileCheck,
    title: 'Assistance Visa',
    description: 'Accompagnement complet pour l\'obtention de vos visas touristiques, d\'affaires et de pèlerinage.',
    features: ['Tous pays', 'Suivi dossier', 'Délais express'],
  },
  {
    icon: Car,
    title: 'Location de Véhicules',
    description: 'Large gamme de véhicules pour vos déplacements professionnels ou personnels.',
    features: ['Avec chauffeur', 'Sans chauffeur', 'Transferts aéroport'],
  },
  {
    icon: Shield,
    title: 'Assurance Voyage',
    description: 'Protection complète pour voyager l\'esprit tranquille partout dans le monde.',
    features: ['Rapatriement', 'Bagages', 'Annulation'],
  },
  {
    icon: Stethoscope,
    title: 'Tourisme Médical',
    description: 'Organisation de séjours médicaux dans les meilleurs hôpitaux internationaux.',
    features: ['Tunisie', 'Turquie', 'Europe'],
  },
  {
    icon: Building,
    title: 'Réservation Hôtels',
    description: 'Un large choix d\'hébergements adaptés à tous les budgets et toutes les destinations.',
    features: ['Économique', 'Business', 'Luxe'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
            Nos Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Une Expertise Complète à Votre Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Depuis 2010, ASFAR Travel vous accompagne dans tous vos projets de voyage avec un service personnalisé et une expertise reconnue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gold/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-300">
                <service.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
