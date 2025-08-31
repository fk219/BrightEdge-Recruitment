'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Briefcase, UserCheck, ArrowRight, Calendar, Phone, Star, CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  const navigateToClient = () => {
    router.push('/hire-talent');
  };

  // Use GSAP with useGSAP hook for better cleanup
  useGSAP(() => {
    // Simple fade-in animation for hero content
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
      }
    );

    // Animate child elements with stagger
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
      }
    );

    // Subtle floating animation for background elements
    const floatingElements = heroRef.current.querySelectorAll('.floating-element');
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: index % 2 === 0 ? -15 : 15,
        x: index % 3 === 0 ? 10 : -5,
        duration: 3 + index,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    // Button hover effect setup
    const button = heroRef.current.querySelector('.cta-button');
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button.querySelector('.arrow-icon'), {
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button.querySelector('.arrow-icon'), {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

  }, { scope: heroRef });

  return (
    <div 
      ref={heroRef} 
      className="relative py-20 bg-white overflow-hidden"
    >

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Additional Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="floating-element absolute bottom-20 left-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={contentRef} 
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30 shadow-lg">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>For Forward-Thinking Companies</span>
              </div>
              
              <h1 className="font-bitter text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Build Your
                <span className="block mt-2 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  Dream Team?
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
                Partner with us to access pre-screened talent and streamline your 
                recruitment process. Let's discuss your hiring needs today.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  className="cta-button group flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
                  onClick={navigateToClient}
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="arrow-icon w-5 h-5 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>Fast turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;