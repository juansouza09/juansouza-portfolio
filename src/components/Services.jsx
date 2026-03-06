import mobileImg from "../assets/mobile.png";
import morfImg from "../assets/morf-image.jpg";
import santaRochaImg from "../assets/santa-rocha.png";

const services = [
  {
    title: "Brand Systems",
    text: "Identity and visual language that scale across product, web, and editorial surfaces.",
    image: santaRochaImg,
    index: "01",
  },
  {
    title: "Product Design",
    text: "Interface systems with clear hierarchy, rapid iteration, and high craft.",
    image: morfImg,
    index: "02",
  },
  {
    title: "Digital Launch",
    text: "Landing pages and campaigns with strong visual direction and conversion focus.",
    image: mobileImg,
    index: "03",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight lg:text-5xl">
            Editorial-grade design systems
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Modular, minimal, and fashion-forward. Each delivery is styled to feel
            premium, clear, and intentional.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]"
            >
              <span className="absolute right-6 top-5 text-4xl font-semibold text-foreground/10">
                {service.index}
              </span>
              <div className="h-40 overflow-hidden rounded-2xl border border-border/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
