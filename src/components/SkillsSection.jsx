const skills = [
  "Editorial UI",
  "Design Systems",
  "Typography",
  "Art Direction",
  "Landing Pages",
  "Interaction Design",
  "Brand Identity",
  "Product Strategy",
  "Figma",
  "React",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Skills
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight lg:text-5xl">
            Tooling and craft
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A stack optimized for fast prototyping and high visual polish.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
