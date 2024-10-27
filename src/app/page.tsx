import Footer from "@/components/Footer";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/navbar";
import Payment from "@/components/payment";
export default function Home() {
  return (

    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Footer />
      <Payment />
    </div>
    );
}
