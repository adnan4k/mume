import { Navbar } from '@/components/Navbar';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Hero } from '@/sections/Hero';
import { BrandMarquee } from '@/sections/BrandMarquee';
import { About } from '@/sections/About';
import { BentoFeatures } from '@/sections/BentoFeatures';
import { Statistics } from '@/sections/Statistics';
import { Services } from '@/sections/Services';
import { PricesOverview } from '@/sections/PricesOverview';
import { Testimonials } from '@/sections/Testimonials';
import { FAQ } from '@/sections/FAQ';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cream">
      {/* Floating Particles Background */}
      <FloatingParticles count={25} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Brand Marquee */}
        <BrandMarquee />
        
        {/* About Section */}
        <About />
        
        {/* Bento Features Grid */}
        <BentoFeatures />
        
        {/* Statistics Section */}
        <Statistics />
        
        {/* Services Section */}
        <Services />

        {/* Prices Overview Section */}
        <PricesOverview />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
