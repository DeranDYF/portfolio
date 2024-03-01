
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="lg:px-4 mb-12 py-8">
      <NavBar/>
      </div>
      <div className="mx-auto px-12 lg:px-20 py-4 text-center place-items-center lg:text-start mb-0 lg:mb-3" id="home">
      <HeroSection/>
      </div>
      <div className="mx-2 lg:mx-10 rounded-lg px-12 lg:px-20 py-4 mt-5 lg:mt-20 bg-[#181818]" id="experience">
      <AboutSection/>
      </div>
      <div className="mx-auto px-12 lg:px-20 py-4 text-center lg:text-center lg:items-center mb-0 lg:mb-3 mt-5 lg:mt-20" id="mywork">
      <WorkSection/>
      </div>
      <div className="mx-2 lg:mx-10 rounded-lg py-4 text-center lg:text-start mb-3 lg:mb-6 mt-5 lg:mt-20 bg-[#181818]" id="contact">
      <ContactSection/>
      </div>
      <div className="lg:px-12 py-4 bg-[#181818]">
      <Footer/>
      </div>

      
      
    </main>
  );
}
