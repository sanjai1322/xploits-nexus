import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, Users, DollarSign, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getEventsByCategory, Event } from '@/data/events';

const categoryInfo = {
  competitions: {
    title: 'Competitions',
    subtitle: 'Showcase your skills in intense technical battles',
    gradient: 'text-gradient-fire',
    description: 'From coding challenges to design competitions, prove your expertise and win exciting prizes.',
  },
  hackathons: {
    title: 'Hackathons',
    subtitle: 'Build innovative solutions under pressure',
    gradient: 'text-gradient-ice',
    description: 'Join our hackathons to collaborate, innovate, and create solutions that make a difference.',
  },
  workshops: {
    title: 'Workshops',
    subtitle: 'Learn from industry experts',
    gradient: 'text-gradient-fire',
    description: 'Hands-on sessions to upgrade your skills with the latest technologies and tools.',
  },
};

const EventCategory = () => {
  const { category } = useParams<{ category: string }>();
  const validCategory = category as 'competitions' | 'hackathons' | 'workshops';
  
  const events = getEventsByCategory(validCategory);
  const info = categoryInfo[validCategory];

  if (!info || events.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Category Not Found</h1>
          <Link to="/#events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-fire/5 via-transparent to-ice/5" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#events" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Events
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`text-5xl md:text-6xl font-heading font-bold mb-4 ${info.gradient}`}>
              {info.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{info.subtitle}</p>
            <p className="text-foreground/80 max-w-2xl mx-auto">{info.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/events/${event.id}`}
        className={`block glass-card p-6 h-full transition-all duration-300 group ${
          event.variant === 'fire' ? 'hover-card-fire' : 'hover-card-ice'
        }`}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`text-4xl p-3 rounded-xl ${
            event.variant === 'fire' 
              ? 'bg-fire/20 shadow-glow-fire' 
              : 'bg-ice/20 shadow-glow-ice'
          }`}>
            {event.icon}
          </div>
          <div className="flex-1">
            <span className={`text-sm font-medium ${
              event.variant === 'fire' ? 'text-fire' : 'text-ice'
            }`}>
              {event.category}
            </span>
            <h3 className="text-2xl font-heading font-bold group-hover:text-foreground transition-colors">
              {event.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6">{event.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-fire" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-ice" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-fire" />
            <span>{event.teamSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-ice" />
            <span>{event.registrationFee}</span>
          </div>
        </div>

        {/* Prizes Preview */}
        <div className={`p-4 rounded-lg ${
          event.variant === 'fire' ? 'bg-fire/10' : 'bg-ice/10'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Trophy className={`w-4 h-4 ${event.variant === 'fire' ? 'text-fire' : 'text-ice'}`} />
            <span className="text-sm font-semibold">Prizes</span>
          </div>
          <p className="text-sm text-muted-foreground">🥇 {event.prizes.first}</p>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <span className={`inline-flex items-center gap-2 font-semibold ${
            event.variant === 'fire' ? 'text-fire' : 'text-ice'
          }`}>
            View Details & Register →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCategory;
