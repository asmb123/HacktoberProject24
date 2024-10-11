import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
