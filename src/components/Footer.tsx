import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="font-heading text-2xl font-bold mb-2">
            <span className="text-gradient-fire">XPLO</span>
            <span className="text-gradient-ice">ITS</span>
            <span className="text-foreground ml-1">26</span>
          </h3>
          
          {/* College Info */}
          <p className="text-foreground/80 text-sm mb-1">
            Department of Information Technology
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Sri Manakula Vinayagar Engineering College, Puducherry
          </p>

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Mail className="w-4 h-4 text-fire" />
            <a href="mailto:xploits@smvec.ac.in" className="hover:text-fire transition-colors">
              xploits@smvec.ac.in
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Youtube, href: '#', label: 'YouTube' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-ice hover:glow-ice-sm transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            <p>© 2026 XPLOITS. All rights reserved.</p>
            <p className="mt-1">
              Crafted with <span className="text-fire">🔥</span> and <span className="text-ice">❄️</span> by IT Department, SMVEC
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
