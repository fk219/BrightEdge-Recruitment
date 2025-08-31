'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Users, Briefcase, Sparkles, CheckCircle, Award, Rocket, Building2, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import hero from '../../../../public/images/Hero.webp';
import { safeScrollTrigger, safeCounter, cleanupAnimations, animationPresets } from '../../utils/gsapUtils';

export default function DualAudienceHero() {
  // State to track client-side mounting
  const [isMounted, setIsMounted] = useState(false);
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const statsRef = useRef([]);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const trustIndicatorsRef = useRef(null);

  // Stats data for the statistics section
  const stats = [
    { value: '15K+', label: 'Placements', icon: Rocket },
    { value: '2.5K+', label: 'Companies', icon: Building2 },
    { value: '95%', label: 'Success Rate', icon: Award }
  ];

  // Ensure component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // GSAP Animations with ScrollTrigger using utility functions
  useGSAP(() => {
    // Use safe animation utilities
    safeScrollTrigger(badgeRef.current, animationPresets.fadeInUp.from, animationPresets.fadeInUp.to);
    safeScrollTrigger(headlineRef.current, animationPresets.fadeInUp.from, { ...animationPresets.fadeInUp.to, delay: 0.2 });
    safeScrollTrigger(paragraphRef.current, animationPresets.fadeInUp.from, { ...animationPresets.fadeInUp.to, delay: 0.4 });
    safeScrollTrigger(ctaRef.current, animationPresets.fadeInUp.from, { ...animationPresets.fadeInUp.to, delay: 0.6 });
    safeScrollTrigger(trustIndicatorsRef.current, animationPresets.fadeInUp.from, { ...animationPresets.fadeInUp.to, delay: 0.8 });
    safeScrollTrigger(rightContentRef.current, animationPresets.scaleIn.from, { ...animationPresets.scaleIn.to, delay: 0.6 });

    // Stats counter animations
    if (statsRef.current.length > 0) {
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          // Animate container first
          safeScrollTrigger(stat.parentElement, animationPresets.fadeInUp.from, { 
            ...animationPresets.fadeInUp.to, 
            delay: 1 + (index * 0.15) 
          });
          
          // Then animate counter
          safeCounter(stat, stats[index].value, {
            scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            delay: 1.2 + (index * 0.15)
          });
        }
      });
    }

    // Cleanup on unmount
    return () => cleanupAnimations(heroRef.current);
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute top-[-15%] right-[-10%] w-[80%] h-[70%] 
        bg-gradient-to-br from-blue-500/30 via-indigo-600/25 to-indigo-700/20 
        rounded-full blur-[140px] opacity-70"></div>

      <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] 
        bg-gradient-to-tr from-indigo-600/25 via-blue-700/20 to-blue-800/15 
        rounded-full blur-[120px] opacity-60"></div>

      <div className="absolute top-[30%] left-[40%] w-[30%] h-[40%] 
        bg-gradient-to-r from-purple-600/20 via-blue-700/15 to-indigo-500/20 
        rounded-full blur-[100px] opacity-50"></div>
  
      {/* Hero Content Container */}
      <div className="relative flex flex-col z-10">
        <div className="flex-1 flex items-center pt-8 sm:pt-12 md:pt-16 lg:pt-10 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div 
                ref={leftContentRef} 
                className="order-2 lg:order-1 text-center lg:text-left"
              >
                {/* Badge */}
                <div 
                  ref={badgeRef}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 rounded-full text-base font-medium mb-6"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>#1 Talent Marketplace</span>
                </div>
                
                {/* Headline */}
                <h1 
                  ref={headlineRef}
                  className="font-bitter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-8"
                  suppressHydrationWarning={true}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block">Connecting</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 inline-block">Talent</span> to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 inline-block">Success</span>
                </h1>

                {/* Paragraph */}
                <p 
                  ref={paragraphRef}
                  className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-none lg:max-w-lg mx-auto lg:mx-0"
                >
                  Connect with top-tier professionals or find your dream career. 
                  We're the bridge between ambitious talent and innovative companies.
                </p>

                {/* CTA Buttons */}
                <div 
                  ref={ctaRef}
                  className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                  <a 
                    href="/find-jobs"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-full font-medium shadow-lg text-lg transition-colors duration-300 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Briefcase className="w-6 h-6" />
                    <span className="font-semibold">Find Dream Job</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </a>
                  
                  <a 
                    href="/hire-talent"
                    className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-900 py-4 px-8 rounded-full font-medium text-lg transition-colors duration-300 hover:border-blue-300 hover:text-blue-600"
                  >
                    <Users className="w-6 h-6" />
                    <span className="font-semibold">Hire Top Talent</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <div 
                  ref={trustIndicatorsRef}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10"
                >
                  {/* User Avatars */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm sm:text-base text-gray-600">Join 15K+ professionals</span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm sm:text-base text-gray-600 ml-1">4.9/5 rating</span>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center lg:text-left py-3 px-2">
                        <div className="flex items-center justify-center lg:justify-start mb-2">
                          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        <h3 
                          ref={el => statsRef.current[index] = el}
                          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
                        >
                          0
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div 
                ref={rightContentRef} 
                className="relative order-1 lg:order-2"
              >
                <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image 
                      src={hero} 
                      alt="Talent Marketplace Hero" 
                      fill
                      quality={100}
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="hidden md:block absolute -top-3 lg:-top-4 -left-3 lg:-left-4 bg-white rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-xs lg:text-sm">Verified Profile</p>
                        <p className="text-gray-600 text-xs">Top 5% Talent</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute -bottom-3 lg:-bottom-4 -right-3 lg:-right-4 bg-white rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-xs lg:text-sm">30% Salary Increase</p>
                        <p className="text-gray-600 text-xs">Average placement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}