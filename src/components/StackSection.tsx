import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Programación",
    skills: ["Java", "Kotlin", "Swift", "C#"],
  },
  {
    title: "Desarrollo Web",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "Diseño Relacional"],
  },
  {
    title: "Entornos",
    skills: ["Android Studio", "Xcode", "VS Code"],
  },
  {
    title: "Herramientas",
    skills: ["Git / GitHub", "Scrum", "APIs REST", "Despliegue"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StackSection = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-4">
            Stack Tecnológico
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mb-12" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="rounded-xl border border-border bg-gradient-card p-6 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 text-base">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StackSection;
