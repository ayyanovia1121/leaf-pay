import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
