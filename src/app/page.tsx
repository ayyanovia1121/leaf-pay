import Billing from "@/components/Billing";
import Business from "@/components/Business";
import Client from "@/components/Client";
import CTA from "@/components/CTA";
import Dealing from "@/components/Dealing";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <Dealing />
      <Testimonials />
      <Client />
      <CTA />
      <Footer />
    </div>
  );
}
