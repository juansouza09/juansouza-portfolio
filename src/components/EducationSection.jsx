import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Faculdade Impacta Tecnologia",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "Fev/2023 - Dez/2025",
    status: "Concluído",
  },
  {
    institution: "Etec Abdias do Nascimento",
    degree: "Ensino médio com habilitação técnica em Desenvolvimento de Sistemas",
    period: "Fev/2020 - Dez/2022",
    status: "Concluído",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black/[0.96] px-6 py-24 lg:px-8"
    >
      <motion.div
        className="absolute right-10 top-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-32 left-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mb-16 flex flex-col items-center text-center" variants={itemVariants}>
          <motion.span
            className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GraduationCap className="h-4 w-4" />
            Educação
          </motion.span>
          <h2 className="font-display text-3xl font-medium leading-tight lg:text-5xl">
            Formação acadêmica
          </h2>
          <motion.div
            className="mt-5 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2" variants={containerVariants}>
          {education.map((edu) => (
            <motion.article
              key={`${edu.institution}-${edu.period}`}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_22px_46px_rgba(17,17,17,0.12)]">
                <div className="mb-4 flex items-start justify-between">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      edu.status === "Em andamento"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-foreground">{edu.institution}</h3>
                <p className="mb-3 font-medium text-primary">{edu.degree}</p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-28 inset-x-0 w-full opacity-20">
        <div className="absolute left-1/2 h-64 w-2/3 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>
  );
};

export default EducationSection;
