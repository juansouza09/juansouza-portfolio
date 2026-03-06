import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Clube Rincão",
    role: "Engenheiro de Software",
    location: "Brasil",
    period: "Jan 2025 - Atual",
    description:
      "Assumi uma frente ampla de evolução digital, unindo experiência do usuário, operação, automação e fluxos reais de acesso e atendimento.",
    tags: ["Web", "QR Code", "WhatsApp API", "IA", "Operação"],
    highlights: [
      "Manutenção do site principal e desenvolvimento de novas funcionalidades.",
      "Criação do sistema de acesso ao parque com QR Code nos ingressos.",
      "Desenvolvimento de app para validar ingressos e visualizar pessoas no parque.",
      "Implementação de bot com IA no WhatsApp e envio de ingressos por WhatsApp.",
    ],
  },
  {
    company: "Brevia",
    role: "Engenheiro de Software",
    location: "Brasil",
    period: "Jan 2025 - Atual",
    description:
      "Projetos focados em presença digital, continuidade técnica e reorganização de infraestrutura sem interromper a operação existente.",
    tags: ["Web", "Hospedagem", "Manutenção", "Continuidade"],
    highlights: [
      "Atuação no site BPH.",
      "Atuação no site da Abiquifi e no site do dicionário.",
      "Manutenção contínua e evolução dos projetos já em uso.",
    ],
  },
  {
    company: "Questione.ai",
    role: "Engenheiro de Software",
    location: "São Paulo, Brasil",
    period: "Jun 2023 - Dez 2024",
    description:
      "Atuação em produto com IA aplicada, combinando experiência, tecnologia e evolução contínua em uma startup orientada a aprendizado.",
    tags: ["Flutter", "OpenAI", "React.js", "Express.js"],
    highlights: [
      "Responsável pelo desenvolvimento do Morf, assistente de estudos integrado à IA generativa da OpenAI.",
      "Uso de tecnologias como Bloc, WebSocket, Firebase Auth, Storage, Firestore, Remote Config, Analytics e Codemagic CI/CD.",
      "Evolução contínua de um produto real durante seu ciclo ativo, com foco em experiência e estabilidade.",
      "Desenvolvimento de CRM com frontend em HTML, CSS e JavaScript e backend em Node.js com Express.",
    ],
  },
  {
    company: "CI&T / Premiere",
    role: "Desenvolvedor Android",
    location: "São Paulo, Brasil",
    period: "Jan 2022 - Mar 2023",
    description:
      "Base corporativa em app Android com foco em qualidade, previsibilidade e evolução de features em contexto profissional.",
    tags: ["Android Kotlin", "MVVM", "CI/CD"],
    highlights: [
      "Desenvolvimento de features em aplicativo modularizado com Kotlin.",
      "Uso de arquitetura MVVM e integração contínua no fluxo de entrega.",
      "Consolidação da base técnica em mobile dentro de um ambiente estruturado.",
    ],
  },
  {
    company: "Dextra",
    role: "Desenvolvedor Android",
    location: "São Paulo, Brasil",
    period: "Set 2021 - Dez 2021",
    description:
      "Primeiro ciclo profissional, com entrada prática em desenvolvimento e aceleração da base em Android e experimentação com web.",
    tags: ["Flutter Web", "Android Kotlin"],
    highlights: [
      "Participação em desafio utilizando Flutter Web.",
      "Início da trilha em desenvolvimento Android com Kotlin.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ExperienceSection = () => {
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
      id="experience"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black/[0.96] px-6 py-24 lg:px-8"
    >
      <motion.div
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
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
            <Briefcase className="h-4 w-4" />
            Experiência
          </motion.span>
          <h2 className="font-display text-3xl font-medium leading-tight lg:text-5xl">
            Trajetória profissional
          </h2>
          <motion.div
            className="mt-5 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div className="space-y-8" variants={containerVariants}>
          {experiences.map((exp) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              variants={itemVariants}
              className="relative border-l-2 border-border pb-8 pl-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-background bg-primary" />

              <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_22px_46px_rgba(17,17,17,0.12)]">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-lg font-medium text-primary">{exp.role}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={`${exp.company}-${tag}`}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={`${exp.company}-${highlight}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute -top-28 inset-x-0 w-full opacity-20">
        <div className="absolute left-1/2 h-64 w-2/3 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>
  );
};

export default ExperienceSection;
