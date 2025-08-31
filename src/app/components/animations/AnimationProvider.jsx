"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

// Register GSAP plugins only once at the top level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AnimationProvider({ children }) {
  const container = useRef();
  
  // Set up smooth scrolling and reduced motion support
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Disable animations for users who prefer reduced motion
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.documentElement.classList.add('reduce-motion');
      return;
    }
    
    // Enable smooth scrolling for the entire app
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  // Set up GSAP context with improved configuration
  useGSAP(
    () => {
      // Check for reduced motion again in GSAP context
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;
      
      // Global GSAP defaults
      gsap.defaults({ 
        ease: "power2.out",
        duration: 0.6,
        force3D: true
      });
      
      // Configure ScrollTrigger defaults with better settings
      ScrollTrigger.config({
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        limitCallbacks: true,
        syncInterval: 40,
      });

      // Refresh ScrollTrigger after a short delay to ensure proper initialization
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
