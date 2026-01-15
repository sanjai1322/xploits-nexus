import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Calendar, MapPin, User, Phone } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  category: string;
  description: string;
  rules: string[];
  date: string;
  venue: string;
  coordinator: {
    name: string;
    phone: string;
  };
  variant: 'fire' | 'ice';
  icon: string;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Code Blaze',
    category: 'Coding',
    description: 'Competitive programming challenge to test your algorithmic skills and problem-solving abilities.',
    rules: ['Solo event', '2 hours duration', 'Any programming language allowed', 'Internet access restricted'],
    date: 'Feb 15, 10:00 AM',
    venue: 'IT Lab 1',
    coordinator: { name: 'Arun Kumar', phone: '+91 98765 43210' },
    variant: 'fire',
    icon: '🔥',
  },
  {
    id: 2,
    name: 'Frost Hack',
    category: 'Hackathon',
    description: '24-hour hackathon to build innovative solutions for real-world problems.',
    rules: ['Team of 3-4', 'Theme revealed on spot', 'All frameworks allowed', 'Working prototype required'],
    date: 'Feb 15-16',
    venue: 'Seminar Hall',
    coordinator: { name: 'Priya Sharma', phone: '+91 98765 43211' },
    variant: 'ice',
    icon: '❄️',
  },
  {
    id: 3,
    name: 'Tech Quiz',
    category: 'Quiz',
    description: 'Test your knowledge across technology, science, and current affairs.',
    rules: ['Team of 2', 'Multiple rounds', 'Buzzer round included', 'No gadgets allowed'],
    date: 'Feb 15, 2:00 PM',
    venue: 'Auditorium',
    coordinator: { name: 'Ravi Krishnan', phone: '+91 98765 43212' },
    variant: 'fire',
    icon: '⚡',
  },
  {
    id: 4,
    name: 'UI/UX Freeze',
    category: 'Design',
    description: 'Design challenge focused on creating intuitive and beautiful user interfaces.',
    rules: ['Solo/Duo', '4 hours duration', 'Figma/Adobe XD allowed', 'Theme announced on spot'],
    date: 'Feb 15, 11:00 AM',
    venue: 'IT Lab 2',
    coordinator: { name: 'Sneha Patel', phone: '+91 98765 43213' },
    variant: 'ice',
    icon: '🎨',
  },
  {
    id: 5,
    name: 'Debug Inferno',
    category: 'Debugging',
    description: 'Find and fix bugs in given code snippets within the time limit.',
    rules: ['Solo event', '90 minutes', 'Languages: C, Python, Java', 'No external resources'],
    date: 'Feb 15, 3:30 PM',
    venue: 'IT Lab 3',
    coordinator: { name: 'Karthik Raj', phone: '+91 98765 43214' },
    variant: 'fire',
    icon: '🐛',
  },
  {
    id: 6,
    name: 'Paper Glacier',
    category: 'Paper Presentation',
    description: 'Present your research paper on emerging technologies.',
    rules: ['Team of 2', '10 min presentation', 'IEEE format required', 'Q&A session included'],
    date: 'Feb 15, 10:30 AM',
    venue: 'Conference Room',
    coordinator: { name: 'Divya Menon', phone: '+91 98765 43215' },
    variant: 'ice',
    icon: '📄',
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-gradient-fire">Technical</span> Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compete in diverse challenges designed to test your skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 group ${
                event.variant === 'fire' ? 'hover-card-fire' : 'hover-card-ice'
              }`}
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                event.variant === 'fire' 
                  ? 'bg-fire/20 text-fire' 
                  : 'bg-ice/20 text-ice'
              }`}>
                {event.category}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-fire transition-colors">
                {event.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {event.description}
              </p>
              <button className={`text-sm font-medium ${
                event.variant === 'fire' ? 'text-fire' : 'text-ice'
              }`}>
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`glass-card p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative ${
              selectedEvent.variant === 'fire' ? 'glow-fire-sm' : 'glow-ice-sm'
            }`}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-5xl mb-4">{selectedEvent.icon}</div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              selectedEvent.variant === 'fire' 
                ? 'bg-fire/20 text-fire' 
                : 'bg-ice/20 text-ice'
            }`}>
              {selectedEvent.category}
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {selectedEvent.name}
            </h3>
            <p className="text-foreground/80 mb-6">
              {selectedEvent.description}
            </p>

            {/* Rules */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">Rules & Regulations</h4>
              <ul className="space-y-2">
                {selectedEvent.rules.map((rule, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${
                      selectedEvent.variant === 'fire' ? 'bg-fire' : 'bg-ice'
                    }`} />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-foreground/80">
                <Calendar className="w-4 h-4 mr-3 text-fire" />
                {selectedEvent.date}
              </div>
              <div className="flex items-center text-sm text-foreground/80">
                <MapPin className="w-4 h-4 mr-3 text-ice" />
                {selectedEvent.venue}
              </div>
              <div className="flex items-center text-sm text-foreground/80">
                <User className="w-4 h-4 mr-3 text-fire" />
                {selectedEvent.coordinator.name}
              </div>
              <div className="flex items-center text-sm text-foreground/80">
                <Phone className="w-4 h-4 mr-3 text-ice" />
                {selectedEvent.coordinator.phone}
              </div>
            </div>

            <button className={selectedEvent.variant === 'fire' ? 'btn-fire w-full' : 'btn-ice w-full'}>
              Register for {selectedEvent.name}
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default EventsSection;
