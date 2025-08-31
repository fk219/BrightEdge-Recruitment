"use client";

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const animationsRef = useRef(new Map());

  // Cleanup function
  const cleanup = useCallback(() => {
    animationsRef.current.forEach((animation) => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      if (animation.timeline) {
        animation.timeline.kill();
      }
    });
    animationsRef.current.clear();
  }, []);

  // Fade in animation
  const fadeIn = useCallback((element, options = {}) => {
    const {
      duration = 0.8,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      end = "bottom 15%",
      once = true,
      onComplete,
      onStart
    } = options;

    if (!element) return null;

    const animation = gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          once,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
          onComplete,
          onStart
        }
      }
    );

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Slide in from left
  const slideInLeft = useCallback((element, options = {}) => {
    const {
      duration = 0.8,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      end = "bottom 15%",
      once = true,
      distance = 100
    } = options;

    if (!element) return null;

    const animation = gsap.fromTo(element,
      { opacity: 0, x: -distance },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          once,
          toggleActions: once ? "play none none none" : "play reverse play reverse"
        }
      }
    );

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Slide in from right
  const slideInRight = useCallback((element, options = {}) => {
    const {
      duration = 0.8,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      end = "bottom 15%",
      once = true,
      distance = 100
    } = options;

    if (!element) return null;

    const animation = gsap.fromTo(element,
      { opacity: 0, x: distance },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          once,
          toggleActions: once ? "play none none none" : "play reverse play reverse"
        }
      }
    );

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Scale in animation
  const scaleIn = useCallback((element, options = {}) => {
    const {
      duration = 0.8,
      delay = 0,
      ease = "back.out(1.7)",
      start = "top 85%",
      end = "bottom 15%",
      once = true
    } = options;

    if (!element) return null;

    const animation = gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          once,
          toggleActions: once ? "play none none none" : "play reverse play reverse"
        }
      }
    );

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Stagger animation for multiple elements
  const staggerAnimation = useCallback((elements, options = {}) => {
    const {
      animation = "fadeIn",
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      ease = "power3.out",
      start = "top 85%",
      end = "bottom 15%",
      once = true
    } = options;

    if (!elements || elements.length === 0) return null;

    const animationConfigs = {
      fadeIn: { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
      slideInLeft: { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      slideInRight: { from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 } },
      scaleIn: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } }
    };

    const config = animationConfigs[animation] || animationConfigs.fadeIn;

    // Set initial state
    gsap.set(elements, config.from);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: elements[0],
        start,
        end,
        once,
        toggleActions: once ? "play none none none" : "play reverse play reverse"
      }
    });

    timeline.to(elements, {
      ...config.to,
      duration,
      delay,
      stagger,
      ease
    });

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { timeline, scrollTrigger: timeline.scrollTrigger });
    
    return id;
  }, []);

  // Counter animation
  const animateCounter = useCallback((element, targetValue, options = {}) => {
    const {
      duration = 2,
      delay = 0,
      ease = "power2.out",
      start = "top 80%",
      end = "bottom 20%",
      once = true,
      suffix = ""
    } = options;

    if (!element) return null;

    const num = parseInt(targetValue.toString().replace(/\D/g, ''));
    const suffixStr = targetValue.toString().replace(/[0-9]/g, '');

    const animation = gsap.fromTo(element,
      { textContent: 0 },
      {
        textContent: num,
        duration,
        delay,
        ease,
        snap: { textContent: 1 },
        onUpdate: function() {
          element.textContent = `${Math.round(this.targets()[0].textContent)}${suffixStr || suffix}`;
        },
        scrollTrigger: {
          trigger: element,
          start,
          end,
          once,
          toggleActions: once ? "play none none none" : "play reverse play reverse"
        }
      }
    );

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Parallax effect
  const parallax = useCallback((element, options = {}) => {
    const {
      speed = 0.5,
      start = "top bottom",
      end = "bottom top",
      scrub = true
    } = options;

    if (!element) return null;

    const animation = gsap.to(element, {
      y: `${speed * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub
      }
    });

    const id = Math.random().toString(36);
    animationsRef.current.set(id, { animation, scrollTrigger: animation.scrollTrigger });
    
    return id;
  }, []);

  // Kill specific animation
  const killAnimation = useCallback((id) => {
    const animation = animationsRef.current.get(id);
    if (animation) {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      if (animation.timeline) {
        animation.timeline.kill();
      }
      if (animation.animation) {
        animation.animation.kill();
      }
      animationsRef.current.delete(id);
    }
  }, []);

  // Refresh all ScrollTriggers
  const refreshScrollTriggers = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    staggerAnimation,
    animateCounter,
    parallax,
    killAnimation,
    refreshScrollTriggers,
    cleanup
  };
}; 