// GSAP Animation Utilities
// Centralized animation logic to reduce code duplication

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe animation wrapper that respects user preferences
export const safeAnimate = (target, vars, options = {}) => {
  try {
    if (prefersReducedMotion()) {
      // Set final state immediately for users who prefer reduced motion
      gsap.set(target, {
        opacity: vars.opacity !== undefined ? vars.opacity : 1,
        x: 0,
        y: 0,
        scale: vars.scale !== undefined ? vars.scale : 1,
        rotation: 0
      });
      return null;
    }
    
    return gsap.to(target, {
      ...vars,
      ...options
    });
  } catch (error) {
    console.error('Animation error:', error);
    // Fallback: set visible state
    gsap.set(target, { opacity: 1, x: 0, y: 0, scale: 1 });
    return null;
  }
};

// Safe ScrollTrigger animation
export const safeScrollTrigger = (target, fromVars, toVars, scrollOptions = {}) => {
  try {
    if (prefersReducedMotion()) {
      gsap.set(target, {
        opacity: toVars.opacity !== undefined ? toVars.opacity : 1,
        x: 0,
        y: 0,
        scale: toVars.scale !== undefined ? toVars.scale : 1
      });
      return null;
    }

    return gsap.fromTo(target, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...scrollOptions
      }
    });
  } catch (error) {
    console.error('ScrollTrigger animation error:', error);
    gsap.set(target, { opacity: 1, x: 0, y: 0, scale: 1 });
    return null;
  }
};

// Stagger animation utility
export const safeStagger = (targets, fromVars, toVars, staggerOptions = {}) => {
  try {
    if (prefersReducedMotion()) {
      gsap.set(targets, {
        opacity: toVars.opacity !== undefined ? toVars.opacity : 1,
        x: 0,
        y: 0,
        scale: toVars.scale !== undefined ? toVars.scale : 1
      });
      return null;
    }

    return gsap.fromTo(targets, fromVars, {
      ...toVars,
      stagger: 0.1,
      ...staggerOptions
    });
  } catch (error) {
    console.error('Stagger animation error:', error);
    gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
    return null;
  }
};

// Counter animation utility
export const safeCounter = (target, endValue, options = {}) => {
  try {
    if (prefersReducedMotion()) {
      target.textContent = endValue;
      return null;
    }

    const startValue = parseInt(target.textContent) || 0;
    const suffix = endValue.toString().replace(/[0-9]/g, '');
    const numValue = parseInt(endValue.toString().replace(/\D/g, ''));

    return gsap.fromTo(target, 
      { textContent: startValue },
      {
        textContent: numValue,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          target.textContent = `${Math.round(this.targets()[0].textContent)}${suffix}`;
        },
        ...options
      }
    );
  } catch (error) {
    console.error('Counter animation error:', error);
    target.textContent = endValue;
    return null;
  }
};

// Timeline utility with error handling
export const safeTimeline = (options = {}) => {
  try {
    if (prefersReducedMotion()) {
      return {
        to: () => null,
        from: () => null,
        fromTo: () => null,
        set: (target, vars) => gsap.set(target, vars),
        kill: () => null
      };
    }
    
    return gsap.timeline(options);
  } catch (error) {
    console.error('Timeline creation error:', error);
    return {
      to: () => null,
      from: () => null,
      fromTo: () => null,
      set: (target, vars) => gsap.set(target, vars),
      kill: () => null
    };
  }
};

// Cleanup utility
export const cleanupAnimations = (scope) => {
  try {
    if (scope) {
      gsap.killTweensOf(scope);
    }
    ScrollTrigger.getAll().forEach(trigger => {
      if (!trigger.trigger || scope?.contains?.(trigger.trigger)) {
        trigger.kill();
      }
    });
  } catch (error) {
    console.error('Animation cleanup error:', error);
  }
};

// Performance optimized animation settings
export const performanceSettings = {
  force3D: true,
  transformOrigin: 'center center',
  ease: 'power2.out',
  duration: 0.6
};

// Common animation presets
export const animationPresets = {
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, ...performanceSettings }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, ...performanceSettings }
  },
  fadeInRight: {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0, ...performanceSettings }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, ...performanceSettings }
  },
  slideInUp: {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, ...performanceSettings }
  }
};