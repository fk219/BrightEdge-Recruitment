"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Remove duplicate registration - it's already done in AnimationProvider
// gsap.registerPlugin(ScrollTrigger);

const AnimateOnScroll = ({
  children,
  as: Tag = "div",
  className = "",
  animation = "fadeIn",
  duration = 0.8,
  delay = 0,
  stagger = 0.1,
  start = "top 85%",
  end = "bottom 15%",
  once = true,
  ...props
}) => {
  const element = useRef(null);

  useEffect(() => {
    if (!element.current) return;

    const ctx = gsap.context(() => {
      try {
        const animationProps = {
          opacity: 0,
          y: 50,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element.current,
            start,
            end,
            once,
            toggleActions: "play none none none",
            // Add markers for debugging in development
            markers: process.env.NODE_ENV === "development" ? false : false,
          },
        };

        switch (animation) {
          case "fadeIn":
            gsap.from(element.current.children, {
              ...animationProps,
              y: 30,
            });
            break;
            
          case "slideInLeft":
            gsap.from(element.current.children, {
              ...animationProps,
              x: -100,
            });
            break;
            
          case "slideInRight":
            gsap.from(element.current.children, {
              ...animationProps,
              x: 100,
            });
            break;
            
          case "scaleIn":
            gsap.from(element.current.children, {
              ...animationProps,
              scale: 0.9,
              y: 0,
            });
            break;
            
          case "staggerChildren":
            gsap.from(element.current.children, {
              ...animationProps,
              y: 30,
              stagger: 0.1,
            });
            break;
            
          default:
            gsap.from(element.current.children, animationProps);
        }
      } catch (error) {
        console.error("Animation error:", error);
        // Fallback: make elements visible if animation fails
        gsap.set(element.current.children, { opacity: 1, y: 0 });
      }
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration, end, once, stagger, start]);

  return (
    <Tag ref={element} className={`relative ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
