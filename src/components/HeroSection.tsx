import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 text-gradient"
        >
          Pablo Lopez de Lerena
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-xl mx-auto"
        >
          Estudiante de Desarrollo de Aplicaciones Multiplataforma
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border text-foreground font-display font-semibold text-sm tracking-wide hover:bg-secondary transition-colors"
          >
            Contacto
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-float" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
