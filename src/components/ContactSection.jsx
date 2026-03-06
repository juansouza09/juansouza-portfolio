import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/juansouza09", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@juansouza.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background px-6 py-24 lg:px-8"
    >
      <motion.div
        className="absolute right-10 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-24 left-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
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
            <Send className="size-4" />
            Contato
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight lg:text-5xl">
            Vamos conversar
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            Tem um projeto em mente? Quer colaborar ou apenas trocar uma ideia? Entre em contato.
          </p>
          <motion.div
            className="mt-5 h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte mais sobre seu projeto..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="group w-full">
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]">
              <h3 className="text-2xl font-medium">Informações</h3>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p className="flex items-center gap-3">
                  <Mail className="size-5 text-primary" />
                  hello@juansouza.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="inline-flex size-5 items-center justify-center text-primary">•</span>
                  São Paulo, Brasil
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]">
              <h3 className="text-2xl font-medium">Redes</h3>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="size-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]">
              <h3 className="text-xl font-medium">Disponibilidade</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Disponível para projetos freelance, parcerias e oportunidades de colaboração.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
