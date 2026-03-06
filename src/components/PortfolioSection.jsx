/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import clubeRincaoCarousel from "../assets/clube-rincao-carousel.png";
import santaRochaImg from "../assets/santa-rocha.png";
import bphCarousel from "../assets/bph-carousel.png";
import janoCarousel from "../assets/jano-carousel.png";
import morfCarousel from "../assets/morf-carousel.png";

const glowVariants = cva("absolute inset-x-0 w-full pointer-events-none", {
  variants: {
    variant: {
      above: "-top-28",
      below: "-bottom-28",
    },
  },
  defaultVariants: {
    variant: "above",
  },
});

const Glow = ({ className, variant = "above" }) => {
  return (
    <div className={cn(glowVariants({ variant }), className)}>
      <div className="absolute left-1/2 h-64 w-2/3 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute left-1/2 top-12 h-32 w-1/2 -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
    </div>
  );
};

const ProjectCard = ({ imgSrc, title, tags, description, link, linkText }) => {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card text-card-foreground shadow-[0_16px_36px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_22px_46px_rgba(17,17,17,0.12)]"
      whileHover={{ y: -4 }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-4" />
            </a>
          ) : null}
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${title}-${tag}`}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 text-sm font-medium text-primary">{linkText}</span>
      </div>
    </motion.article>
  );
};

const projects = [
  {
    imgSrc: clubeRincaoCarousel,
    title: "Clube Rincão",
    tags: ["Operação", "WhatsApp"],
    description:
      "Ecossistema digital com site, QR Code para acesso ao parque, app de validação, automações de WhatsApp e inteligência sobre as conversas.",
    link: "https://www.cluberincao.com.br/",
    linkText: "Acesso + atendimento ↗",
  },
  {
    imgSrc: santaRochaImg,
    title: "Santa Rocha",
    tags: ["Web", "Design"],
    description:
      "Site com posicionamento premium para arquitetos, destacando materiais exclusivos e uma apresentação visual de alto padrão.",
    link: "https://santarocha.design/",
    linkText: "Presença digital ↗",
  },
  {
    imgSrc: bphCarousel,
    title: "BPH",
    tags: ["Institucional", "Health"],
    description:
      "Site institucional da Brazilian Pharma & Health com foco em programas, dados setoriais e presença internacional.",
    link: "https://bph.org.br/",
    linkText: "Presença internacional ↗",
  },
  {
    imgSrc: janoCarousel,
    title: "Jano",
    tags: ["Projeto pessoal", "IA"],
    description:
      "Assistente financeiro com IA para acompanhar transações, metas, contas conectadas e simular decisões financeiras.",
    link: "https://jano-web.vercel.app/",
    linkText: "Exploração de produto ↗",
  },
  {
    imgSrc: morfCarousel,
    title: "Morf",
    tags: ["OpenAI", "Produto"],
    description:
      "Assistente de estudos com IA generativa da OpenAI, criado para tornar o aprendizado mais acessível, humano e envolvente.",
    linkText: "Case de IA ↗",
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-8"
    >
      <motion.div
        className="absolute left-10 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mb-14 flex flex-col items-center text-center" variants={itemVariants}>
          <span className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            <Sparkles className="size-4" />
            Portfólio
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight lg:text-5xl">
            Projetos em destaque
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            Uma seleção de projetos que combinam design, tecnologia e estratégia para criar experiências digitais memoráveis.
          </p>
          <motion.div
            className="mt-5 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-6" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      <Glow variant="above" className="opacity-30" />
    </section>
  );
};

export default PortfolioSection;
