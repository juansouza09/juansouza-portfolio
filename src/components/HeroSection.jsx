import { useEffect, useRef, useState } from 'react'
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
  const heroRef = useRef(null)
  const splineLayerRef = useRef(null)
  const [shouldRenderSpline, setShouldRenderSpline] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(min-width: 1024px)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const updateSplineVisibility = () => setShouldRenderSpline(mediaQuery.matches)

    updateSplineVisibility()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateSplineVisibility)
    } else {
      mediaQuery.addListener(updateSplineVisibility)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateSplineVisibility)
      } else {
        mediaQuery.removeListener(updateSplineVisibility)
      }
    }
  }, [])

  useEffect(() => {
    if (!shouldRenderSpline) return

    const heroElement = heroRef.current
    if (!heroElement) return

    let wasInsideHero = false
    let rafId = null
    let lastEvent = null
    let cachedCanvas = null

    const getCanvas = () => {
      if (cachedCanvas && document.contains(cachedCanvas)) return cachedCanvas
      cachedCanvas = splineLayerRef.current?.querySelector('canvas') ?? null
      return cachedCanvas
    }

    const dispatchMouseMove = (event) => {
      const canvas = getCanvas()
      if (!canvas) return

      const mouseInit = {
        bubbles: true,
        cancelable: false,
        composed: true,
        clientX: event.clientX,
        clientY: event.clientY,
        screenX: event.screenX,
        screenY: event.screenY,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
        button: event.button ?? 0,
        buttons: event.buttons ?? 0,
      }

      if (typeof PointerEvent !== 'undefined') {
        canvas.dispatchEvent(
          new PointerEvent('pointermove', {
            ...mouseInit,
            pointerId: event.pointerId ?? 1,
            pointerType: event.pointerType ?? 'mouse',
            isPrimary: event.isPrimary ?? true,
            pressure: event.pressure ?? 0,
          }),
        )
      }

      canvas.dispatchEvent(new MouseEvent('mousemove', mouseInit))
    }

    const dispatchMouseLeave = () => {
      const canvas = getCanvas()
      if (!canvas) return

      if (typeof PointerEvent !== 'undefined') {
        canvas.dispatchEvent(
          new PointerEvent('pointerleave', {
            bubbles: true,
            cancelable: false,
            composed: true,
            pointerId: 1,
            pointerType: 'mouse',
            isPrimary: true,
          }),
        )
      }

      canvas.dispatchEvent(
        new MouseEvent('mouseleave', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }),
      )
    }

    const flushPointer = () => {
      rafId = null
      if (!lastEvent) return

      const event = lastEvent
      lastEvent = null

      const rect = heroElement.getBoundingClientRect()
      const isInsideHero =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (isInsideHero) {
        dispatchMouseMove(event)
      } else if (wasInsideHero) {
        dispatchMouseLeave()
      }

      wasInsideHero = isInsideHero
    }

    const handleGlobalPointerMove = (event) => {
      lastEvent = event
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(flushPointer)
    }

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [shouldRenderSpline])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-card">
      <Card className="relative min-h-[100svh] w-full overflow-hidden rounded-none border-0 bg-background shadow-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {shouldRenderSpline ? (
          <div ref={splineLayerRef} className="absolute inset-0 z-[2] overflow-hidden">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="absolute inset-0 h-full w-full origin-center scale-[0.95] translate-x-[12%] pointer-events-auto opacity-[0.54] transition-all duration-300 ease-out sm:scale-[0.88] sm:translate-x-[16%] sm:opacity-[0.8] lg:scale-[0.9] lg:translate-x-[22%] lg:translate-y-[14%]"
            />
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-full sm:w-[78%] md:w-[66%] lg:w-[62%]" />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-background/95 via-background/78 to-background/42 dark:from-black/88 dark:via-black/64 dark:to-black/24 sm:dark:from-black/86 sm:dark:via-black/58 sm:dark:to-black/22 lg:dark:from-black/84 lg:dark:via-black/54 lg:dark:to-black/20" />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-transparent via-background/25 to-background/55 dark:via-black/22 dark:to-black/52" />

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

          <div className="pointer-events-none mt-4 w-[92%] max-w-[22rem] sm:mt-10 sm:w-auto sm:max-w-3xl md:mt-24 lg:mt-24">
            <div className="mb-6 sm:mb-8">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground sm:text-xs">
                Juan Souza - Software Engineer
              </p>
            </div>

            <div className="my-[10px]">
              <p className="my-[10px] inline-flex rounded-full border border-border bg-card/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-foreground backdrop-blur-none md:backdrop-blur-sm sm:text-xs">
                +4 anos solucionando problemas
              </p>

              <TextEffect
                as="h1"
                per="line"
                preset="slide"
                delay={0.15}
                segmentWrapperClassName="block overflow-hidden"
                className="my-[10px] font-display text-[clamp(2.2rem,10vw,4.8rem)] font-medium leading-[1.04] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {`Transformando problemas\nem software`}
              </TextEffect>

              <p className="my-[10px] max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-sm">
                Construo produtos, sistemas e automações usados no dia a dia de empresas.
              </p>

              <div className="my-[10px] flex max-w-[22rem] flex-wrap gap-1.5 sm:max-w-none sm:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/70 px-2.5 py-1.5 text-[11px] font-medium text-foreground backdrop-blur-none md:backdrop-blur-sm sm:px-3 sm:text-xs"
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
              className="inline-flex h-[42px] w-full items-center justify-center rounded-2xl border border-border/80 bg-card/80 px-5 text-sm font-medium text-foreground shadow-none backdrop-blur-none transition-colors md:shadow-sm md:backdrop-blur-sm hover:border-primary/60 hover:bg-accent sm:w-auto dark:border-white/35 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white/10"
            >
              Explorar projetos
            </a>
            <AnimatedGenerateButton
              className="w-full sm:w-auto"
              buttonClassName="h-[42px] w-full rounded-2xl border-border/80 bg-card/80 px-5 text-sm font-medium text-foreground shadow-none backdrop-blur-none md:shadow-sm md:backdrop-blur-sm hover:border-primary/60 hover:bg-accent sm:w-auto dark:border-white/35 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white/10"
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
