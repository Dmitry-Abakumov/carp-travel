import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import WeOffer from "@/components/WeOffer";
import Career from "@/components/Career";
import OurGallery from "@/components/OurGallery";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <About />
      <WeOffer />
      <Career />
      <OurGallery />
      <ContactUs />
    </main>
  );
}
