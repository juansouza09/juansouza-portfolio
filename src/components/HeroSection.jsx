import { useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import AnimatedGenerateButton from '@/components/ui/animated-generate-button-shadcn-tailwind'
import { Card } from '@/components/ui/card'
import { LiquidGlassMenu } from '@/components/ui/liquid-glass-menu'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { AnimatedThemeToggle } from '@/components/ui/animated-theme-toggle'

const tags = ['Apps', 'Sistemas internos', 'Automação', 'IA aplicada', 'Integrações']
const projectContactLink = 'https://w.app/juansouza'

const HeroSection = () => {
  const [isTextBlockHovered, setIsTextBlockHovered] = useState(false)

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-card">
      <Card className="relative min-h-[100svh] w-full overflow-hidden rounded-none border-0 bg-black/[0.96] shadow-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="absolute inset-y-0 right-0 z-[2] w-full overflow-hidden sm:w-[78%] md:w-[60%] lg:w-[48%]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className={`absolute inset-0 h-full w-full origin-center scale-[0.95] translate-x-[12%] transition-all duration-300 ease-out sm:scale-[0.88] sm:translate-x-[16%] lg:scale-[0.9] lg:translate-x-[14%] ${
              isTextBlockHovered
                ? 'pointer-events-none opacity-[0.44] sm:opacity-[0.64]'
                : 'pointer-events-auto opacity-[0.54] sm:opacity-[0.8]'
            }`}
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-full sm:w-[78%] md:w-[66%] lg:w-[62%]" />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-black/88 via-black/64 to-black/24 sm:from-black/86 sm:via-black/58 sm:to-black/22 lg:from-black/84 lg:via-black/54 lg:to-black/20" />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_78%_42%,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.56)_28%,rgba(0,0,0,0.64)_56%,rgba(0,0,0,0.74)_100%)] sm:bg-[radial-gradient(circle_at_78%_42%,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.5)_24%,rgba(0,0,0,0.6)_52%,rgba(0,0,0,0.72)_100%)]" />

        <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col p-4 pb-8 sm:p-6 sm:pb-10 lg:p-10">
          <nav className="pointer-events-auto mb-5 flex items-center gap-2 sm:mb-8">
            <div className="min-w-0 flex-1">
              <LiquidGlassMenu
                className="w-full sm:w-auto"
                items={[
                  { title: 'Sobre', href: '?section=home#home' },
                  { title: 'Projetos', href: '?section=portfolio#portfolio' },
                  { title: 'Experiência', href: '?section=experience#experience' },
                  { title: 'Educação', href: '?section=education#education' },
                  { title: 'Mentoria', href: '?section=mentorship#mentorship' },
                ]}
              />
            </div>
            <AnimatedThemeToggle />
          </nav>

          <div
            className="pointer-events-auto mt-4 w-[92%] max-w-[22rem] sm:mt-10 sm:w-auto sm:max-w-3xl md:mt-24 lg:mt-24"
            onMouseEnter={() => setIsTextBlockHovered(true)}
            onMouseLeave={() => setIsTextBlockHovered(false)}
          >
            <div className="mb-6 sm:mb-8">
              <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-300 sm:text-xs">
                Juan Souza - Software Engineer
              </p>
            </div>

            <div className="my-[10px]">
              <p className="my-[10px] inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-sm sm:text-xs">
                +4 anos solucionando problemas
              </p>

              <TextEffect
                as="h1"
                per="line"
                preset="slide"
                delay={0.15}
                segmentWrapperClassName="block overflow-hidden"
                className="my-[10px] font-display text-[clamp(2.2rem,10vw,4.8rem)] font-medium leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {`Transformando problemas\nem software`}
              </TextEffect>

              <p className="my-[10px] max-w-xl text-[15px] leading-relaxed text-neutral-200 sm:text-sm">
                Construo produtos, sistemas e automações usados no dia a dia de empresas.
              </p>

              <div className="my-[10px] flex max-w-[22rem] flex-wrap gap-1.5 sm:max-w-none sm:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-neutral-100 backdrop-blur-sm sm:px-3 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-auto mt-6 mb-8 flex flex-col items-stretch gap-6 sm:mt-8 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#portfolio"
              className="inline-flex h-[42px] w-full items-center justify-center rounded-2xl border border-white/35 bg-transparent px-5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/8 sm:w-auto"
            >
              Explorar projetos
            </a>
            <AnimatedGenerateButton
              className="w-full sm:w-auto"
              buttonClassName="h-[42px] w-full rounded-2xl px-5 text-sm font-medium sm:w-auto"
              labelIdle="Conversar sobre um projeto"
              labelActive="Abrindo contato"
              ariaLabel="Conversar sobre um projeto"
              minimal
              showIcon={false}
              clickAnimationMs={900}
              onClick={() => {
                window.open(projectContactLink, '_blank', 'noopener,noreferrer')
              }}
            />
          </div>

        </div>
      </Card>
    </section>
  )
}

export default HeroSection
