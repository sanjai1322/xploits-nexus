import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fire/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Abstract Tech Visual */}
              <div className="absolute inset-0 glass-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fire/20 via-transparent to-ice/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-fire/30 rounded-full animate-float" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-ice/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-foreground/10 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-center">
                    <h3 className="font-heading text-3xl font-bold text-gradient-fire mb-2">SMVEC</h3>
                    <p className="text-muted-foreground text-sm">Puducherry</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">
              About <span className="text-gradient-fire">SMVEC</span> & 
              <span className="text-gradient-ice"> IT Department</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                Sri Manakula Vinayagar Engineering College stands as a beacon of technical 
                excellence in Puducherry, fostering innovation and producing industry-ready 
                professionals for over two decades.
              </p>
              <p>
                The Department of Information Technology is at the forefront of emerging 
                technologies, nurturing talent through cutting-edge curriculum, world-class 
                infrastructure, and industry collaborations.
              </p>
              <p>
                XPLOITS 26 embodies our commitment to technical excellence—bringing together 
                the brightest minds from across the nation to compete, collaborate, and innovate.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '20+', label: 'Years of Excellence' },
                { value: '500+', label: 'Expected Participants' },
                { value: '15+', label: 'Technical Events' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-heading font-bold ${
                    index % 2 === 0 ? 'text-fire' : 'text-ice'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
