import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-4">
            Sobre mí
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mb-8" />
          <p className="text-foreground/80 text-lg leading-relaxed font-light">
            Soy un apasionado de la tecnología y el desarrollo de software, actualmente cursando el ciclo superior de{" "}
            <span className="text-foreground font-medium">Desarrollo de Aplicaciones Multiplataforma (DAM)</span>.
            Mi objetivo es crear aplicaciones funcionales, eficientes y con una experiencia de usuario excepcional.
            Disfruto resolviendo problemas complejos, aprendiendo nuevas tecnologías y trabajando en equipo
            siguiendo metodologías ágiles. Siempre estoy en busca de nuevos retos que me permitan crecer como
            desarrollador.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
