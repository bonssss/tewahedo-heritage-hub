import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPlaces from "@/components/FeaturedPlaces";
// import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedPlaces />
      {/* <Footer /> */}

     
    </div>
  );
};

export default Index;
