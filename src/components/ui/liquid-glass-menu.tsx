'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface LiquidGlassMenuItem {
  title: string
  href?: string
  onClick?: () => void
}

interface LiquidGlassMenuProps {
  items?: LiquidGlassMenuItem[]
  className?: string
  defaultActiveIndex?: number
}

interface MenuItemProps {
  item: LiquidGlassMenuItem
  index: number
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const getItemHash = (href?: string) => {
  if (!href || typeof window === 'undefined') {
    return ''
  }

  try {
    return new URL(href, window.location.href).hash
  } catch {
    return ''
  }
}

const InternalMenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = activeIndex === index

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.href?.startsWith('#')) {
      e.preventDefault()
    }
    setActiveIndex(index)
    item.onClick?.()
  }

  return (
    <a
      href={item.href || '#'}
      onClick={handleClick}
      data-swup-link
      className="relative flex-none cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-center text-[12px] font-semibold transition-colors duration-300 sm:px-5 sm:py-2 sm:text-sm"
    >
      {isActive && (
        <motion.div
          layoutId="liquid-glass-active-pill"
          className="absolute inset-0 rounded-full bg-primary"
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
        />
      )}

      <span
        className={cn(
          'relative z-10 transition-colors duration-300',
          isActive ? 'text-primary-foreground' : 'text-foreground/80',
        )}
      >
        {item.title}
      </span>
    </a>
  )
}

export const LiquidGlassMenu: React.FC<LiquidGlassMenuProps> = ({
  items = [
    { title: 'Home', href: '#home' },
    { title: 'Products', href: '#products' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ],
  className,
  defaultActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultActiveIndex)

  React.useEffect(() => {
    const syncActiveItem = () => {
      const currentHash = window.location.hash
      if (!currentHash) return

      const index = items.findIndex((item) => {
        return getItemHash(item.href) === currentHash
      })

      if (index >= 0) {
        setActiveIndex(index)
      }
    }

    syncActiveItem()
    window.addEventListener('popstate', syncActiveItem)
    window.addEventListener('hashchange', syncActiveItem)

    return () => {
      window.removeEventListener('popstate', syncActiveItem)
      window.removeEventListener('hashchange', syncActiveItem)
    }
  }, [items])

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    let frame = 0
    const syncByScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight * 0.38
      let nextActiveIndex = 0

      items.forEach((item, index) => {
        const hash = getItemHash(item.href)
        if (!hash) return

        const section = document.getElementById(hash.slice(1))
        if (!section) return

        if (section.offsetTop <= currentPosition) {
          nextActiveIndex = index
        }
      })

      setActiveIndex((previous) => (previous === nextActiveIndex ? previous : nextActiveIndex))
      frame = 0
    }

    const queueSync = () => {
      if (frame) return
      frame = window.requestAnimationFrame(syncByScroll)
    }

    syncByScroll()
    window.addEventListener('scroll', queueSync, { passive: true })
    window.addEventListener('resize', queueSync)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', queueSync)
      window.removeEventListener('resize', queueSync)
    }
  }, [items])

  return (
    <nav className={cn('relative flex max-w-full', className)}>
      <div className="relative flex w-full max-w-full items-center gap-0 overflow-x-auto rounded-full border border-border/70 bg-background/75 p-1 shadow-sm backdrop-blur-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:w-auto sm:p-1.5 md:shadow-[0_8px_30px_rgba(0,0,0,0.18)] md:backdrop-blur-xl dark:md:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        {items.map((item, index) => (
          <InternalMenuItem
            key={`${item.title}-${index}`}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </nav>
  )
}
