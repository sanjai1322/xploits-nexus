import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroVideo from '@/assets/hero-video.mp4';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your event date here
  const eventDate = new Date('2026-02-15T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBg}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fire/5 via-transparent to-ice/5 animate-pulse" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* College Info */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase">
            Department of Information Technology
          </p>
          <p className="text-foreground/80 text-xs md:text-sm mt-1">
            Sri Manakula Vinayagar Engineering College, Puducherry
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black breathe">
            <span className="text-gradient-fire">XPLO</span>
            <span className="text-gradient-ice">ITS</span>
            <span className="text-foreground ml-2 md:ml-4">26</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/90 mt-4 tracking-[0.3em] uppercase font-light">
            National Level Technical Symposium
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex justify-center gap-3 md:gap-6">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div key={index} className="glass-card p-3 md:p-5 min-w-[70px] md:min-w-[100px]">
                <div className="text-2xl md:text-4xl font-heading font-bold text-fire pulse-glow">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div variants={itemVariants} className="mb-10 space-y-2">
          <p className="text-foreground/80 text-sm md:text-base">
            <span className="text-fire font-semibold">📅 February 15, 2026</span>
            <span className="mx-4 text-muted-foreground">|</span>
            <span className="text-ice font-semibold">📍 SMVEC Campus, Puducherry</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-fire text-base md:text-lg">
            Register Now
          </button>
          <button className="btn-ice text-base md:text-lg">
            View Events
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-fire rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
