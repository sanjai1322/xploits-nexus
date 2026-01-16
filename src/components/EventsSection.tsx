import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, BookOpen } from 'lucide-react';
import { competitions, hackathons, workshops } from '@/data/events';
import { ScrollAnimationWrapper, StaggerContainer, StaggerItem } from './ScrollAnimationWrapper';

const categories = [
  {
    id: 'competitions',
    name: 'Competitions',
    description: 'Intense technical battles to prove your skills',
    icon: Code,
    count: competitions.length,
    variant: 'fire' as const,
    gradient: 'from-fire to-fire-muted',
    events: competitions.slice(0, 3),
  },
  {
    id: 'hackathons',
    name: 'Hackathons',
    description: 'Build innovative solutions under pressure',
    icon: Cpu,
    count: hackathons.length,
    variant: 'ice' as const,
    gradient: 'from-ice to-ice-muted',
    events: hackathons.slice(0, 3),
  },
  {
    id: 'workshops',
    name: 'Workshops',
    description: 'Hands-on learning with industry experts',
    icon: BookOpen,
    count: workshops.length,
    variant: 'fire' as const,
    gradient: 'from-fire-muted to-fire',
    events: workshops.slice(0, 3),
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper animation="fadeUp" className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient-fire">Technical</span> Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compete in diverse challenges designed to test your skills across multiple domains
          </p>
        </ScrollAnimationWrapper>

        {/* Category Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.15}>
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <Link
                to={`/events/category/${category.id}`}
                className={`block glass-card p-6 h-full transition-all duration-300 group ${
                  category.variant === 'fire' ? 'hover-card-fire' : 'hover-card-ice'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    category.variant === 'fire' 
                      ? 'bg-fire/20 text-fire' 
                      : 'bg-ice/20 text-ice'
                  }`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    category.variant === 'fire' 
                      ? 'bg-fire/20 text-fire' 
                      : 'bg-ice/20 text-ice'
                  }`}>
                    {category.count} Events
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className={`text-2xl font-heading font-bold mb-2 ${
                  category.variant === 'fire' ? 'text-gradient-fire' : 'text-gradient-ice'
                }`}>
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{category.description}</p>

                {/* Preview Events */}
                <div className="space-y-3 mb-6">
                  {category.events.map((event) => (
                    <div 
                      key={event.id}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        category.variant === 'fire' 
                          ? 'bg-fire/5 hover:bg-fire/10' 
                          : 'bg-ice/5 hover:bg-ice/10'
                      }`}
                    >
                      <span className="text-xl">{event.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{event.name}</p>
                        <p className="text-xs text-muted-foreground">{event.category}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className={`flex items-center justify-center gap-2 font-semibold ${
                  category.variant === 'fire' ? 'text-fire' : 'text-ice'
                }`}>
                  <span>View All {category.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Featured Events Ticker */}
        <ScrollAnimationWrapper animation="scale" delay={0.2}>
          <div className="glass-card p-6">
            <h3 className="text-lg font-heading font-bold mb-4 text-center">
              ⚡ Featured Events
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[...competitions.slice(0, 2), ...hackathons.slice(0, 2), ...workshops.slice(0, 2)].map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    event.variant === 'fire' 
                      ? 'bg-fire/10 hover:bg-fire/20 text-fire border border-fire/20' 
                      : 'bg-ice/10 hover:bg-ice/20 text-ice border border-ice/20'
                  }`}
                >
                  <span>{event.icon}</span>
                  <span className="font-medium text-sm">{event.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default EventsSection;
