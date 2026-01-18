import { Button } from '@/components/ui/button';
import { Award, Users, Globe, Clock, ArrowRight } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const stats = [
  { icon: Users, value: '5000+', label: 'Clients Satisfaits' },
  { icon: Globe, value: '50+', label: 'Destinations' },
  { icon: Award, value: '15', label: 'Années d\'Expérience' },
  { icon: Clock, value: '24/7', label: 'Support Client' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={teamPhoto}
                alt="Équipe ASFAR Travel"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Excellence</p>
                  <p className="text-sm text-muted-foreground">Depuis 2010</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Reconnus pour notre service de qualité et notre expertise dans le voyage.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
              Qui Sommes-Nous
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Votre Partenaire de Voyage de Confiance
            </h2>
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                ASFAR TRAVEL est une agence de voyage basée au Cameroun, spécialisée dans l'organisation de voyages sur mesure, le pèlerinage (Hadj et Oumra), le tourisme médical et la billetterie aérienne.
              </p>
              <p>
                Notre équipe de professionnels expérimentés met tout en œuvre pour vous offrir des services de qualité supérieure. Nous sommes agréés IATA et reconnus par le Ministère du Tourisme du Cameroun.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-card">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              En Savoir Plus
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
