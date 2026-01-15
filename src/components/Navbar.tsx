import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Events', href: '#events' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="font-heading text-xl font-bold"
          >
            <span className="text-gradient-fire">XPLO</span>
            <span className="text-gradient-ice">ITS</span>
            <span className="text-foreground ml-1">26</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <button className="btn-fire text-sm py-2 px-6">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 glass-card md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg text-foreground/70 hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <button className="btn-fire text-base mt-4">
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
