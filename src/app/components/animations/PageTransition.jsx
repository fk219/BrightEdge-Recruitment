'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page enter animation
      gsap.fromTo(containerRef.current,
        { 
          opacity: 0,
          y: 20,
          scale: 0.98
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        }
      );

      // Overlay animation for smooth transitions
      gsap.fromTo(overlayRef.current,
        {
          scaleY: 1,
          transformOrigin: 'top'
        },
        {
          scaleY: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-50 pointer-events-none"
        style={{ transformOrigin: 'top' }}
      />
      
      {/* Page content */}
      <div ref={containerRef} className="opacity-0">
        {children}
      </div>
    </>
  );
};

// Advanced page transition with custom animations
export const AdvancedPageTransition = ({ children, animationType = 'fade' }) => {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animations = {
        fade: () => {
          gsap.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        },
        
        slideUp: () => {
          gsap.fromTo(containerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          );
        },
        
        slideLeft: () => {
          gsap.fromTo(containerRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
          );
        },
        
        scale: () => {
          gsap.fromTo(containerRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
          );
        },
        
        rotate: () => {
          gsap.fromTo(containerRef.current,
            { opacity: 0, rotation: -5, scale: 0.95 },
            { opacity: 1, rotation: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
          );
        },
        
        morphing: () => {
          gsap.fromTo(containerRef.current,
            { 
              opacity: 0, 
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
            },
            { 
              opacity: 1, 
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              duration: 0.8, 
              ease: 'power2.out' 
            }
          );
        }
      };

      const animation = animations[animationType] || animations.fade;
      animation();
    });

    return () => ctx.revert();
  }, [pathname, animationType]);

  return (
    <div ref={containerRef} className="opacity-0">
      {children}
    </div>
  );
};

// Staggered content reveal animation
export const StaggeredReveal = ({ children, stagger = 0.1, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.children;
      
      gsap.fromTo(elements,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: stagger,
          delay: delay,
          ease: 'power2.out'
        }
      );
    });

    return () => ctx.revert();
  }, [stagger, delay]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

// Magnetic hover effect component
export const MagneticHover = ({ children, strength = 0.3 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={elementRef} className="inline-block">
      {children}
    </div>
  );
};

// Parallax scroll component
export const ParallaxScroll = ({ children, speed = 0.5, direction = 'up' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      const transform = direction === 'up' 
        ? `translateY(${rate}px)` 
        : direction === 'down'
        ? `translateY(${-rate}px)`
        : direction === 'left'
        ? `translateX(${rate}px)`
        : `translateX(${-rate}px)`;

      gsap.set(element, { transform });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

// Text reveal animation
export const TextReveal = ({ children, delay = 0, duration = 0.8 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current;
      if (!text) return;

      // Split text into characters
      const chars = text.textContent.split('');
      text.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
      ).join('');

      const spans = text.querySelectorAll('span');
      
      gsap.fromTo(spans,
        { 
          opacity: 0,
          y: 50,
          rotationX: -90
        },
        { 
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: duration,
          stagger: 0.02,
          delay: delay,
          ease: 'back.out(1.7)'
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div ref={textRef} className="overflow-hidden">
      {children}
    </div>
  );
};

// Morphing shape component
export const MorphingShape = ({ shapes, duration = 2, autoPlay = true }) => {
  const shapeRef = useRef(null);
  const currentShapeIndex = useRef(0);

  useEffect(() => {
    if (!autoPlay || shapes.length < 2) return;

    const morphShape = () => {
      const nextIndex = (currentShapeIndex.current + 1) % shapes.length;
      const currentPath = shapes[currentShapeIndex.current];
      const nextPath = shapes[nextIndex];

      gsap.to(shapeRef.current, {
        attr: { d: nextPath },
        duration: duration,
        ease: 'power2.inOut',
        onComplete: () => {
          currentShapeIndex.current = nextIndex;
        }
      });
    };

    const interval = setInterval(morphShape, duration * 1000 + 500);
    return () => clearInterval(interval);
  }, [shapes, duration, autoPlay]);

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        ref={shapeRef}
        d={shapes[0]}
        fill="currentColor"
        className="transition-all duration-300"
      />
    </svg>
  );
};

// Floating elements animation
export const FloatingElements = ({ children, intensity = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.children;
      
      Array.from(elements).forEach((element, index) => {
        gsap.to(element, {
          y: `random(-${20 * intensity}, ${20 * intensity})`,
          x: `random(-${10 * intensity}, ${10 * intensity})`,
          rotation: `random(-${5 * intensity}, ${5 * intensity})`,
          duration: `random(${2 / intensity}, ${4 / intensity})`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });
      });
    });

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default PageTransition;