'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll trigger refresh on route change
      ScrollTrigger.refresh();

      // Global scroll animations for common elements
      const animateElements = () => {
        // Fade in animations for elements with data-animate="fade"
        gsap.utils.toArray('[data-animate="fade"]').forEach((element) => {
          gsap.fromTo(element, 
            { 
              opacity: 0, 
              y: 30 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Slide in from left for elements with data-animate="slideLeft"
        gsap.utils.toArray('[data-animate="slideLeft"]').forEach((element) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              x: -50
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Slide in from right for elements with data-animate="slideRight"
        gsap.utils.toArray('[data-animate="slideRight"]').forEach((element) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              x: 50
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Scale in for elements with data-animate="scale"
        gsap.utils.toArray('[data-animate="scale"]').forEach((element) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              scale: 0.8
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Stagger animations for elements with data-animate="stagger"
        gsap.utils.toArray('[data-animate="stagger"]').forEach((container) => {
          const children = container.children;
          gsap.fromTo(children,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Parallax effect for elements with data-animate="parallax"
        gsap.utils.toArray('[data-animate="parallax"]').forEach((element) => {
          const speed = element.dataset.speed || 0.5;
          gsap.to(element, {
            yPercent: -50 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });

        // Counter animations for elements with data-animate="counter"
        gsap.utils.toArray('[data-animate="counter"]').forEach((element) => {
          const endValue = parseInt(element.dataset.count || element.textContent);
          const duration = parseFloat(element.dataset.duration || 2);
          
          gsap.fromTo(element, 
            { textContent: 0 },
            {
              textContent: endValue,
              duration: duration,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              },
              onUpdate: function() {
                const current = Math.floor(this.targets()[0].textContent);
                const suffix = element.dataset.suffix || '';
                element.textContent = current + suffix;
              }
            }
          );
        });

        // Progress bar animations for elements with data-animate="progress"
        gsap.utils.toArray('[data-animate="progress"]').forEach((element) => {
          const progress = element.dataset.progress || 100;
          gsap.fromTo(element,
            { width: '0%' },
            {
              width: `${progress}%`,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      };

      // Initialize animations
      animateElements();

      // Smooth scroll for anchor links
      const handleAnchorClick = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: target,
                offsetY: 100
              },
              ease: 'power2.inOut'
            });
          }
        }
      };

      // Add smooth scroll to all anchor links
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', handleAnchorClick);
      });

      // Cleanup function
      return () => {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.removeEventListener('click', handleAnchorClick);
        });
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  // Refresh ScrollTrigger on window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;