import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, Users, DollarSign, Trophy, Phone, Mail, User, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getEventBySlug } from '@/data/events';
import { Button } from '@/components/ui/button';

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = getEventBySlug(eventId || '');

  if (!event) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Event Not Found</h1>
          <Link to="/#events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const categoryPath = `/events/category/${event.categorySlug}`;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className={`absolute inset-0 ${
          event.variant === 'fire' 
            ? 'bg-gradient-to-br from-fire/10 via-transparent to-transparent'
            : 'bg-gradient-to-br from-ice/10 via-transparent to-transparent'
        }`} />
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={categoryPath}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {event.categorySlug.charAt(0).toUpperCase() + event.categorySlug.slice(1)}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className={`inline-block text-6xl p-6 rounded-2xl mb-6 ${
              event.variant === 'fire' 
                ? 'bg-fire/20 shadow-glow-fire' 
                : 'bg-ice/20 shadow-glow-ice'
            }`}>
              {event.icon}
            </div>
            <span className={`text-lg font-medium ${
              event.variant === 'fire' ? 'text-fire' : 'text-ice'
            }`}>
              {event.category}
            </span>
            <h1 className={`text-5xl md:text-6xl font-heading font-bold mt-2 ${
              event.variant === 'fire' ? 'text-gradient-fire' : 'text-gradient-ice'
            }`}>
              {event.name}
            </h1>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <InfoCard icon={<Calendar className="w-5 h-5" />} label="Date" value={event.date} variant={event.variant} />
            <InfoCard icon={<Clock className="w-5 h-5" />} label="Duration" value={event.duration} variant={event.variant} />
            <InfoCard icon={<Users className="w-5 h-5" />} label="Team Size" value={event.teamSize} variant={event.variant} />
            <InfoCard icon={<DollarSign className="w-5 h-5" />} label="Fee" value={event.registrationFee} variant={event.variant} />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-2xl font-heading font-bold mb-4">About This Event</h2>
                <p className="text-foreground/80 leading-relaxed">{event.longDescription}</p>
              </motion.div>

              {/* Rules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-2xl font-heading font-bold mb-4">Rules & Guidelines</h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        event.variant === 'fire' ? 'text-fire' : 'text-ice'
                      }`} />
                      <span className="text-foreground/80">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Venue & Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-2xl font-heading font-bold mb-4">Venue & Timing</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${event.variant === 'fire' ? 'text-fire' : 'text-ice'}`} />
                    <div>
                      <p className="font-semibold">Venue</p>
                      <p className="text-muted-foreground">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`w-5 h-5 ${event.variant === 'fire' ? 'text-fire' : 'text-ice'}`} />
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Prizes & Coordinator */}
            <div className="space-y-8">
              {/* Prizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-card p-6 ${
                  event.variant === 'fire' ? 'border-fire/30' : 'border-ice/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className={`w-6 h-6 ${event.variant === 'fire' ? 'text-fire' : 'text-ice'}`} />
                  <h2 className="text-2xl font-heading font-bold">Prizes</h2>
                </div>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${event.variant === 'fire' ? 'bg-fire/10' : 'bg-ice/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🥇</span>
                      <span className="font-semibold">1st Place</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.prizes.first}</p>
                  </div>
                  <div className={`p-4 rounded-lg ${event.variant === 'fire' ? 'bg-fire/5' : 'bg-ice/5'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🥈</span>
                      <span className="font-semibold">2nd Place</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.prizes.second}</p>
                  </div>
                  {event.prizes.third && (
                    <div className={`p-4 rounded-lg ${event.variant === 'fire' ? 'bg-fire/5' : 'bg-ice/5'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">🥉</span>
                        <span className="font-semibold">3rd Place</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.prizes.third}</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Coordinator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-heading font-bold mb-4">Event Coordinator</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className={`w-5 h-5 ${event.variant === 'fire' ? 'text-fire' : 'text-ice'}`} />
                    <span className="font-semibold">{event.coordinator.name}</span>
                  </div>
                  <a 
                    href={`tel:${event.coordinator.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{event.coordinator.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${event.coordinator.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{event.coordinator.email}</span>
                  </a>
                </div>
              </motion.div>

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    event.variant === 'fire' 
                      ? 'bg-gradient-fire hover:opacity-90 shadow-glow-fire' 
                      : 'bg-gradient-ice hover:opacity-90 shadow-glow-ice'
                  }`}
                >
                  Register Now - {event.registrationFee}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const InfoCard = ({ 
  icon, 
  label, 
  value, 
  variant 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  variant: 'fire' | 'ice' 
}) => (
  <div className={`glass-card p-4 text-center ${
    variant === 'fire' ? 'border-fire/20' : 'border-ice/20'
  }`}>
    <div className={`inline-flex p-2 rounded-lg mb-2 ${
      variant === 'fire' ? 'bg-fire/20 text-fire' : 'bg-ice/20 text-ice'
    }`}>
      {icon}
    </div>
    <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
    <p className="font-semibold text-sm">{value}</p>
  </div>
);

export default EventDetail;
