import { motion } from 'framer-motion';
import { Users, Calendar, FileCheck, BookOpen, Phone } from 'lucide-react';

const instructions = [
  {
    icon: Users,
    title: 'Eligibility',
    description: 'Open to all undergraduate students from recognized institutions across India.',
    variant: 'fire' as const,
  },
  {
    icon: FileCheck,
    title: 'Team Size',
    description: 'Varies by event. Solo, duo, or teams of 3-4 members allowed.',
    variant: 'ice' as const,
  },
  {
    icon: Calendar,
    title: 'Registration Deadline',
    description: 'February 10, 2026. Late entries will not be accepted.',
    variant: 'fire' as const,
  },
  {
    icon: BookOpen,
    title: 'Participation',
    description: 'Bring your college ID. One person can participate in max 3 events.',
    variant: 'ice' as const,
  },
  {
    icon: Phone,
    title: 'Need Help?',
    description: 'Contact our coordinators for any queries or assistance.',
    variant: 'fire' as const,
  },
];

const InstructionsSection = () => {
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
          <h2 className="section-title text-gradient-fire-ice">
            Quick Info
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before registering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {instructions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 text-center transition-all duration-300 ${
                item.variant === 'fire' ? 'hover-card-fire' : 'hover-card-ice'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                item.variant === 'fire' 
                  ? 'bg-fire/10 text-fire' 
                  : 'bg-ice/10 text-ice'
              }`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
