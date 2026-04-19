/**
 * Reveal animation presets for @vueuse/motion.
 *
 * Usage:
 *   <section v-motion="reveal()">            // default fade + y-offset
 *   <div v-motion="reveal(index * 100)">     // staggered children
 */
export function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 600,
        delay,
        ease: 'easeOut',
      },
    },
  }
}

/** Larger entrance for the hero — triggered on mount, not on scroll. */
export function heroEntrance() {
  return {
    initial: { opacity: 0, y: 64 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 800,
        delay: 100,
        ease: 'easeOut',
      },
    },
  }
}
