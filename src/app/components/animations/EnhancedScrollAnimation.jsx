"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EnhancedScrollAnimation = ({
  children,
  as: Tag = "div",
  className = "",
  animation = "fadeInUp",
  duration = 0.8,
  delay = 0,
  stagger = 0.1,
  start = "top 85%",
  end = "bottom 15%",
  once = true,
  scrub = false,
  markers = false,
  ...props
}) => {
  const element = useRef(null);

  useEffect(() => {
    if (!element.current) return;

    const ctx = gsap.context(() => {
      try {
        const animationConfigs = {
          fadeInUp: {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 }
          },
          fadeInDown: {
            from: { opacity: 0, y: -50 },
            to: { opacity: 1, y: 0 }
          },
          fadeInLeft: {
            from: { opacity: 0, x: -50 },
            to: { opacity: 1, x: 0 }
          },
          fadeInRight: {
            from: { opacity: 0, x: 50 },
            to: { opacity: 1, x: 0 }
          },
          scaleIn: {
            from: { opacity: 0, scale: 0.8 },
            to: { opacity: 1, scale: 1 }
          },
          rotateIn: {
            from: { opacity: 0, rotation: -10, scale: 0.9 },
            to: { opacity: 1, rotation: 0, scale: 1 }
          },
          slideInUp: {
            from: { opacity: 0, y: 100 },
            to: { opacity: 1, y: 0 }
          },
          slideInDown: {
            from: { opacity: 0, y: -100 },
            to: { opacity: 1, y: 0 }
          },
          slideInLeft: {
            from: { opacity: 0, x: -100 },
            to: { opacity: 1, x: 0 }
          },
          slideInRight: {
            from: { opacity: 0, x: 100 },
            to: { opacity: 1, x: 0 }
          },
          bounceIn: {
            from: { opacity: 0, scale: 0.3 },
            to: { opacity: 1, scale: 1, ease: "back.out(1.7)" }
          },
          flipInX: {
            from: { opacity: 0, rotationX: 90 },
            to: { opacity: 1, rotationX: 0 }
          },
          flipInY: {
            from: { opacity: 0, rotationY: 90 },
            to: { opacity: 1, rotationY: 0 }
          }
        };

        const config = animationConfigs[animation] || animationConfigs.fadeInUp;

        // Set initial state
        gsap.set(element.current.children, config.from);

        // Create the animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element.current,
            start,
            end,
            once,
            scrub,
            markers: process.env.NODE_ENV === "development" ? markers : false,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
            onEnter: () => {
              // Add a class when animation starts
              element.current.classList.add("animate-in");
            },
            onLeave: () => {
              if (!once) {
                element.current.classList.remove("animate-in");
              }
            },
            onEnterBack: () => {
              if (!once) {
                element.current.classList.add("animate-in");
              }
            },
            onLeaveBack: () => {
              if (!once) {
                element.current.classList.remove("animate-in");
              }
            }
          }
        });

        // Animate children with stagger
        tl.to(element.current.children, {
          ...config.to,
          duration,
          delay,
          stagger,
          ease: config.to.ease || "power3.out"
        });

      } catch (error) {
        console.error("EnhancedScrollAnimation error:", error);
        // Fallback: make elements visible if animation fails
        gsap.set(element.current.children, { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0 });
      }
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration, end, once, scrub, stagger, start, markers]);

  return (
    <Tag ref={element} className={`enhanced-scroll-animation ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default EnhancedScrollAnimation; 