import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'Dr. R. Srinivasan',
    designation: 'Head of Department',
    department: 'Information Technology',
  },
  {
    name: 'Mrs. Sandhiya M',
    designation: 'Assistant Professor',
    department: 'Information Technology',
  },
  {
    name: 'Mrs. Kiruthiga R',
    designation: 'Assistant Professor',
    department: 'Information Technology',
  },
];

const StaffSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ice/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-gradient-ice">Staff</span> Coordinators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Faculty members guiding XPLOITS 26
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover-card-ice transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-heading font-bold text-muted-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-ice text-sm font-medium mb-1">
                {member.designation}
              </p>
              <p className="text-muted-foreground text-xs">
                {member.department}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
