import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, alt: 'Campus View', placeholder: 'Campus Building' },
  { id: 2, alt: 'IT Department', placeholder: 'IT Lab' },
  { id: 3, alt: 'Previous Symposium', placeholder: 'Symposium 2024' },
  { id: 4, alt: 'Auditorium', placeholder: 'Main Auditorium' },
  { id: 5, alt: 'Tech Fest', placeholder: 'Tech Event' },
];

const MapGallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
            <span className="text-gradient-fire-ice">Location</span> & Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find us and explore our campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0876!2d79.8505!3d11.9425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzMzLjAiTiA3OcKwNTEnMDEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMVEC Location"
            />
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden h-[400px] relative"
          >
            {/* Slides */}
            <div className="relative h-full">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-br from-fire/10 via-background to-ice/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-foreground font-heading">{image.placeholder}</p>
                      <p className="text-muted-foreground text-sm mt-2">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card flex items-center justify-center text-foreground hover:text-fire transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass-card flex items-center justify-center text-foreground hover:text-ice transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-fire' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapGallerySection;
