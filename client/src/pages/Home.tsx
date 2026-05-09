import Header from "@/components/Header";
import HeroImmersive from "@/components/HeroImmersive";
import ExperienceMicro from "@/components/ExperienceMicro";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import TestimonialsGlass from "@/components/TestimonialsGlass";
import FooterFluid from "@/components/FooterFluid";

/**
 * Home Page - Mangabeira Ótica Reformulated Landing Page
 * Design Philosophy: Immersive, Fluid, Full-Bleed Luxury
 *
 * Sections:
 * 1. Header - Transparent, becomes opaque on scroll
 * 2. Hero - Full-screen parallax with letter-by-letter animation
 * 3. Experience - Three pillars with micro-interactions
 * 4. Carousel - Infinite scroll of faces with glasses
 * 5. Testimonials - Glassmorphism cards with social proof
 * 6. Footer - Fluid transition with contact info
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroImmersive />
      <ExperienceMicro />
      <InfiniteCarousel />
      <TestimonialsGlass />
      <FooterFluid />
    </div>
  );
}
