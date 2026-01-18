import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const news = [
  {
    date: '15 Janvier 2024',
    category: 'Hadj 2024',
    title: 'Ouverture des Inscriptions pour le Hadj 2024',
    excerpt: 'Les inscriptions pour le pèlerinage 2024 sont désormais ouvertes. Places limitées, réservez dès maintenant.',
  },
  {
    date: '10 Janvier 2024',
    category: 'Promotion',
    title: 'Offre Spéciale Oumra Ramadan',
    excerpt: 'Profitez de nos forfaits spéciaux pour l\'Oumra pendant le mois béni du Ramadan. Réduction de 15% sur tous les forfaits.',
  },
  {
    date: '5 Janvier 2024',
    category: 'Partenariat',
    title: 'Nouveau Partenariat avec Turkish Airlines',
    excerpt: 'ASFAR Travel devient partenaire officiel de Turkish Airlines pour des vols directs vers Istanbul.',
  },
  {
    date: '1 Janvier 2024',
    category: 'Tourisme Médical',
    title: 'Extension de nos Services Médicaux',
    excerpt: 'Nous élargissons notre réseau de cliniques partenaires en Tunisie et en Turquie.',
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
              Actualités
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Dernières Nouvelles
            </h2>
          </div>
          <Button variant="outline" className="md:self-end">
            Toutes les Actualités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-gold/20 cursor-pointer"
            >
              {/* Category */}
              <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-secondary mb-4">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {item.excerpt}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
