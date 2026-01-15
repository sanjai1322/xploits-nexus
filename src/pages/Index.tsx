import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InstructionsSection from '@/components/InstructionsSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import StaffSection from '@/components/StaffSection';
import StudentSection from '@/components/StudentSection';
import MapGallerySection from '@/components/MapGallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <InstructionsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="events">
        <EventsSection />
      </section>
      <section id="team">
        <StaffSection />
        <StudentSection />
      </section>
      <section id="contact">
        <MapGallerySection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
