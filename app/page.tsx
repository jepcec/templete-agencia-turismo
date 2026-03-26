import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <FeaturedTours />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <FinalCTA />
      </main>
      <WhatsAppButton />
      <Footer/>
    </div>
  );
}
