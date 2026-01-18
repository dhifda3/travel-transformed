import { Shield, Award, Globe2, Users } from 'lucide-react';

const TrustBar = () => {
  const certifications = [
    {
      icon: Award,
      title: 'IATA Certified',
      subtitle: 'Agent Agréé',
    },
    {
      icon: Shield,
      title: 'Ministère du Tourisme',
      subtitle: 'Licence Officielle',
    },
    {
      icon: Globe2,
      title: 'Ministère du Hadj',
      subtitle: 'Accréditation Saoudienne',
    },
    {
      icon: Users,
      title: '+5000 Clients',
      subtitle: 'Satisfaits depuis 2010',
    },
  ];

  return (
    <section className="relative -mt-16 z-10 container mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
