import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Send,
  Star,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mentorImage from "../assets/juan-image.webp";

const benefits = [
  {
    icon: Users,
    title: "Sessões 1:1",
    description: "Mentoria personalizada focada nos seus objetivos e desafios.",
  },
  {
    icon: Award,
    title: "Experiência Real",
    description: "Aprendizado com casos práticos e projetos reais do mercado.",
  },
  {
    icon: Sparkles,
    title: "Crescimento Acelerado",
    description: "Direcionamento técnico para reduzir tentativa e erro.",
  },
];

const features = [
  "Desenvolvimento de produtos digitais",
  "Design thinking e UX/UI",
  "Estratégia de tecnologia",
  "Automação e IA",
  "Gestão de projetos tech",
  "Carreira em tecnologia",
];
const schedulingLink = "https://calendar.app.google/wHsGVKKCMrzWTFGk7";
const mentorshipContactLink = "https://w.app/juansouza-mentoria";

const MentorshipSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

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

  return (
    <section
      id="mentorship"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background px-6 py-24 lg:px-8"
    >
      <motion.div
        className="absolute left-20 top-32 h-80 w-80 rounded-full bg-primary/5 blur-xl md:blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 h-96 w-96 rounded-full bg-primary/10 blur-xl md:blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
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
            <Star className="h-4 w-4" />
            Mentoria
          </motion.span>
          <h2 className="font-display text-3xl font-medium leading-tight lg:text-5xl">
            Acelere sua jornada
          </h2>
          <motion.div
            className="mt-5 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-16 max-w-2xl text-center text-base text-muted-foreground"
          variants={itemVariants}
        >
          Compartilho experiência em produto, design e tecnologia para ajudar profissionais a evoluírem com clareza.
        </motion.p>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Por que mentoria?</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Orientação prática para evolução técnica, decisões de produto e posicionamento de carreira com foco em execução real.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    className="rounded-2xl border border-border bg-card/70 p-4 transition-colors hover:border-primary/20"
                    whileHover={{ y: -2 }}
                  >
                    <benefit.icon className="mb-3 h-7 w-7 text-primary" />
                    <h4 className="mb-2 font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2">
                <h4 className="mb-4 font-semibold">Áreas de especialização</h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div className="pt-4" whileHover={{ scale: 1.01 }}>
                <Button
                  size="lg"
                  className="group w-full sm:w-auto"
                  onClick={() =>
                    window.open(schedulingLink, "_blank", "noopener,noreferrer")
                  }
                >
                  Agendar sessão
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg md:blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg md:shadow-2xl">
                <img src={mentorImage} alt="Juan Souza" className="h-[500px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white">Juan Souza</h3>
                  <p className="mt-1 text-white/80">Software Engineer</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-none md:backdrop-blur-sm">
                      +4 anos de experiência
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-none md:backdrop-blur-sm">
                      Produto, IA e Mobile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-border bg-card/70 p-8 text-center"
        >
          <h3 className="text-xl font-semibold">Pronto para o próximo passo?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Faça uma sessão inicial e alinhamos metas, plano de evolução e execução.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open(schedulingLink, "_blank", "noopener,noreferrer")}
            >
              Ver disponibilidade
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="group"
              onClick={() => window.open(mentorshipContactLink, "_blank", "noopener,noreferrer")}
            >
              Entrar em contato
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MentorshipSection;
