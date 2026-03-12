import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Pablo Lopez de Lerena. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
