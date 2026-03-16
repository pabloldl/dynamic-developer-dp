import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación Android para organizar tareas diarias con notificaciones, categorías y sincronización local.",
    techs: ["Kotlin", "Android Studio", "SQLite"],
    github: "#",
  },
  {
    title: "API REST de Inventario",
    description:
      "Backend para la gestión de inventario de productos con autenticación JWT y operaciones CRUD completas.",
    techs: ["Node JS", "Express", "MongoDB", "Mongoose"],
    github: "https://github.com/pabloldl/api-rest-inventory",
  },
  {
    title: "Portfolio Web Personal",
    description:
      "Este mismo sitio web, construido con React y Tailwind CSS como ejercicio de desarrollo frontend moderno.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/pabloldl/dynamic-developer-dp",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-4">
            Proyectos
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mb-12" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group rounded-xl border border-border bg-gradient-card p-6 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary hover:underline"
              >
                Ver código en GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
