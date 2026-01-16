import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { ScrollAnimationWrapper, StaggerContainer, StaggerItem } from './ScrollAnimationWrapper';

interface Student {
  name: string;
  role: string;
  phone: string;
}

const studentCoordinators: Student[] = [
  { name: 'Vikram S', role: 'President', phone: '+91 98765 11111' },
  { name: 'Anitha R', role: 'Vice President', phone: '+91 98765 22222' },
  { name: 'Suresh K', role: 'Secretary', phone: '+91 98765 33333' },
  { name: 'Lakshmi P', role: 'Joint Secretary', phone: '+91 98765 44444' },
  { name: 'Kumar M', role: 'Treasurer (IT-1)', phone: '+91 98765 55555' },
  { name: 'Priya V', role: 'Treasurer (IT-2)', phone: '+91 98765 66666' },
];

const StudentSection = () => {
  const [revealedPhone, setRevealedPhone] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimationWrapper animation="fadeUp" className="text-center mb-12">
          <h2 className="section-title">
            <span className="text-gradient-fire">Student</span> Coordinators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The driving force behind XPLOITS 26
          </p>
        </ScrollAnimationWrapper>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {studentCoordinators.map((student, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 group hover-card-fire transition-all duration-300">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fire/20 to-fire-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-heading font-bold text-fire">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground truncate">
                      {student.name}
                    </h3>
                    <p className="text-fire text-sm font-medium">
                      {student.role}
                    </p>
                  </div>
                </div>

                {/* Contact Toggle */}
                <div className="mt-4 pt-4 border-t border-border">
                  {revealedPhone === index ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-foreground/80">{student.phone}</span>
                      <a 
                        href={`https://wa.me/${student.phone.replace(/\s+/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-400 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => setRevealedPhone(index)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-fire transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Click to reveal contact
                    </button>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StudentSection;
