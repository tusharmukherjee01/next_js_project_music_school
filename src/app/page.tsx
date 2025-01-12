import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCard from "@/components/TestimonialCard";
import UpcommingWebnair from "@/components/UpcommingWebnair";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
     
     <HeroSection></HeroSection>
     <FeatureSection/>
     <WhyChoseUs></WhyChoseUs>
     <TestimonialCard></TestimonialCard>
     <UpcommingWebnair></UpcommingWebnair>
     <Instructor></Instructor>
     <Footer></Footer>
      </main>
    
  );
}
